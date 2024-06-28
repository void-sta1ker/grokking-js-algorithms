const Queue = require("../data-structures/queue");

/**
 * Breadth-first search. Best case O(V + E). Average case O(V + E). Worst case O(V + E). Space O(V). V for number of vertices, E for number of edges
 * @description Traverses a graph in a breadth-first manner
 * @param {Object} graph Graph
 * @param {string | number} start Starting node
 * @returns {Set} Set of visited nodes
 */
function bfs(graph, start) {
  const queue = new Queue();
  queue.enqueue(start);

  const visited = new Set();
  visited.add(start);

  while (queue.length > 0) {
    const current = queue.dequeue();
    console.log(current);

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }

  return visited;
}

module.exports = bfs;
