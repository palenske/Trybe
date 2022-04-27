export function convert(value: number, base_unit: string, unit_to_convert: string) {
    const unit_table = {
        kl: { name: 'Quilolitro', value: 1000 },
        hl: { name: 'Hectolitro', value: 100 },
        dal: { name: 'Decalitro', value: 10 },
        l: { name: 'Litro', value: 1 },
        dl: { name: 'Decilitro', value: 0.1 },
        cl: { name: 'Centilitro', value: 0.01 },
        ml: { name: 'Mililitro', value: 0.001 }
    }
    const { value: base_value } = unit_table[base_unit];
    const { value: convert_value } = unit_table[unit_to_convert];

    return `${(value * base_value) / convert_value} ${unit_to_convert}`
}
