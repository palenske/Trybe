def square_generator(n):
    if n < 1:
        print('número precisa ser maior que 1')
    else:
        i = n
        while i > 0:
            print(n * '*')
            i -= 1


# square_generator(3)
