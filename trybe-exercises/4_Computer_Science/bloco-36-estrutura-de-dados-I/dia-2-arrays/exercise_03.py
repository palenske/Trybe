def product_combination(products):
    result = []
    size = len(products)
    for index in range(size):
        for aux in range(index + 1, size):
            if products[index] == products[aux]:
                result.append((index, aux))
    return f'resultado = {len(result)}\nLista de indices combinados: {result}'


print(product_combination([1, 3, 1, 1, 2, 3]))
