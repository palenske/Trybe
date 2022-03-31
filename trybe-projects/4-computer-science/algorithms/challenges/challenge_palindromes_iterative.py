def is_palindrome_iterative(word):
    if not word or word != word[::-1]:
        return False
    return True
