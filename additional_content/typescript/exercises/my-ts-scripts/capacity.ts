import utils from "./utils";

const capacityTable = {
    kl: { name: 'Quilolitro', value: 1000 },
    hl: { name: 'Hectolitro', value: 100 },
    dal: { name: 'Decalitro', value: 10 },
    l: { name: 'Litro', value: 1 },
    dl: { name: 'Decilitro', value: 0.1 },
    cl: { name: 'Centilitro', value: 0.01 },
    ml: { name: 'Mililitro', value: 0.001 }
}

function convert(value: number, baseUnity: string, convertUnity: string): number {
    return utils.convert(capacityTable, value, baseUnity, convertUnity)
}
