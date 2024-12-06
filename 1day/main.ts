function prepareGifts(gifts: number[]): number[] {
    return Array.from(new Set<number>(gifts)).sort((a, b) => a - b);
}

function prepareGifts1(gifts: number[]): number[] {
    return [...new Set<number>(gifts)].sort((a, b) => a - b);
}

const testCase = [
    {
        base: [3, 1, 2, 3, 4, 2, 5],
        result: [1, 2, 3, 4, 5]
    },
    {
        base: [6, 5, 5, 5, 5],
        result: [5, 6]
    },
    {
        base: [],
        result: []
    }
];

const equalArrays = (arr1: number[], arr2: number[]): boolean => {
    // Verificar si tienen la misma longitud
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Comparar cada elemento en el mismo índice
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};

testCase.forEach(({ base, result }, index) => {
    const prepared = prepareGifts(base);
    console.log(equalArrays(prepared, result));
});
