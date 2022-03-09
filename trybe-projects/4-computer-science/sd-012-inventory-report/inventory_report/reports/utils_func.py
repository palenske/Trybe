from datetime import datetime


def oldest_date(path):
    return min([item["data_de_fabricacao"] for item in path])


def date_diff(exp_date):
    d1 = datetime.today()
    d2 = datetime.strptime(exp_date, "%Y-%m-%d")
    return abs((d1 - d2).days)


def closest_expiration_date(path):
    expiration_dates = [item["data_de_validade"] for item in path]
    expiration_dates_diff = [date_diff(date) for date in expiration_dates]
    return expiration_dates[
        expiration_dates_diff.index(min(expiration_dates_diff))
    ]


def company_with_the_most_products(path):
    company_names = [key["nome_da_empresa"] for key in path]
    return max(set(company_names), key=company_names.count)
