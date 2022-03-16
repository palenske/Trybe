from datetime import datetime
from tech_news.database import search_news


# Requisito 6
def search_by_title(title):
    result = search_news({"title": {"$regex": title, "$options": "i"}})
    return [(new["title"], new["url"]) for new in result]


# Requisito 7
def search_by_date(date):
    try:
        bool(datetime.strptime(date, "%Y-%m-%d"))
        result = search_news({"timestamp": {"$regex": date}})
    except ValueError:
        raise ValueError("Data inválida")
    else:
        return [(new["title"], new["url"]) for new in result]


# Requisito 8
def search_by_source(source):
    result = search_news({"sources": {"$regex": source, "$options": "i"}})
    return [(new["title"], new["url"]) for new in result]


# Requisito 9
def search_by_category(category):
    result = search_news({"categories": {"$regex": category, "$options": "i"}})
    return [(new["title"], new["url"]) for new in result]
