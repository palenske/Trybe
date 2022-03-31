def merge_string(left, right):
    left_cursor, right_cursor = 0, 0
    merged = ""
    while left_cursor < len(left) and right_cursor < len(right):
        if left[left_cursor] < right[right_cursor]:
            merged += left[left_cursor]
            left_cursor += 1
        else:
            merged += right[right_cursor]
            right_cursor += 1

    merged += left[left_cursor:] + right[right_cursor:]

    return merged


def merge_sort_s(word):
    if len(word) < 2:
        return word

    mid = len(word) // 2
    left, right = merge_sort_s(word[:mid]), merge_sort_s(word[mid:])

    return merge_string(left, right)
