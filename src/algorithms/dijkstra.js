const PriorityQueue = require("../data-structures/priority-queue");

/**
 * Dijkstra's algorithm. Best case O(V + E). Average case O(V + E). Worst case O(V + E). Space O(V). V for number of vertices, E for number of edges
 * @param {Object} graph Graph
 * @param {string | number} start Starting node
 * @returns {Object} Object containing distances and previous
 */
function dijkstra(start, finish) {
  const nodes = new PriorityQueue();
  const distances = {};
  const previous = {};
  let path = []; // to return at the end
  let smallest;

  // Build up initial state
  for (let vertex in this.adjacencyList) {
    if (vertex === start) {
      distances[vertex] = 0;
      nodes.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      nodes.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }

  // As long as there is something to visit
  while (nodes.values.length) {
    smallest = nodes.dequeue().val;
    if (smallest === finish) {
      // We are done, build path to return
      while (previous[smallest]) {
        path.push(smallest);
        smallest = previous[smallest];
      }
      break;
    }

    if (smallest || distances[smallest] !== Infinity) {
      for (let neighbor in this.adjacencyList[smallest]) {
        // Find neighboring node
        let nextNode = this.adjacencyList[smallest][neighbor];
        // Calculate new distance to neighboring node
        let candidate = distances[smallest] + nextNode.weight;
        let nextNeighbor = nextNode.node;
        if (candidate < distances[nextNeighbor]) {
          // Updating new smallest distance to neighbor
          distances[nextNeighbor] = candidate;
          // Updating previous - how we got to neighbor
          previous[nextNeighbor] = smallest;
          // Enqueue in priority queue with new priority
          nodes.enqueue(nextNeighbor, candidate);
        }
      }
    }
  }

  return path.concat(smallest).reverse();
}

module.exports = dijkstra;
