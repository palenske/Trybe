from functools import lru_cache
import csv


@lru_cache
def read(path):
    with open(path) as file:
        header, *data = csv.reader(file, delimiter=",")
    return [dict(zip(header, row)) for row in data]
