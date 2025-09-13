function graphBfs(startVertex) {
  const queue = [];
  const visited = new Set();

  queue.push(startVertex);
  visited.add(startVertex);

  while (queue.length) {
    const vertex = queue.shift();
    const neighbors = graph1[vertex];

    // print all or check whether a particule vertex present
    console.log(vertex, neighbors, visited);
    for (let neighbor of Object.keys(neighbors)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

console.log(graphBfs("1"));
