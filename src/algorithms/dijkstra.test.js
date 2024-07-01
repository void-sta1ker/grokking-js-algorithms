const Graph = require("../data-structures/graph");
const dijkstra = require("./dijkstra");

test("correctly calculates the shortest path", () => {
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");

  //   {
  //     A: { B: 5, C: 2 },
  //     B: { A: 5, C: 1, D: 2 },
  //     C: { A: 2, B: 1, D: 3 },
  //     D: { B: 2, C: 3 },
  //   }
  graph.addEdge("A", "B", 5);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "A", 5);
  graph.addEdge("B", "C", 1);
  graph.addEdge("B", "D", 2);
  graph.addEdge("C", "A", 2);
  graph.addEdge("C", "B", 1);
  graph.addEdge("C", "D", 3);
  graph.addEdge("D", "B", 2);
  graph.addEdge("D", "C", 3);

  const path = dijkstra.call(graph, "A", "D");

  expect(path).toEqual(["A", "C", "D"]);
});
