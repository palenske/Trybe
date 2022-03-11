from parsel import Selector
import requests
from db_connection import insert_many_docs


URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"
list_of_books = []


while next_page_url:
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)

    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").re(r"£\d+\.\d{2}")[0]
        detail_href = product.css("h3 a::attr(href)").get()
        detail_url = URL_BASE + detail_href
        details_response = requests.get(detail_url)
        details_selector = Selector(text=details_response.text)
        description = details_selector.css("#product_description ~ p::text").get()
        suffix = "...more"
        if description.endswith(suffix):
            description = description[: -len(suffix)].strip()
        list_of_books.append(
            {"title": title, "price": price, "description": description}
        )
        next_page_url = ""
        # next_page_url = selector.css(".next a::attr(href)").get()

insert_many_docs(list_of_books)
print(list_of_books)
