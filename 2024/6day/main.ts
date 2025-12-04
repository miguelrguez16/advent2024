function inBox(box: string[]): boolean {
    const REGEX = /^#[^#]*\*[^#]*#$/;

    for (let i = 1; i < box.length - 1; i++) {
        const present = box[i];
        if (present.match(REGEX)) {
            return true;
        }
    }
    return false;
}

console.log(inBox(['###', '#*#', '###'])); // ➞ true
console.log();
console.log(inBox(['####', '#* #', '#  #', '####'])); // ➞ true
console.log();
console.log(inBox(['#####', '#   #', '#  #*', '#####'])); // ➞ false
//
