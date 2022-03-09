from .utils_func import (
    oldest_date,
    closest_expiration_date,
    company_with_the_most_products
)


class SimpleReport:
    @classmethod
    def generate(cls, path):
        return (
            f"Data de fabricação mais antiga: {oldest_date(path)}\n"
            f"Data de validade mais próxima: {closest_expiration_date(path)}\n"
            f"Empresa com maior quantidade de produtos estocados: "
            f"{company_with_the_most_products(path)}\n"
        )
