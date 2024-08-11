function graphBfs(startVertex) {
  const queue = [];
  const visited = new Set();

  queue.push(startVertex);

  while (queue.length) {
    const vertex = queue.shift();
    const neighbors = graph1.edges[vertex];

    if (!visited.has(vertex)) {
      visited.add(vertex);
      // print all or check whether a particule vertex present
      console.log(vertex, neighbors, visited);
      for (let neighbor in neighbors) {
        queue.push(neighbor);
      }
    }
  }
}

console.log(graphBfs("1"));
