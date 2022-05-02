import utils from "./utils";

const lengthTable = {
    km: { name: 'Quilomêtro', value: 1000 },
    hm: { name: 'Hectômetro', value: 100 },
    dam: { name: 'Decâmetro', value: 10 },
    m: { name: 'Metro', value: 1 },
    dm: { name: 'Decímetro', value: 0.1 },
    cm: { name: 'Centímetro', value: 0.01 },
    mm: { name: 'Milímetro', value: 0.001 }
}

function convert(value: number, baseUnity: string, convertUnity: string): number {
    return utils.convert(lengthTable, value, baseUnity, convertUnity)
}
