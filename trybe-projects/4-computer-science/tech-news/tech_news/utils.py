def stripator(result):
    if result is None:
        return ""
    elif isinstance(result, list):
        return [item.strip() for item in result]
    return result.strip()


def gather(result):
    return "".join(result)
