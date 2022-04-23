from ting_file_management.file_management import txt_importer
import sys


def process(path_file, instance):
    if path_file not in instance.data:
        instance.enqueue(path_file)
    data = txt_importer(path_file)

    return sys.stdout.writelines(
        [
            f"'nome_do_arquivo': '{path_file}'",
            f"'qtd_linhas': {len(data)}",
            f"'linhas_do_arquivo': {data}",
        ]
    )


def remove(instance):
    if len(instance) == 0:
        return sys.stdout.write("Não há elementos\n")
    removed = instance.dequeue()
    return sys.stdout.write(f"Arquivo {removed} removido com sucesso\n")


def file_metadata(instance, position):
    try:
        path = instance.search(position)
        data = txt_importer(path)
        process(path, instance)
        return {
            "nome_do_arquivo": path,
            "qtd_linhas": len(data),
            "linhas_do_arquivo": data,
        }
    except IndexError:
        return sys.stderr.write("Posição inválida")
