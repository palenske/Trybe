function makeError(unit: string) {
    throw new Error(`A unidade ${unit} não é uma unidade válida.`)
}

function convert(unit_table: object, value: number, base_unit: string, unit_to_convert: string): number {
    if (!Object.keys(unit_table).includes(base_unit)) makeError(base_unit)
    if (!Object.keys(unit_table).includes(unit_to_convert)) makeError(unit_to_convert)

    const { value: base_value } = unit_table[base_unit];
    const { value: convert_value } = unit_table[unit_to_convert];

    return (value * base_value) / convert_value
}

export default {
    convert
}