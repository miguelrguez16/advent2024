function drawTree(height: number, ornament: string, frequency: number): string {
    const treeLines = Array(height + 1)

    const generateRow = (currentRow: number, startCount: number) => {
        const totalLength = currentRow * 2 + 1
        const rawRow = Array(totalLength).fill(frequency === 1 ? ornament : "*")

        for (let i = 0; i < rawRow.length; i++) {
            const globalCount = startCount + i
            if (globalCount % frequency === 0) {
                rawRow[i] = ornament;
            }
        }

        return rawRow.join("")
    }

    let count = 1;
    for (let i = 0; i < height; i++) {
        const generated = generateRow(i, count)
        const SPACES = Array(height - i - 1).fill(" ").join("")
        treeLines[i] = SPACES.concat(generated)
        count += (i * 2 + 1)
    }

    // set base for the tree
    treeLines[treeLines.length - 1] = Array(height - 1).fill(" ").join("") + "#"

    return treeLines.join('\n')
}



printArray(drawTree(5, 'o', 2))
console.log(`
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #
`)
console.log('\n')
printArray(drawTree(3, '@', 3))
console.log(`
//   *
//  *@*
// *@**@
//   #
`)
console.log('\n')

printArray(drawTree(4, '+', 1))
console.log(`
//    +
//   +++
//  +++++
// +++++++
//    #
`)

function printArray(array: string[] | string) {
    console.log("printing result")

    const map = array instanceof Array ? array : array.split('\n')

    for (let index = 0; index < map.length; index++) {
        const element = map[index];
        console.log(`// ${element}`)
    }
}


function drawTree1(height: number, ornament: string, frequency: number): string {
    const treeLines = Array(height + 1)
    let count = 1;

    const generateRow = (currentRow: number) => {
        const totalLength = currentRow * 2 + 1
        const isOneFrequency = frequency === 1
        const rawRow = Array(totalLength).fill(isOneFrequency ? ornament : "*")

        for (let i = 0; i < rawRow.length; i++) {
            if (count % frequency === 0) {
                rawRow[i] = ornament;
            }
            count++
        }

        const SPACES = Array(height - currentRow - 1).fill(" ").join("")

        return SPACES.concat(rawRow.join(""))
    }



    for (let i = 0; i < height; i++) {
        treeLines[i] = generateRow(i)
    }

    // set base for the tree
    treeLines[treeLines.length - 1] = Array(height - 1).fill(" ").join("") + "#"

    return treeLines.join('\n')
}