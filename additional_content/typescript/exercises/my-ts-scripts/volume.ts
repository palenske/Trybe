import utils from "./utils";

const volumeTable = {
    km3: { name: 'Quilomêtro Cúbico', value: 1000 },
    hm3: { name: 'Hectômetro Cúbico', value: 100 },
    dam3: { name: 'Decâmetro Cúbico', value: 10 },
    m3: { name: 'Metro Cúbico', value: 1 },
    dm3: { name: 'Decímetro Cúbico', value: 0.1 },
    cm3: { name: 'Centímetro Cúbico', value: 0.01 },
    mm3: { name: 'Milímetro Cúbico', value: 0.001 }
}

export function convert(value: number, baseUnity: string, convertUnity: string): number {
    return utils.convert(volumeTable, value, baseUnity, convertUnity)
}
