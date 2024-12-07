type Shoe = Array<{
    size: number;
    type: 'I' | 'R';
}>;

// function organizeShoes(shoes: Shoe): number[] {
//     const leftCount: { [size: number]: number } = {};
//     const rightCount: { [size: number]: number } = {};
//     for (const shoe of shoes) {
//         if (shoe.type === 'I') {
//             leftCount[shoe.size] = (leftCount[shoe.size] || 0) + 1;
//         } else if (shoe.type === 'R') {
//             rightCount[shoe.size] = (rightCount[shoe.size] || 0) + 1;
//         }
//     }
//     const result: number[] = [];
//     for (const size in leftCount) {
//         if (rightCount[size]) {
//             const pairs = Math.min(leftCount[size], rightCount[size]);
//             for (let i = 0; i < pairs; i++) {
//                 result.push(Number(size));
//             }
//         }
//     }

//     return result;
// }

function organizeShoes(shoes: Shoe): number[] {
    const sizeCounts = {};
    const pairs = [];

    // Agrupar por tamaño
    shoes.forEach((shoe) => {
        sizeCounts[shoe.size] = sizeCounts[shoe.size] || { left: 0, right: 0 };
        sizeCounts[shoe.size][shoe.type === 'I' ? 'left' : 'right']++;
    });

    console.log(sizeCounts);

    // Emparejar
    for (const size in sizeCounts) {
        let { left, right } = sizeCounts[size];
        while (left > 0 && right > 0) {
            pairs.push(parseInt(size));
            left--;
            right--;
        }
    }

    return pairs;
}

const shoes: Shoe = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
];

console.log('RECEIVED ' + organizeShoes(shoes).toString());
// [38, 42]
console.log('EXPECTED ' + '[38, 42]');
console.log(' ');
const shoes2: Shoe = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
];
console.log('RECEIVED ' + organizeShoes(shoes2).toString());
// [38, 38]
console.log('EXPECTED ' + '[38, 38]');
console.log(' ');

const shoes3: Shoe = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
];

console.log('RECEIVED ' + organizeShoes(shoes3).toString());
console.log('EXPECTED ' + '[]');
console.log(' ');
