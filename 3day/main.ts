type Inventory = Array<{ name: string; quantity: number; category: string }>;

function organizeInventory(inventory: Inventory): object {
    const grouped = inventory.reduce(
        (acumulator, { category, name, quantity }) => {
            if (!acumulator[category]) {
                acumulator[category] = {};
            }
            const categoryGruped =
                acumulator[category] ?? (acumulator[category] = {});

            categoryGruped[name] = (categoryGruped[name] ?? 0) + quantity;

            return acumulator;
        },
        {} as Record<string, Record<string, number>>
    ); // Valor inicial

    return grouped;
}

const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
];
console.log(organizeInventory(inventory));
const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
];

console.log(organizeInventory(inventory2));
