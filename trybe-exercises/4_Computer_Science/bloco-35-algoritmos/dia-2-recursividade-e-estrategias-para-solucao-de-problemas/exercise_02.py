# Transforme o algoritmo criado acima em recursivo.

def count_pair_numbers(n):
    if n < 2:
        return 0
    elif n % 2 == 0:
        return count_pair_numbers(n - 1) + 1
    else:
        return count_pair_numbers(n - 1)
