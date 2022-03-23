# Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.

def search_high(numbers):
    if len(numbers) == 1:
        return numbers[0]
    else:
        higher = search_high(numbers[:len(numbers) - 1])
        if higher > numbers[len(numbers) - 1]:
            return higher
        else:
            return numbers[len(numbers) - 1]

