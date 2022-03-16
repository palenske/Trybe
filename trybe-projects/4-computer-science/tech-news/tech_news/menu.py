import sys
from tech_news.scraper import get_tech_news
from tech_news.analyzer.search_engine import (
    search_by_title,
    search_by_date,
    search_by_source,
    search_by_category,
)
from tech_news.analyzer.ratings import top_5_news, top_5_categories


# Requisito 12
def opt_0():
    amount = input("Digite quantas notícias serão buscadas:\n")
    get_tech_news(amount)


def opt_1():
    title = input("Digite o título:\n")
    search_by_title(title)


def opt_2():
    date = input("Digite a data no formato aaaa-mm-dd:\n")
    search_by_date(date)


def opt_3():
    source = input("Digite a fonte:\n")
    search_by_source(source)


def opt_4():
    category = input("Digite a categoria:\n")
    search_by_category(category)


def opt_5():
    top_5_news()


def opt_6():
    top_5_categories()


def opt_7():
    print("Encerrando script")
    SystemExit()


def analyzer_menu():
    call_func = {
        0: opt_0,
        1: opt_1,
        2: opt_2,
        3: opt_3,
        4: opt_4,
        5: opt_5,
        6: opt_6,
        7: opt_7,
    }

    select = input(
        "Selecione uma das opções a seguir:\n"
        " 0 - Popular o banco com notícias;\n"
        " 1 - Buscar notícias por título;\n"
        " 2 - Buscar notícias por data;\n"
        " 3 - Buscar notícias por fonte;\n"
        " 4 - Buscar notícias por categoria;\n"
        " 5 - Listar top 5 notícias;\n"
        " 6 - Listar top 5 categorias;\n"
        " 7 - Sair."
    )

    if not select.isdigit() or 7 < int(select) > 0:
        return sys.stderr.write("Opção inválida\n")
    else:
        return call_func[int(select)]()
