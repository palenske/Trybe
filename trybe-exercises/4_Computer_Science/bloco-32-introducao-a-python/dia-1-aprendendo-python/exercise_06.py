def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3 and
        side2 + side3 > side1 and
        side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 != side2 and side1 != side3 and side2 != side3:
        return "escaleno"
    else:
        return "isósceles"

# print(type_of_triangle(20, 30, 40))