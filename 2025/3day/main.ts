function drawGift(size: number, symbol: string): string {
    if (size < 2) return ""

    const full = Array(size); // bsae array
    const line = full.fill(symbol).join(''); // repeated first and last line

    full[0] = line + '\n' // first line
    full[size - 1] = line // last line


    // middle lines
    for (let i = 1; i < size - 1; i++) {
        // each line of the middle part
        full[i] = symbol + ' '.repeat(size - 2) + symbol + '\n'
    }

    return full.join('');
}



const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
console.log(g4)
// ""  pobre becario…