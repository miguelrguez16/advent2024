
type Glove = { hand: 'L' | 'R'; color: string }

function matchGloves(gloves: Glove[]): string[] {
    const matchedColors: string[] = []

    const leftGloveCounts = new Map<string, number>()
    const rightGloveCounts = new Map<string, number>()

    for (const glove of gloves) {
        if (glove.hand === 'L') {
            leftGloveCounts.set(glove.color, (leftGloveCounts.get(glove.color) || 0) + 1)
        } else {
            rightGloveCounts.set(glove.color, (rightGloveCounts.get(glove.color) || 0) + 1)
        }
    }

    const allColors = new Set(gloves[0]?.hand === 'L' // Determine iteration order based on first glove's hand
        ? [...leftGloveCounts.keys(), ...rightGloveCounts.keys()]
        : [...rightGloveCounts.keys(), ...leftGloveCounts.keys()]
    )

    for (const color of allColors) {
        const leftCount = leftGloveCounts.get(color) ?? 0
        const rightCount = rightGloveCounts.get(color) ?? 0
        const pairs = Math.min(leftCount, rightCount)

        for (let i = 0; i < pairs; i++) {
            matchedColors.push(color)
        }
    }

    return matchedColors
}

const gloves: Glove[] = [
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'red' },
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'blue' },
    { hand: 'L', color: 'green' }
]

console.log("result: " + matchGloves(gloves), " expected: ['red', 'green']")
// ["red", "green"]

const gloves2: Glove[] = [
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' }
]

console.log("result: " + matchGloves(gloves2), " expected: ['gold', 'gold']")

const gloves3: Glove[] = [
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'blue' }
]

console.log("result: " + matchGloves(gloves3), " expected: []")


const gloves4: Glove[] = [
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'red' },
    { hand: 'L', color: 'green' },
    { hand: 'L', color: 'red' },


]

console.log("result: " + matchGloves(gloves4), " expected: [green,red ]")



function matchGloves3(gloves: Glove[]): string[] {

    const matchedColors: string[] = []

    const leftGloveCounts = new Map<string, number>()
    const rightGloveCounts = new Map<string, number>()

    for (const glove of gloves) {
        if (glove.hand === 'L') {
            leftGloveCounts.set(glove.color, (leftGloveCounts.get(glove.color) || 0) + 1)
        } else if (glove.hand === 'R') {
            rightGloveCounts.set(glove.color, (rightGloveCounts.get(glove.color) || 0) + 1)
        }
    }

    // Find matching pairs
    if (gloves[0]?.hand === 'L') {

        for (const [color, leftCount] of leftGloveCounts.entries()) {
            // Check if there are right gloves of the same color
            const rightCount = rightGloveCounts.get(color) ?? 0
            // Determine the number of pairs that can be formed
            const pairs = Math.min(leftCount, rightCount)
            for (let i = 0; i < pairs; i++) {
                matchedColors.push(color)
            }
        }
    } else {

        for (const [color, rightCount] of rightGloveCounts.entries()) {
            // Check if there are left gloves of the same color
            const leftCount = leftGloveCounts.get(color) ?? 0
            // Determine the number of pairs that can be formed
            const pairs = Math.min(rightCount, leftCount)
            for (let i = 0; i < pairs; i++) {
                matchedColors.push(color)
            }
        }
    }

    return matchedColors
}