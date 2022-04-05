def formed_words(words, chars):
    char_lib = {}
    total_chars = 0

    for char in chars:
        char_lib[char] = 1 if char not in char_lib else char_lib[char] + 1

    for word in words:
        word_lib, have_chars = {}, []

        for char in word:
            if char not in char_lib:
                break
            word_lib[char] = 1 if char not in word_lib else word_lib[char] + 1

            if word_lib[char] > char_lib[char]:
                have_chars.clear()
                break
            else:
                have_chars.append(char)

        if len(have_chars) > 0:
            total_chars += len(word)
            print(word)

    return print(f'total de letras: {total_chars}')


formed_words(["hello", "world", "students"], "welldonehoneyr")
