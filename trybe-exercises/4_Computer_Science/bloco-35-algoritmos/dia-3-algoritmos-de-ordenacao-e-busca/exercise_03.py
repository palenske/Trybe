from random import shuffle
from stopwatch import Cronometro


def selection_sort(array):
    for index in range(len(array)):
        min = index

        for aux in range(index + 1, len(array)):
            if array[aux] < array[min]:
                min = aux
        array[min], array[index] = array[index], array[min]

    return array


def insertion_sort(array):
    for index in range(len(array)):
        curr_value = array[index]
        curr_position = index

        while curr_position > 0 and array[curr_position - 1] > curr_value:
            array[curr_position] = array[curr_position - 1]
            curr_position = curr_position - 1

        array[curr_position] = curr_value

    return array


for algorithm in (insertion_sort, selection_sort):
    algorithm_name = algorithm.__name__

    for input in [10000, 100000, 1000000]:
        ordered_numbers = list(range(input))
        reversed_ordered_numbers = list(reversed(ordered_numbers))
        random_numbers = ordered_numbers[:]
        shuffle(random_numbers)

        with Cronometro(f"{algorithm_name} com entrada ordenada de {input} números"):
            algorithm(ordered_numbers)
        with Cronometro(f"{algorithm_name} com entrada reversa de {input} números"):
            algorithm(reversed_ordered_numbers)
        with Cronometro(f"{algorithm_name} com entrada aleatória de {input} números"):
            algorithm(random_numbers)
