import requests
from time import sleep
from parsel import Selector
from tech_news.utils import stripator, gather
from tech_news.database import create_news


# Requisito 1
def fetch(url):
    try:
        sleep(1)
        response = requests.get(url, timeout=3)
    except requests.Timeout:
        return None
    else:
        if response.status_code != 200:
            return None
        return response.text


# Requisito 2
def scrape_novidades(html_content):
    selector = Selector(text=html_content)
    return selector.css(
        ".tec--list__item .tec--card__info h3 a::attr(href)"
    ).getall()


# Requisito 3
def scrape_next_page_link(html_content):
    selector = Selector(text=html_content)
    return selector.css(".tec--list .tec--btn::attr(href)").get()


# Requisito 4
def scrape_noticia(html_content):
    selector = Selector(text=html_content)

    def get_one(query):
        return selector.css(query).get()

    def get_many(query):
        return selector.css(query).getall()

    def get_num_only(query):
        count = selector.css(query).re_first(r"\d+")
        if count is None:
            return 0
        return int(count)

    return {
        "url": get_one("[property='og:url']::attr(content)"),
        "title": get_one("#js-article-title::text"),
        "timestamp": get_one(".tec--timestamp__item time::attr(datetime)"),
        "writer": stripator(get_one(".z--font-bold *::text")),
        "shares_count": get_num_only(".tec--toolbar__item::text"),
        "comments_count": get_num_only("#js-comments-btn::attr(data-count)"),
        "summary": gather(
            get_many(".tec--article__body > p:first-child *::text")
        ),
        "sources": stripator(get_many(".z--mb-16 div a::text")),
        "categories": stripator(get_many("#js-categories a::text")),
    }


# Requisito 5
def get_tech_news(amount):
    BASE_URL = "https://www.tecmundo.com.br/novidades"
    html_content = fetch(BASE_URL)
    url_list = scrape_novidades(html_content)

    while len(url_list) < amount:
        next_url = scrape_next_page_link(html_content)
        html_content = fetch(next_url)
        url_list.extend(scrape_novidades(html_content))

    def url_to_scrape(url):
        news_html_content = fetch(url)
        return scrape_noticia(news_html_content)

    list_news = [url_to_scrape(url) for url in url_list[:amount]]

    create_news(list_news)

    return list_news
