/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices: number[], length: number): string {
    const RENO = "r"
    const base: string[] = Array(length).fill("~")
    const emptyBase = base.join("")
    const struct = Array(indices.length)

    for (let i = 0; i < indices.length; i++) {
        const element = indices[i];

        if (element === 0) {
            struct[i] = emptyBase.padStart(length + indices.length - i - 1) + ` /${i + 1}`
        } else if (element > 0) {
            const temporal = Array.from(base)
            temporal[element] = RENO
            struct[i] = temporal.join("").padStart(length + indices.length - i - 1) + ` /${i + 1}`
        } else {
            const minus = Array.from(base)
            minus[length + element] = RENO
            struct[i] = minus.join("").padStart(length + indices.length - i - 1) + ` /${i + 1}`
        }

    }
    return struct.join("\n")
}


console.log(drawRace([0, 5, -3], 10))
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log("\n\n")
console.log(drawRace([2, -1, 0, 5], 8))
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/
console.log("\n\n")

console.log(drawRace([3, 7, -2], 12))
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/
console.log("\n\n")
