type ElfDateTime =
    `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(
    fromTime: ElfDateTime,
    takeOffTime: ElfDateTime
): number {
    if (fromTime === takeOffTime) return 0

    const parseElfDateTime = (elfDateTime: ElfDateTime): Date => {
        const [datePart, hourPart] = elfDateTime.split("@");
        const [year, monthIndex, day] = datePart.split("*").map(Number)
        const [hours, minutes, seconds] = hourPart.replace(" NP", "").split("|").map(Number)
        return new Date(Date.UTC(year, monthIndex - 1, day, hours, minutes, seconds))
    }

    const fromDate = parseElfDateTime(fromTime)
    const takeOffDate = parseElfDateTime(takeOffTime)

    const diffInMs = takeOffDate.getTime() - fromDate.getTime()
    const diffInSeconds = Math.floor(diffInMs / 1000)
    return diffInSeconds
}

const takeoff = '2025*12*25@00|00|00 NP'

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
console.log("Expected: 30, received: ", timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff))
// 30

// justo en el momento exacto
console.log("Expected: 0, received: ", timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff))
// 0

// 12 segundos después del despegue
console.log("Expected: -12, received: ", timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff))
// -12