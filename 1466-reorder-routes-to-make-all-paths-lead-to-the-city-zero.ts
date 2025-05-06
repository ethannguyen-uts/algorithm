function minReorderToCityZero(n: number, connections: number[][]): number {
  const graph = new Map();
  for (let i = 0; i < connections.length; i++) {
    const a = connections[i][0];
    const b = connections[i][1];

    if (!graph.has(a)) {
      graph.set(a, []);
    }
    const toCity = graph.get(a);
    toCity.push([b, 1]);

    if (!graph.has(b)) {
      graph.set(b, []);
    }
    const fromCity = graph.get(b);
    fromCity.push([a, 0]);
  }

  const visited: Set<number> = new Set<number>();
  let totalFlips = 0;

  const dfs = (city: number) => {
    if (visited.has(city)) {
      return;
    }

    visited.add(city);

    const cityConnections = graph.get(city);
    for (let i = 0; i < cityConnections.length; i++) {
      const [neighborCity, flipRequired] = cityConnections[i];

      if (!visited.has(neighborCity)) {
        totalFlips += flipRequired;
        dfs(neighborCity);
      }
    }
  };

  dfs(0);

  return totalFlips;
}

/*
    For each connection, we need to know the direction of one city to another
    with A -> B connection we store it as 1
    with B -> A connection we store it as 0

    Then we start from the city 0

    from 0 we go to it neighbour city => if direction is from city 0 to city 1 
        => We need to flip the direction => (add the number of edge changes)
*/
