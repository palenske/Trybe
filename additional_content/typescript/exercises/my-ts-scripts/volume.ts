export function convert(value: number, base_unit: string, unit_to_convert: string) {
    const unit_table = {
        km3: { name: 'Quilomêtro Cúbico', value: 1000 },
        hm3: { name: 'Hectômetro Cúbico', value: 100 },
        dam3: { name: 'Decâmetro Cúbico', value: 10 },
        m3: { name: 'Metro Cúbico', value: 1 },
        dm3: { name: 'Decímetro Cúbico', value: 0.1 },
        cm3: { name: 'Centímetro Cúbico', value: 0.01 },
        mm3: { name: 'Milímetro Cúbico', value: 0.001 }
    }
    const { value: base_value } = unit_table[base_unit];
    const { value: convert_value } = unit_table[unit_to_convert];

    return `${(value * base_value) / convert_value} ${unit_to_convert}`
}
