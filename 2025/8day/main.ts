

function findUniqueToy(toy: string): string {
    const charCounts: Record<string, number> = {};

    for (const char of toy) {
        const lowerChar = char.toLowerCase();
        charCounts[lowerChar] = (charCounts[lowerChar] || 0) + 1;
    }


    for (const char of toy) {
        if (charCounts[char.toLowerCase()] === 1) {
            return char; // Retorna el primer carácter único encontrado
        }
    }

    // 3. Retorno por defecto si no hay únicos
    return "";
}
function findUniqueToy2(toy: string): string {

    const toyMap = toy.split('').reduce((map, char) => {
        const lowerChar = char.toLowerCase()
        const count = map.get(lowerChar) || 0
        map.set(lowerChar, count + 1)
        return map
    }, new Map<string, number>())

    for (let i = 0; i < toy.length; i++) {
        const char = toy[i]
        const lowerChar = char.toLowerCase()

        if ((toyMap.get(lowerChar) || 0) === 1) {
            return char
        }
    }


    return toyMap.size === 0 ? "" : Array.from(toyMap.entries()).find(([key, count]) => count === 1)?.[0] || ''
}



console.log(findUniqueToy('Gift')) // 'G'
// ℹ️ La G es la primera letra que no se repite
// y la devolvemos tal y como aparece

console.log(findUniqueToy('sS')) // ''
// ℹ️ Las letras se repiten, ya que no diferencia mayúsculas

console.log(findUniqueToy('reindeeR')) // 'i'
// ℹ️ La r se repite (aunque sea en mayúscula)
// y la e también, así que la primera es la 'i'

// Más casos:
console.log(findUniqueToy('AaBbCc')) // ''
console.log(findUniqueToy('abcDEF')) // 'a'
console.log(findUniqueToy('aAaAaAF')) // 'F'
console.log(findUniqueToy('sTreSS')) // 'T'
console.log(findUniqueToy('z')) // 'z'




function findUniqueToy1(toy: string): string {
    const toyMap = new Map<string, number>()


    for (let i = 0; i < toy.length; i++) {
        const element = toy[i];
        const comparedElement = element.toLowerCase();
        if (toyMap.has(comparedElement)) {
            const count = toyMap.get(comparedElement) || 0
            toyMap.set(element, count + 1)
        } else {
            toyMap.set(element, 0)
        }
    }

    return Array.from(toyMap.entries()).find(([key, count]) => count === 0)?.[0] || ''
}