function nearestExit(maze: string[][], entrance: number[]): number {
  const m = maze.length;
  const n = maze[0].length;

  const isExit = (position: number[]) => {
    const x = position[0];
    const y = position[1];

    if (x === entrance[0] && y === entrance[1]) {
      return false;
    }

    if (x === 0 || x === m - 1 || y === 0 || y === n - 1) {
      if (maze[x][y] === ".") {
        return true;
      }
    }

    return false;
  };

  const move = (direction: string, position: number[]) => {
    let newX;
    let newY;

    if (direction === "l") {
      newX = position[0];
      newY = position[1] - 1;
    }

    if (direction === "r") {
      newX = position[0];
      newY = position[1] + 1;
    }

    if (direction === "u") {
      newX = position[0] - 1;
      newY = position[1];
    }

    if (direction === "d") {
      newX = position[0] + 1;
      newY = position[1];
    }
    if (newX < 0 || newX >= m || newY < 0 || newY >= n) {
      return [false, newX, newY];
    }

    if (maze[newX][newY] === "+") {
      return [false, newX, newY];
    }

    if (visited.has(getVisitedKey(newX, newY))) {
      return [false, 0, 0];
    }

    return [true, newX, newY];
  };

  let queue = [entrance];
  let step = 0;
  const visited = new Set();
  visited.add(getVisitedKey(entrance[0], entrance[1]));

  while (queue.length) {
    const currentLength = queue.length;
    for (let i = 0; i < currentLength; i++) {
      const current = queue.shift()!;
      const left = move("l", current);
      const right = move("r", current);
      const up = move("u", current);
      const down = move("d", current);

      if (left[0]) {
        if (isExit([left[1], left[2]])) {
          return step + 1;
        }
        queue.push([left[1], left[2]]);
        visited.add(getVisitedKey(left[1], left[2]));
      }

      if (right[0]) {
        if (isExit([right[1], right[2]])) {
          return step + 1;
        }
        queue.push([right[1], right[2]]);
        visited.add(getVisitedKey(right[1], right[2]));
      }

      if (up[0]) {
        if (isExit([up[1], up[2]])) {
          return step + 1;
        }
        queue.push([up[1], up[2]]);
        visited.add(getVisitedKey(up[1], up[2]));
      }

      if (down[0]) {
        if (isExit([down[1], down[2]])) {
          return step + 1;
        }
        queue.push([down[1], down[2]]);
        visited.add(getVisitedKey(down[1], down[2]));
      }
    }
    step++;
  }

  return -1;
}

const getVisitedKey = (x, y) => {
  return x.toString() + "#" + y.toString();
};
