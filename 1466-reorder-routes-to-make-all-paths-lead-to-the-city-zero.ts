function minReorder(n: number, connections: number[][]): number {
    const connect = new Map();
    for (let i = 0; i < connections.length; i++) {

        const a = connections[i][0];
        const b = connections[i][1];
        if (!connect.has(a)) {
            connect.set(a, []);
        }
        const arr1 = connect.get(a)
        arr1.push([b, 1])

        if (!connect.has(b)) {
            connect.set(b, [])
        }

        const arr2 = connect.get(b)
        arr2.push([a, 0])

    }

    const visited: Set<number> = new Set<number>();
    let totalFlip = 0;

    const dfs = (city: number) => {
        if (visited.has(city)) {
            return
        }


        visited.add(city)

        const myConnections = connect.get(city);
        console.log(myConnections)
        for (let i = 0; i < myConnections.length; i++) {
            const current = myConnections[i]

            if (!visited.has(current[0])) {
                totalFlip = totalFlip + current[1];
                dfs(current[0])
            }
        }
    }

    dfs(0)

    return totalFlip;
};

/*
    For each connection, we need to know the direction of one city to another
    with A -> B connection we store it as 1
    with B -> A connection we store it as 0

    Then we start from the city 0

    from 0 we go to it neighbour city => if direction is from city 0 to city 1 
        => We need to flip the direction => (add the number of edge changes)
*/


