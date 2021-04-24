function createQueue() {
  const queue = [];
  return {
    enqueue(item) {
      return queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
  };
}

// a collection of nodes or vertices that may or may not point to other nodes

// a node pointing to another forms an edge

function createNode(key) {
  const neighbors = [];
  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node);
    },
  };
}

function createGraph(directed = false) {
  const edges = [];
  const nodes = [];
  return {
    directed,
    nodes,
    edges,
    addNode(key) {
      nodes.push(createNode(key));
    },
    getNode(key) {
      return nodes.find((node) => node.key === key);
    },
    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);
      node1.addNeighbor(node2);
      edges.push(`${node1key}-${node2key}`);
      if (!directed) {
        node2.addNeighbor(node1);
      }
    },
    print() {
      return nodes
        .map(({ key, neighbors }) => {
          let result = key;
          if (neighbors.length) {
            result += ` ==> ${neighbors.map((n) => n.key).join(' ')}`;
          }
          return result;
        })
        .join('\n');
    },
    breadthFirstSearch(startingNodeKey, visitFn) {
      const firstNode = this.getNode(startingNodeKey);
      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc;
      }, {});
      const queue = createQueue();
      queue.enqueue(firstNode);
      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();
        if (!visited[currentNode.key]) {
          visitFn(currentNode);
          visited[currentNode.key] = true;
        }
        currentNode.neighbors.forEach((node) => {
          if (!visited[node.key]) {
            queue.enqueue(node);
          }
        });
      }
    },
    depthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);
      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc;
      }, {});
      function explore(node) {
        if (visited[node.key]) {
          return;
        }
        visitFn(node);
        visited[node.key] = true;
        node.neighbors.forEach((n) => explore(n));
      }
      explore(startingNode);
    },
  };
}

const nodes = ['a', 'b', 'c', 'd', 'e', 'f'];
const edges = [
  ['a', 'b'],
  ['a', 'e'],
  ['a', 'f'],
  ['b', 'd'],
  ['b', 'e'],
  ['c', 'b'],
  ['d', 'c'],
  ['d', 'e'],
  ,
];

const graph = createGraph(true);

nodes.forEach((node) => {
  graph.addNode(node);
});

edges.forEach((nodes) => {
  graph.addEdge(...nodes);
});

// graph.breadthFirstSearch('a', (node) => {
//   console.log(node.key);
// });

graph.depthFirstSearch('a', (node) => {
  console.log(node.key);
});

// graph.addNode('Rick');
// graph.addNode('Morty');
// graph.addNode('Summer');
// graph.addNode('Beth');
// graph.addNode('Jerry');

// graph.addEdge('Rick', 'Morty');
// graph.addEdge('Morty', 'Rick');
// graph.addEdge('Rick', 'Beth');
// graph.addEdge('Morty', 'Beth');
// graph.addEdge('Beth', 'Rick');
// graph.addEdge('Jerry', 'Beth');

// console.log(graph.print());

// breadth first search
