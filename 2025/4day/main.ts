function decodeSantaPin(code: string): string | null {
    const SUM = '+';
    const SUBTRACT = '-';
    const pinDigits: number[] = [];

    // Regex to match either [digit+operations] or [<]
    const regex = /\[(\d)?([+\-<]*)\]/g;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(code)) !== null) {
        const digit = match[1]; // digit might be undefined for [<]
        const operations = match[2]; // operations string

        if (digit !== undefined) {
            // Process [digit+operations]
            let finalDigit = parseInt(digit, 10);

            for (const op of operations) {
                if (op === SUM) {
                    finalDigit = (finalDigit + 1) % 10;
                } else if (op === SUBTRACT) {
                    finalDigit = (finalDigit - 1 + 10) % 10;
                }
            }

            pinDigits.push(finalDigit);
        } else {
            // Process [<] - repeat the last digit
            if (pinDigits.length > 0) {
                pinDigits.push(pinDigits[pinDigits.length - 1]);
            }
        }
    }

    if (pinDigits.length === 4) {
        return pinDigits.join('');
    }

    return null
}

console.log("Expected: 3144 received ", decodeSantaPin('[1++][2-][3+][<]'))
console.log("Expected: 0944 received ", decodeSantaPin('[9+][0-][4][<]'))
console.log("Expected: null received ", decodeSantaPin('[1+][2-]'))
console.log("Expected: 3344 received ", decodeSantaPin('[1++][<][3+][<]'))
console.log("Expected: 0000 received ", decodeSantaPin('[0][<][<][<]'))
console.log("Expected: null received ", decodeSantaPin('[3]'))
