def facebook(words, chars):
    char_lib = {}
    match_words = []

    for char in chars:
        if char not in char_lib:
            char_lib[char] = 1
        else:
            char_lib[char] += 1

    for word in words:
        word_lib = {}
        have_chars = []

        for char in word:
            if char not in word_lib:
                word_lib[char] = 1
            else:
                word_lib[char] += 1

        for key, value in word_lib.items():
            if not key in char_lib or char_lib[key] < value:
                have_chars.clear()
                break
            else:
                have_chars.append(key)
        if len(have_chars) > 0:
            match_words.append(''.join(have_chars))

    return (
        [print(f'{word}, {len(word)}') for word in match_words],
        print(f'total: {len("".join(match_words))}')
    )


facebook(["cat", "bt", "hat", "tree"], "atach")
