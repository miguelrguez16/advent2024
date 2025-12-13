type Factory = string[]
type Result =
    'completed'  // if the present reaches the exit '.'
    | 'broken'  // if the last move is not "."
    | 'loop'    // if the visits a position more than once


function runFactory(factory: Factory): Result {
    let x = 0, y = 0; // initial position
    console.log("Starting factory run...", factory);
    // position tracking
    const visited = new Set<string>();

    while (true) {
        // 1. Verify boundaries
        // if out of bounds, return 'broken'
        if (y < 0 || y >= factory.length || x < 0 || x >= factory[0].length) {
            return 'broken';
        }

        // 2. Check for loops
        const currentPosition = `${x},${y}`;
        if (visited.has(currentPosition)) {
            return 'loop';
        }
        visited.add(currentPosition);

        // 3. Extract movement instruction
        const movement = factory[y][x];

        // 4. Verificar si es la salida
        if (movement === '.') {
            return 'completed';
        }

        // 5. Move (Update coordinates)
        switch (movement) {
            case '>': x += 1; break;
            case '<': x -= 1; break;
            case 'v': y += 1; break;
            case '^': y -= 1; break;
            default: return 'broken';
        }
    }
}

function runFactory1(factory: Factory): Result {
    let position = { x: 0, y: 0 }
    const visited = new Set<string>()
    const directions: Record<string, number[]> = {
        ">": [1, 0],
        "<": [-1, 0],
        "^": [0, 1],
        "v": [0, -1],
    }

    console.log("new position ->", position);
    let hasExited = false
    for (let index = 0; index < factory.length; index++) {
        const steps = factory[index];
        for (let jndex = 0; jndex < steps.length; jndex++) {
            const movement = factory[index][jndex]

            if (movement === '.') {
                hasExited = true
                break
            }

            // calculate next position
            const direction = directions[movement]
            if (direction) {
                position.x += direction[0]
                position.y += direction[1]
            }
            console.log("movement", movement, " new position ->", position);

            const currentPosition = `${position.x},${position.y}`
            if (visited.has(currentPosition)) {
                return 'loop'
            }
            visited.add(currentPosition)
        }
    }

    return hasExited ? 'completed' : 'broken'
}


// console.log(runFactory([
//     '>>.'
// ])) // 'completed'

// console.log(runFactory([
//     '>>>'
// ])) // 'broken'

// console.log(runFactory([
//     '>><'
// ]))  // 'loop'

// console.log(runFactory([
//     '>>v',
//     '..<'
// ])) // 'completed'

// console.log(runFactory([
//     '>>v',
//     '<<<'
// ])) // 'broken'

console.log("result ->", runFactory([
    '>v.',
    '^..'
])) // 'completed'

console.log("result ->", runFactory([
    'v.',
    '^.'
])) // 'loop'