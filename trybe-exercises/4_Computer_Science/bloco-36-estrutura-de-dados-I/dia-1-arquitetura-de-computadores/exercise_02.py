import platform

print(
    f'Sistema: {platform.system()}\n'
    f'Versão: {platform.release()}\n'
    f'Arquitetura: {platform.architecture()[0]}'
)
