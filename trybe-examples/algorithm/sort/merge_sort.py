def merge_sort(array):
    # complexidade do algoritmo:
    # pior / médio / melhor = O(log n) + O(n) = O(n log n)
    # espaço = O(n) pela recursividade

    # caso base: se já atingiu a menor porção (1)
    if len(array) <= 1:
        # retorne o array
        return array
    # calculo do pivot: índice que indica onde o array será particionado
    # no caso, metade
    mid = len(array) // 2
    # para cada metade do array
    # chama a função merge_sort de forma recursiva
    left, right = merge_sort(array[:mid]), merge_sort(array[mid:])
    # mistura as partes que foram divididas
    return merge(left, right, array.copy())


# função auxiliar que realiza a mistura dos dois arrays
def merge(left, right, merged):

    left_cursor, right_cursor = 0, 0

    # enquanto nenhumas das partes é percorrida por completo
    while left_cursor < len(left) and right_cursor < len(right):

        # compare os dois itens das partes e insira no array de mistura o menor
        if left[left_cursor] <= right[right_cursor]:
            merged[left_cursor + right_cursor] = left[left_cursor]
            left_cursor += 1
        else:
            merged[left_cursor + right_cursor] = right[right_cursor]
            right_cursor += 1
    # a iteração acima irá inserir os elementos de forma ordenada

    # quando uma das partes termina, devemos garantir
    # que a outra sera totalmente inserida no array de mistura

    # itera sobre os elementos restantes na partição "esquerda"
    # inserindo-os no array de mistura
    for left_cursor in range(left_cursor, len(left)):
        merged[left_cursor + right_cursor] = left[left_cursor]

    # itera sobre os elementos restantes na partição "direita"
    # inserindo-os no array de mistura
    for right_cursor in range(right_cursor, len(right)):
        merged[left_cursor + right_cursor] = right[right_cursor]

    return merged


print(merge_sort([100, 4, 6, 33, 56, 67]))
