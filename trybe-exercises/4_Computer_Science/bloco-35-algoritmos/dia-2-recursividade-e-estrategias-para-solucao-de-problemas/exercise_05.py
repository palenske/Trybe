# Escreva um algoritmo recursivo que identifica se um número é primo.

def check_prime_number(n, i=2):
    if n <= 2:
        return True if n == 2 else False
    elif n % i == 0:
        return False
    elif i * i > n:
        return True
    return check_prime_number(n, i + 1)