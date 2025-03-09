// from https://github.com/sindresorhus/debounce/blob/main/index.js. Didn't want to add another dependancy for no reason. 
//MIT License

// Coprighht (c) Jeremy Ashkenas, Julian Gonggrijp, DocumentCloud, Investigative Reporters & Editors
// Copyright (c) Ben Carpenter, Billy Moon, Josh Goldberg, Julian Gruber, Kristofer Selbekk, Matthew Mueller, Nathan Rajlich, Oleg Pudeyev, Stephen Mathieson, TJ Holowaychuk, suhaotian, ven
// Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// @ts-nocheck
export function debounce(function_, wait = 100, options = {}) {
  if (typeof function_ !== 'function') {
    throw new TypeError(`Expected the first parameter to be a function, got \`${typeof function_}\`.`);
  }

  if (wait < 0) {
    throw new RangeError('`wait` must not be negative.');
  }

  // TODO: Deprecate the boolean parameter at some point.
  const { immediate } = typeof options === 'boolean' ? { immediate: options } : options;

  let storedContext;
  let storedArguments;
  let timeoutId;
  let timestamp;
  let result;

  function run() {
    const callContext = storedContext;
    const callArguments = storedArguments;
    storedContext = undefined;
    storedArguments = undefined;
    result = function_.apply(callContext, callArguments);
    return result;
  }

  function later() {
    const last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeoutId = setTimeout(later, wait - last);
    } else {
      timeoutId = undefined;

      if (!immediate) {
        result = run();
      }
    }
  }

  const debounced = function (...arguments_) {
    if (
      storedContext
      && this !== storedContext
      && Object.getPrototypeOf(this) === Object.getPrototypeOf(storedContext)
    ) {
      throw new Error('Debounced method called with different contexts of the same prototype.');
    }

    storedContext = this; // eslint-disable-line unicorn/no-this-assignment
    storedArguments = arguments_;
    timestamp = Date.now();

    const callNow = immediate && !timeoutId;

    if (!timeoutId) {
      timeoutId = setTimeout(later, wait);
    }

    if (callNow) {
      result = run();
    }

    return result;
  };

  Object.defineProperty(debounced, 'isPending', {
    get() {
      return timeoutId !== undefined;
    },
  });

  debounced.clear = () => {
    if (!timeoutId) {
      return;
    }

    clearTimeout(timeoutId);
    timeoutId = undefined;
  };

  debounced.flush = () => {
    if (!timeoutId) {
      return;
    }

    debounced.trigger();
  };

  debounced.trigger = () => {
    result = run();

    debounced.clear();
  };

  return debounced;
}
