function fixPackages(packages: string): string {
    let result = packages;

    // Mientras haya paréntesis, busca los más internos y voltéalos
    while (result.includes('(')) {
        // Encuentra el paréntesis de apertura más interno (sin paréntesis después)
        result = result.replace(/\([^()]*\)/g, (match) => {
            // match incluye los paréntesis, así que los removemos y volteamos el contenido
            const content = match.slice(1, -1); // Elimina '(' y ')'
            return content.split('').reverse().join('');
        });
    }

    return result;
}
console.log(fixPackages('a(cb)de') === 'abcde');
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

console.log(fixPackages('a(bc(def)g)h') === 'agdefcbh');
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

console.log(fixPackages('abc(def(gh)i)jk') === 'abcighfedjk');
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

console.log(fixPackages('a(b(c))e'), 'Recevided a(b(c))e\tExpected [acbe]');
// ➞ "acbe"
