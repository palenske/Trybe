from ting_file_management.file_process import file_metadata


def exists_word(word, instance, search=False):
    queue_size = len(instance)
    data = []

    for index in range(queue_size):
        result = file_metadata(instance, index)
        found = {
            "palavra": word,
            "arquivo": result["nome_do_arquivo"],
            "ocorrencias": [],
        }
        for line_index, line in enumerate(result["linhas_do_arquivo"]):
            if word.casefold() in line.casefold():
                found["ocorrencias"].append(
                    {"linha": line_index + 1}
                ) if not search else found["ocorrencias"].append(
                    {"linha": line_index + 1, "conteudo": line}
                )
        if found["ocorrencias"]:
            data.append(found)
    return data


def search_by_word(word, instance):
    return exists_word(word, instance, True)
