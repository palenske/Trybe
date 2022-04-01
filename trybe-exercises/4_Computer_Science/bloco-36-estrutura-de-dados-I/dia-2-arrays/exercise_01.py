from tabnanny import check


def check_instability(collected_values):
    count = 0
    max_permanence = 0

    for result in collected_values:
        if result == 1:
            count += 1
        else:
            if count > max_permanence:
                max_permanence = count
            count = 0

    return max_permanence


print(check_instability([1, 1, 1, 1, 0, 0, 1, 1]))
