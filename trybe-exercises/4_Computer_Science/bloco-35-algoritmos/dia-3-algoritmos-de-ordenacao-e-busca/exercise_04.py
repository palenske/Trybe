from random import shuffle
from stopwatch import Cronometro


def bubble_sort(array):
    count = 0
    for index in range(len(array) - 1):
        if array[index] > array[index + 1]:
            array[index], array[index + 1] = array[index + 1], array[index]
            count += 1
    if count == 0:
        return array
    else:
        return bubble_sort(array)


def merge(left, right):
    left_cursor, right_cursor = 0, 0
    merged = []
    while left_cursor < len(left) and right_cursor < len(right):
        if left[left_cursor] < right[right_cursor]:
            merged.append(left[left_cursor])
            left_cursor += 1
        else:
            merged.append(right[right_cursor])
            right_cursor += 1

    merged.extend(left[left_cursor:] + right[right_cursor:])

    return merged


def merge_sort(array):
    if len(array) <= 1:
        return array

    mid = len(array) // 2
    left, right = merge_sort(array[:mid]), merge_sort(array[mid:])

    return merge(left, right)


for algorithm in (bubble_sort, merge_sort):
    algorithm_name = algorithm.__name__

    numbers = list(range(10000))
    shuffle(numbers)

    with Cronometro(algorithm_name):
        algorithm(numbers)
