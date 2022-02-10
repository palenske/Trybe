def square_generator(n):
    if n < 1:
        print('número precisa ser maior que 1')
    else:
        for _ in range(n):
            print(n * '*')

square_generator(6)
