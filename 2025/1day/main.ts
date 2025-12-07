
const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const gifts2 = ['#broken', '#rusty']
const gifts3: string[] = []

const filterGifts = (gifts: string[]): string[] => {
    return gifts.filter(g => !g.includes("#"));
}

const good1 = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']

const good2 = filterGifts(gifts2)
console.log(good2)
// []

const good3 = filterGifts(gifts3)
console.log(good3)
// []