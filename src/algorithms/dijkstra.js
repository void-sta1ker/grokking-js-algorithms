const Queue = require("../data-structures/queue");

/**
 * Dijkstra's algorithm. Best case O(V + E). Average case O(V + E). Worst case O(V + E). Space O(V). V for number of vertices, E for number of edges
 * @param {Object} graph Graph
 * @param {string | number} start Starting node
 * @returns {Object} Object containing distances and previous
 */
function dijkstra(graph, start) {
  const distances = {};
  const previous = {};

  const visited = new Set();
  const queue = new Queue();

  queue.enqueue(start);

  distances[start] = 0;
  previous[start] = null;

  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    visited.add(current);

    for (const neighbor in graph[current]) {
      if (!visited.has(neighbor)) {
        queue.enqueue(neighbor);
        distances[neighbor] = distances[current] + 1;
        previous[neighbor] = current;
      }
    }
  }

  return { distances, previous };
}

module.exports = dijkstra;
