export function convert(value: number, base_unit: string, unit_to_convert: string) {
    const unit_table = {
        km: { name: 'Quilomêtro', value: 1000 },
        hm: { name: 'Hectômetro', value: 100 },
        dam: { name: 'Decâmetro', value: 10 },
        m: { name: 'Metro', value: 1 },
        dm: { name: 'Decímetro', value: 0.1 },
        cm: { name: 'Centímetro', value: 0.01 },
        mm: { name: 'Milímetro', value: 0.001 }
    }
    const { value: base_value } = unit_table[base_unit];
    const { value: convert_value } = unit_table[unit_to_convert];

    return `${(value * base_value) / convert_value} ${unit_to_convert}`
}
