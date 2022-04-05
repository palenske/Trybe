from typing import Counter


subordinates = {
    1: [2, 3],
    2: [4],
    3: [],
    4: [5, 6],
    5: [7],
    6: [],
    7: [],
}

score = {}


def score_count(subordinates):
    for person, equip in subordinates.items():
        score[person] = 1
        score[person] += sum(
            [len(
                [len(
                    [subordinate_list + 1 for subordinate_list in subordinates[subordinate]]
                ) + 1 for subordinate in subordinates[subordinate]]
            ) + 1 for subordinate in equip])
    return score


print(score_count(subordinates))
