function fixPackages(packages: string): string {
    // Code here
    return '';
}
fixPackages('a(cb)de');
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h');
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk');
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e');
// ➞ "acbe"
