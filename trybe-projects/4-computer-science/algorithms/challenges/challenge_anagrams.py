from .util import merge_sort_s


def is_anagram(first_string, second_string):
    return merge_sort_s(first_string.casefold()) == merge_sort_s(
        second_string.casefold()
    )
