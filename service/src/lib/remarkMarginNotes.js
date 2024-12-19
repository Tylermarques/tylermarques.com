import { visit } from 'unist-util-visit';

export function remarkMarginNotes() {

  return function transformer(tree) {
    for (let i in tree.children) {
      let node = tree.children[i]
      // console.log(tree.children[i])

      if (node.type === 'blockquote') {
        // console.log(node)
      }
    }
    visit(tree, 'paragraph', (node) => {
      if (node.children && node.children[0].type === 'linkReference') {
        const text = node.children[1].value;
        const quoteType = node.children[0].label


        // Create a new node with the MarginNote component
        node.type = 'html';
        node.value = `<MarginNote note="">${text}</MarginNote>`;
        delete node.children;
      }
    });
  };
}
