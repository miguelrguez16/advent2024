function maxDepth(s: string): number {

    let currentDepth = 0
    let maxDepth = 0

    for (const char of s) {
        if (char === '[') {
            currentDepth++
            // Update maxDepth if currentDepth exceeds it
            if (currentDepth > maxDepth) {
                maxDepth = currentDepth
            }
        } else if (char === ']') {
            currentDepth--
            if (currentDepth < 0) {
                return -1
            }
        }
    }

    if (currentDepth !== 0) {
        return -1
    }

    return maxDepth

}



console.log("received", maxDepth('[]'), "expected 1") // -> 1
console.log("received", maxDepth('[[]]'), "expected 2") // -> 2
console.log("received", maxDepth('[][]'), "expected 1") // -> 1
console.log("received", maxDepth('[[][]]'), "expected 2") // -> 2
console.log("received", maxDepth('[[[]]]'), "expected 3") // -> 3
console.log("received", maxDepth('[][[]][]'), "expected 2") // -> 2
console.log("received", maxDepth(']['), "expected -1") // -> -1 (cierra antes de abrir)
console.log("received", maxDepth('[[['), "expected -1") // -> -1 (faltan cierres)
console.log("received", maxDepth('[]]]'), "expected -1") // -> -1 (sobran cierres)
console.log("received", maxDepth('[][]['), "expected -1") // -> -1 (queda uno sin cerrar)