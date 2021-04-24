function createNode(key) {
  const children = [];
  return {
    key,
    children,
    addChild(childKey) {
      const childNode = createNode(childKey);
      children.push(childNode);
      return childNode;
    },
  };
}

function createTree(rootKey) {
  const root = createNode(rootKey);
  return {
    root,
    print() {
      let result = '';
      function traverse(node, visitFn, depth) {
        visitFn(node, depth);
        if (node.children) {
          node.children.forEach((n) => traverse(n, visitFn, depth + 1));
        }
      }
      function addKeyToResult(node, depth) {
        result +=
          result.length === 0
            ? node.key
            : `\n${' '.repeat(depth * 2)}${node.key}`;
      }
      traverse(root, addKeyToResult, 1);
      return result;
    },
  };
}

const dom = createTree('dom');
const head = dom.root.addChild('head');
const body = dom.root.addChild('body');
const title = head.addChild('Learning Trees with Egghead');

const header = body.addChild('header');
const main = body.addChild('main');
const footer = body.addChild('footer');
const h1 = header.addChild('h1 -> tree lesson');
const p = main.addChild('p -> hello motherfucker');
const copyright = footer.addChild(`footer -> ${new Date().getFullYear()}`);

console.log(dom.print());
