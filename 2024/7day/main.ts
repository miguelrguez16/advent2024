function fixPackages(packages: string): string {
    let saveProgress: string[] = [];
    let current: string = '';

    for (const char of packages) {
        if (char === '(') {
            saveProgress.push(current);
            current = ''; // reset
        } else if (char === ')') {
            const reversed = current.split('').reverse().join('');
            current = saveProgress.pop()! + reversed;
        } else {
            current += char;
        }
    }

    return current;
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
