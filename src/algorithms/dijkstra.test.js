const dijkstra = require("./dijkstra");

test("correctly calculates the shortest path", () => {
  expect(
    dijkstra(
      {
        A: { B: 5, C: 2 },
        B: { A: 5, C: 1, D: 2 },
        C: { A: 2, B: 1, D: 3 },
        D: { B: 2, C: 3 },
      },
      "A"
    )
  ).toEqual({ A: 0, B: 5, C: 7, D: 9 });
});
