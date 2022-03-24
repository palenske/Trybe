# iterativo
def i_reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list

# recursivo


def r_reverse(list):
    if len(list) < 2:
        return list
    else:
        return r_reverse(list[1:]) + [list[0]]


# fibonacci usando recursividade
def fibonacci(num):  # nome da função e parâmetro
    if (num <= 1):  # condição de parada
        return num
    else:
        # chamada de si mesma com um novo valor
        return fibonacci(num - 2) + fibonacci(num - 1)
