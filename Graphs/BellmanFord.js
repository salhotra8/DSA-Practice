function bellmanFord(edges, verticesCount, start) {
  const distances = Array(verticesCount).fill(Infinity);
  distances[start] = 0;

  // Relax all edges (V - 1) times
  for (let i = 0; i < verticesCount - 1; i++) {
    for (let [u, v, weight] of edges) {
      if (distances[u] + weight < distances[v]) {
        distances[v] = distances[u] + weight;
      }
    }
  }

  // Check for negative weight cycles
  for (let [u, v, weight] of edges) {
    if (distances[u] + weight < distances[v]) {
      console.log("Graph contains a negative weight cycle");
      return null;
    }
  }

  return distances;
}


// Edge list: [from, to, weight]
const edges = [
  [0, 1, 4],
  [0, 2, 5],
  [1, 2, -3],
  [2, 3, 4],
  [3, 1, -6]
];

const verticesCount = 4;
const startVertex = 0;

const result = bellmanFord(edges, verticesCount, startVertex);

if (result) {
  console.log("Shortest distances from vertex 0:", result);
}
