// contar el numero de vocales en cada palabra
const VOWELS = 'aeiou'

function contarVocales(palabras: string[]): number[] {
    const conteos: number[] = []

    for (const palabra of palabras) {
        let conteo = 0
        for (const char of palabra.toLowerCase()) {
            if (VOWELS.includes(char)) {
                conteo++
            }
        }
        conteos.push(conteo)
    }

    return conteos
}


function contarVocales1(palabras: string[]): number[] {
    return palabras.map((palabra) => {
        return Array.from(palabra.toLowerCase()).reduce((conteo, char) => {
            return VOWELS.includes(char) ? conteo + 1 : conteo
        }, 0)
    })
}

// const palabras = ['hola', 'mundo', 'typescript', 'es', 'genial', 'murcielago', 'meeting']
// console.log(contarVocales(palabras)) // [2, 2, 2, 1, 4, 5, 3]


// ...existing code...
const palabras = Array(9999999).fill('ejemplo')

console.time('for-loop')
contarVocales(palabras)
console.timeEnd('for-loop')

console.time('map-reduce')
contarVocales1(palabras)
console.timeEnd('map-reduce')
// ...existing code...