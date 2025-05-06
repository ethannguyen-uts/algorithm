function findCircleNum(isConnected: number[][]): number {
  const n: number = isConnected.length;
  const visitedCities: Set<number> = new Set<number>();
  let numberOfProvinces = 0;

  const dfs = (i: number) => {
    if (visitedCities.has(i)) {
      return;
    }
    visitedCities.add(i);

    for (let j = 0; j < n; j++) {
      if (i !== j && isConnected[i][j] === 1 && !visitedCities.has(j)) {
        dfs(j);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visitedCities.has(i)) {
      dfs(i);
      numberOfProvinces++;
    }
  }

  return numberOfProvinces;

  /*
        Go through each city
        1. From each city
        2. If neighbor city exist and neighbour city is not visited => 
            3. visit the neighbour mark it as visited
            4. if the neighbour has neighbour =>(step 2)
  */
}
