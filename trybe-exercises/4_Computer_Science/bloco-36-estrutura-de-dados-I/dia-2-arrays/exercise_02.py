def shuffle(cards, part):
    result = []
    next_index = 0
    for index in range(part):
        result.insert(next_index, cards[index])
        next_index += 1
        result.insert(next_index, cards[part + index])
        next_index += 1
    return result


print(shuffle([1, 4, 4, 7, 6, 6], 3))
