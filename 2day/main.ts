function createFrame(names: string[]): string {
    const STAR = '*';
    const SPACE = ' ';
    const BREAK_LINE = '\n';

    const columns =
        names.reduce((maxLength, word) => Math.max(maxLength, word.length), 0) +
        4;

    const empty = STAR.repeat(columns).concat(BREAK_LINE);
    let result = empty;

    for (const name of names) {
        result += STAR.concat(SPACE)
            .concat(name)
            .padEnd(columns - 1, SPACE)
            .concat(STAR)
            .concat(BREAK_LINE);
    }

    // console.log(result.concat(empty));
    return result.concat(STAR.repeat(columns));
}

createFrame(['midu', 'madeval', 'educalvolpz']);

// Resultado esperado:
/*
 ***************
 * midu        *
 * madeval     *
 * educalvolpz *
 *
 ***************
 */
createFrame(['midu']);
/*
// Resultado esperado:
********
* midu *
********
*/
createFrame(['a', 'bb', 'ccc']);

// Resultado esperado:
/*
 *******
 * a   *
 * bb  *
 * ccc *
 *******
 */
createFrame(['a', 'bb', 'ccc', 'dddd']);
