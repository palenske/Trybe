export function convert(value: number, base_unit: string, unit_to_convert: string) {
    const unit_table = {
        kg: { name: 'Quilograma', value: 1000 },
        hg: { name: 'Hectograma', value: 100 },
        dag: { name: 'Decagrama', value: 10 },
        g: { name: 'Grama', value: 1 },
        dg: { name: 'Decigrama', value: 0.1 },
        cg: { name: 'Centigrama', value: 0.01 },
        mg: { name: 'Miligrama', value: 0.001 }
    }
    const { value: base_value } = unit_table[base_unit];
    const { value: convert_value } = unit_table[unit_to_convert];

    return `${(value * base_value) / convert_value} ${unit_to_convert}`
}