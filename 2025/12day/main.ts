function elfBattle(elf1: string, elf2: string): number {
    const ATTACKS: { [key: string]: number } = {
        A: 1, // Normal Attack
        F: 2, // Strong Attack
        B: 0 // Block
    };
    // total rounds is the length of the longer elf's move string
    const totalRounds = Math.max(elf1.length, elf2.length);


    let elf1Health = 3, elf2Health = 3;

    // Function to calculate damage dealt by attacker to defender
    const calculateDamage = (attacker: string | undefined, defender: string | undefined): number => {
        if (!attacker) return 0; // No attack if no move
        if (attacker === 'A' && defender === 'B') {
            return 0;
        }
        return ATTACKS[attacker] || 0;
    };

    // Simulate each round
    for (let round = 0; round < totalRounds; round++) {
        // 1. Calculate damage for this round simultaneously
        const damageToElf2 = calculateDamage(elf1[round], elf2[round]);
        const damageToElf1 = calculateDamage(elf2[round], elf1[round]);
        // 2. Apply damage simultaneously
        elf2Health -= damageToElf2;
        elf1Health -= damageToElf1;

        // 3. Verify defeat condition
        if (elf1Health <= 0 || elf2Health <= 0) break;

    }

    // Determine the winner
    if (elf1Health > elf2Health) {
        return 1;
    } else if (elf2Health > elf1Health) {
        return 2;
    } else {
        return 0;
    }
}

console.log('elfBattle A B expected 0', elfBattle('A', 'B'));
// Ronda 1: A vs B -> Elfo 2 bloquea
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 3 de vida
// → 0

console.log('elfBattle F B expected 1', elfBattle('F', 'B'));
// Ronda 1: F vs B -> Elfo 2 recibe 2 de daño (F no se bloquea)
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 1 de vida
// → 1

console.log('elfBattle AAB BBA expected 0', elfBattle('AAB', 'BBA'));
// R1: A vs B → Elfo 2 bloquea
// R2: A vs B → Elfo 2 bloquea
// R3: B vs A → Elfo 1 bloquea
// Resultado: Elfo 1 = 3, Elfo 2 = 3
// → 0

console.log('elfBattle AFA BBA expected 1', elfBattle('AFA', 'BBA'));
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1
// Resultado: Elfo 1 = 2, Elfo 2 = 0
// → 1

console.log('elfBattle AFAB BBAF expected 1', elfBattle('AFAB', 'BBAF'));
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1 → Elfo 2 llega a 0 ¡Batalla termina!
// R4: no se juega, ya que Elfo 2 no tiene vida
// → 1

console.log('elfBattle AA FF expected 2', elfBattle('AA', 'FF'));
// R1: A vs F → Elfo 1 -2, Elfo 2 -1
// R2: A vs F → Elfo 1 -2, Elfo 2 -1 → Elfo 1 llega a -1
// → 2
