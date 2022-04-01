def check_isntant(entrance, exit, search_time):
    result = 0
    for index in range(len(exit)):
        if entrance[index] <= search_time <= exit[index]:
            result += 1
    
    return result


print(check_isntant([1, 2, 3], [3, 2, 7], 4))