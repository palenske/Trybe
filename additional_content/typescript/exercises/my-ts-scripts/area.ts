export function convert(value: number, base_unit: string, unit_to_convert: string) {
    const unit_table = {
        km2: { name: 'Quilomêtro Quadrado', value: 1000 },
        hm2: { name: 'Hectômetro Quadrado', value: 100 },
        dam2: { name: 'Decâmetro Quadrado', value: 10 },
        m2: { name: 'Metro Quadrado', value: 1 },
        dm2: { name: 'Decímetro Quadrado', value: 0.1 },
        cm2: { name: 'Centímetro Quadrado', value: 0.01 },
        mm2: { name: 'Milímetro Quadrado', value: 0.001 }
    }
    const { value: base_value } = unit_table[base_unit];
    const { value: convert_value } = unit_table[unit_to_convert];

    return `${(value * base_value) / convert_value} ${unit_to_convert}`
}
