import utils from "./utils";

const massTable = {
    kg: { name: 'Quilograma', value: 1000 },
    hg: { name: 'Hectograma', value: 100 },
    dag: { name: 'Decagrama', value: 10 },
    g: { name: 'Grama', value: 1 },
    dg: { name: 'Decigrama', value: 0.1 },
    cg: { name: 'Centigrama', value: 0.01 },
    mg: { name: 'Miligrama', value: 0.001 }
}

function convert(value: number, baseUnity: string, convertUnity: string): number {
    return utils.convert(massTable, value, baseUnity, convertUnity)
}
