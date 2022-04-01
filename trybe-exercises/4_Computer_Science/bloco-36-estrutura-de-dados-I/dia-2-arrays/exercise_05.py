def count_servers(matrix):
    row, column = len(matrix), len(matrix[0])
    connected = 0

# resultado mais próximo que consegui:
    for index in range(row):
        x = []
        row_server = matrix[index].count(1)
        if row_server > 1:
            connected += row_server
        for aux in range(column):
            x.append(matrix[aux][index])
            # if matrix[aux][index] == matrix[index][aux]:
            #     connected -= 1
        col_server = x.count(1)
        if col_server > 1:
            connected += col_server

    return connected


print(count_servers([[1, 0], [1, 1]]))
