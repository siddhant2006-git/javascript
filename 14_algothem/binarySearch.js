const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"],
};

console.log(graph["A"]);
// Output: ["B", "C"]
