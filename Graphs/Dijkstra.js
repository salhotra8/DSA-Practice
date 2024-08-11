// Dijkstra’s Algorithm: Shortest Path

// Define a graph using an adjacency list
const graph = {
    A: { B: 1, C: 4 },       // Vertex A is connected to Vertex B with a weight of 1 and Vertex C with a weight of 4
    B: { A: 1, C: 2, D: 5 }, // ... and so on for other vertices
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

function dijkstra(graph, start) {
    // Create an object to store the shortest distance from the start Vertex to every other Vertex
    let distances = {};

    // A set to keep track of all visited vertices
    let visited = new Set();

    // Get all the vertices of the graph
    let vertices = Object.keys(graph);

    // Initially, set the shortest distance to every Vertex as Infinity
    for (let Vertex of vertices) {
        distances[Vertex] = Infinity;
    }
    
    // The distance from the start Vertex to itself is 0
    distances[start] = 0;

    // Loop until all vertices are visited
    while (vertices.length) {
        // Sort vertices by distance and pick the closest unvisited Vertex
        vertices.sort((a, b) => distances[a] - distances[b]);
        let closestVertex = vertices.shift();

        // If the shortest distance to the closest Vertex is still Infinity, then remaining vertices are unreachable and we can break
        if (distances[closestVertex] === Infinity) break;

        // Mark the chosen Vertex as visited
        visited.add(closestVertex);

        // For each neighboring Vertex of the current Vertex
        for (let neighbor in graph[closestVertex]) {
            // If the neighbor hasn't been visited yet
            if (!visited.has(neighbor)) {
                // Calculate tentative distance to the neighboring Vertex
                let newDistance = distances[closestVertex] + graph[closestVertex][neighbor];
                
                // If the newly calculated distance is shorter than the previously known distance to this neighbor
                if (newDistance < distances[neighbor]) {
                    // Update the shortest distance to this neighbor
                    distances[neighbor] = newDistance;
                }
            }
        }
    }

    // Return the shortest distance from the start Vertex to all vertices
    return distances;
}

// Example: Find shortest distances from Vertex A to all other vertices in the graph
console.log(dijkstra(graph, "A")); // Outputs: { A: 0, B: 1, C: 3, D: 4 }