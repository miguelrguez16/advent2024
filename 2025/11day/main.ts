function findUnsafeGifts(warehouse: string[]): number {
    const CAMARA = "#", REGALO = "*", VALID_DIRECTIONS = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ]

    const validateDirections = (r: number, c: number): boolean => {
        for (const [dr, dc] of VALID_DIRECTIONS) {
            const nr = r + dr
            const nc = c + dc
            if (nr >= 0 && nr < warehouse.length && nc >= 0 && nc < warehouse[0].length) {
                if (warehouse[nr][nc] === CAMARA) {
                    return true
                }
            }
        }
        return false
    }


    let unSafeGifts = 0

    const rows = warehouse.length
    const cols = warehouse[0].length

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (warehouse[r][c] === REGALO) {
                if (!validateDirections(r, c)) {
                    unSafeGifts++
                }
            }
        }
    }
    return unSafeGifts
}
let result = 0

result = findUnsafeGifts([
    '.*.',
    '*#*',
    '.*.'
]) // ➞ 0
console.log("Expected: 0, Result:", result)


// Todos los regalos están junto a una cámara

// result = findUnsafeGifts([
//     '...',
//     '.*.',
//     '...'
// ]) // ➞ 1
// console.log("Expected: 1, Result:", result)
// // Este regalo no tiene cámaras alrededor

// result = findUnsafeGifts([
//     '*.*',
//     '...',
//     '*#*'
// ]) // ➞ 2
// console.log("Expected: 2, Result:", result)

// // Los regalos en las esquinas superiores no tienen cámaras alrededor

// result = findUnsafeGifts([
//     '.....',
//     '.*.*.',
//     '..#..',
//     '.*.*.',
//     '.....'
// ]) // ➞ 4
// console.log("Expected: 4, Result:", result)