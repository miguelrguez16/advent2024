const board = `
 
.....
.*#.*
.@...
.....

`

type Board = string
type Moves = string
type Result = 'fail' | 'crash' | 'success'

function moveReno(board: Board, moves: Moves): Result {

    // Define constants and movement mappings
    const RENO = '@', OBSTACLE = '#', ITEM = '*', EMPTY = '.'
    const validMoves = new Set(['U', 'D', 'L', 'R'])
    const moveMap: { [key: string]: { dx: number, dy: number } } = {
        'U': { dx: 0, dy: -1 }, // Up 
        'D': { dx: 0, dy: 1 }, // Down
        'L': { dx: -1, dy: 0 }, // Left
        'R': { dx: 1, dy: 0 } // Right
    }

    // Validate moves
    for (const move of moves) {
        if (!validMoves.has(move)) {
            return 'fail'
        }
    }

    let renoPosition = { x: 0, y: 0 }

    const dirtyGrid = board.split('\n')
    const grid: string[][] = []

    // Validate and build grid, find Reno's initial position
    for (let y = 0; y < dirtyGrid.length; y++) {
        const row = dirtyGrid[y].trim()
        if (row.length === 0) continue

        const rowArray = row.split('')
        grid.push(rowArray)

        const renoX = rowArray.indexOf(RENO)
        if (renoX !== -1) {
            renoPosition = { x: renoX, y: grid.length - 1 }
        }
    }

    // Process each move
    for (const move of moves) {
        const { dx, dy } = moveMap[move]
        const newX = renoPosition.x + dx
        const newY = renoPosition.y + dy

        // Check boundaries
        if (newX < 0 || newX >= grid[0].length || newY < 0 || newY >= grid.length) {
            return 'crash'
        }

        const cell = grid[newY][newX]

        if (cell === OBSTACLE) {
            return 'crash'
        } else if (cell === ITEM) {
            return 'success'
        }

        // Update Reno's position
        renoPosition = { x: newX, y: newY }
    }

    return 'fail';
}

console.log("Move Reno", moveReno(board, 'D'), " expected: 'fail'")
// ➞ 'fail' -> se mueve pero no recoge nada

console.log("Move Reno", moveReno(board, 'U'), " expected: 'success'")
// ➞ 'success' -> recoge algo (*) justo encima

console.log("Move Reno", moveReno(board, 'RU'), " expected: 'crash'")
// ➞ 'crash' -> choca contra un obstáculo (#)

console.log("Move Reno", moveReno(board, 'RRRUU'), " expected: 'success'")
// ➞ 'success' -> recoge algo (*)

console.log("Move Reno", moveReno(board, 'DD'), " expected: 'crash'")
// ➞ 'crash' -> se choca con la parte de abajo del tablero

console.log("Move Reno", moveReno(board, 'UUU'), " expected: 'success'")
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

console.log("Move Reno", moveReno(board, 'RR'), " expected: 'fail'")
// ➞ 'fail' -> se mueve pero no recoge nada