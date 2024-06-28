const bfs = require("./breadth-first-search");

test("correctly calculates the shortest path", () => {
  expect(bfs({ 0: [1, 2], 1: [3], 2: [4], 3: [4], 4: [] }, 0)).toEqual(
    new Set([0, 1, 2, 3, 4])
  );
});
