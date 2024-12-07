function createXmasTree(height: number, ornament: string): string {
    const BASE = '_';
    const BREAK_LINE = '\n';
    const TREE = '#';
    const width = height * 2 - 1;
    console.log(`height: ${height} width: ${width}`);
    let copyHeight = height - 1;
    let top = '';

    for (let i = 1; i < width; i += 2) {
        const line = ornament.repeat(i);
        const complete = BASE.repeat(copyHeight);

        top += complete + line + complete + BREAK_LINE;
        copyHeight--;
    }
    top += ornament.repeat(width).concat(BREAK_LINE);

    // create base
    const base = BASE.repeat(height - 1)
        .concat(TREE)
        .concat(BASE.repeat(height - 1));

    // create pre base
    const preBase = base.concat(BREAK_LINE);
    return top.concat(preBase).concat(base);
}

const tree = createXmasTree(5, '*');
console.log(tree);

console.log(`\nEXPECTED
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
`);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/
console.log('\n');

const tree2 = createXmasTree(3, '+');
console.log(tree2);
/*
__+__
_+++_
+++++
__#__
__#__
*/
console.log(`\nEXPECTED
__+__
_+++_
+++++
__#__
__#__
    `);
console.log('\n');
const tree3 = createXmasTree(6, '@');
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
console.log(`\nEXPECTED
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
        `);
