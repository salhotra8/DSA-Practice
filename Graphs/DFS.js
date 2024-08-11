function graphDfs(startVertex, visited = new Set()) {
  visited.add(startVertex);
  //do whatever needed here if you are doing search only then 'return' as well otherwise carryon with recurrsion
  console.log(startVertex);

  const neighbors = graph1.edges[startVertex];

  for (let neighbor in neighbors) {
    if (!visited.has(neighbor)) {
      graphDfs(neighbor, visited);
    }
  }
}

graphDfs("4");
