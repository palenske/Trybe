import utils from "./utils";

const areaTable = {
    km2: { name: 'Quilomêtro Quadrado', value: 1000 },
    hm2: { name: 'Hectômetro Quadrado', value: 100 },
    dam2: { name: 'Decâmetro Quadrado', value: 10 },
    m2: { name: 'Metro Quadrado', value: 1 },
    dm2: { name: 'Decímetro Quadrado', value: 0.1 },
    cm2: { name: 'Centímetro Quadrado', value: 0.01 },
    mm2: { name: 'Milímetro Quadrado', value: 0.001 }
}

export function convert(value: number, baseUnity: string, convertUnity: string): number {
    return utils.convert(areaTable, value, baseUnity, convertUnity)
}