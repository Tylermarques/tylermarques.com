import { visit } from 'unist-util-visit';

export function remarkStaticImages() {
  return function transformer(tree) {
    visit(tree, 'image', (node) => {
      // Don't modify absolute URLs or URLs that already start with /
      if (node.url.startsWith('http') || node.url.startsWith('/')) {
        return;
      }

      // Prefix relative image paths with /images/
      node.url = `/images/${node.url}`;
    });
  };
}
