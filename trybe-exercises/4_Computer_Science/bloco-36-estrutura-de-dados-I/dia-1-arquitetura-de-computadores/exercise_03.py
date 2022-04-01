from subprocess import check_output


def get_information(command):
    return check_output(command, text=True).split('\n')


cpu_information = get_information('lscpu')

cpu_informations_list = [
    (line[0], line[1].strip()) for line in [
        (line.split(':   ')) for line in cpu_information[:-1]] if len(line) > 1]

# Processador
requested_information = ['Nome do modelo', 'CPU(s)', 'cache de L', 'CPU MHz']
print('Informações do Processador:')
for item in requested_information:
    [
        print(f'  {name[0]}: {name[1]}')
        for name in cpu_informations_list if name[0].startswith(item)
    ]

# Ram
ram_information = [
    information
    for information in check_output('free')
    .decode('UTF-8')
    .split('\n')[1]
    .split(' ')
    if information != ''
]
total_memory = int(ram_information[1]) / 1000
used_memory = int(ram_information[2]) / 1000
print('Informações da Memória RAM:')
print(
    f'  Memória total: {total_memory:.0f}MB\n'
    f'  Memória utilizada: {used_memory:.0f}MB'
)
