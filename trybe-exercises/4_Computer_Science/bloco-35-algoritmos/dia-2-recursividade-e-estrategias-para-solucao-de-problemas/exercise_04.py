def mdc(num1, num2):
    if(num1 == 0):
        return num2
    return mdc(num2 % num1, num1)
