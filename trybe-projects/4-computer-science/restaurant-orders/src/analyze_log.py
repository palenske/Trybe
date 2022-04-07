import csv


class analyze_restaurant:
    def __init__(self, oders, menu, days):
        self.orders = oders
        self.menu = menu
        self.days = days

    def most_requested_dish(self, person):
        self.person = person
        return max(
            set([order[0] for order in self.orders[person]]),
            key=[order[0] for order in self.orders[person]].count,
        )

    def how_many_burger(self, person):
        self.person = person
        return [order[0] for order in self.orders[person]].count("hamburguer")

    def never_asked(self, person):
        self.person = person
        return self.menu.difference(
            set([order[0] for order in self.orders[person]])
        )

    def days_never_was(self, person):
        self.person
        return self.days.difference(
            set([order[1] for order in self.orders[person]])
        )


def order_map(reader):
    oders = {}
    menu = set()
    days = set()

    for customer, order, day in reader:
        if customer not in oders:
            oders[customer] = []
        oders[customer].append((order, day))
        menu.add(order)
        days.add(day)
    return oders, menu, days


def make_txt(content):
    FILE_TXT = "data/mkt_campaign.txt"
    with open(FILE_TXT, mode="w") as file:
        file.writelines(content)


def analyze_log(path_to_file):
    if not path_to_file.endswith("csv"):
        raise FileNotFoundError(f"Extensão inválida: {path_to_file}")

    try:
        with open(path_to_file, newline="") as file:
            reader = csv.reader(file, delimiter=",")
            (oders, menu, days) = order_map(reader)

    except FileNotFoundError:
        raise FileNotFoundError(f"Arquivo inexistente: {path_to_file}")

    analyze = analyze_restaurant(oders, menu, days)

    make_txt(
        f'{analyze.most_requested_dish("maria")}\n'
        f'{analyze.how_many_burger("arnaldo")}\n'
        f'{analyze.never_asked("joao")}\n'
        f'{analyze.days_never_was("joao")}\n'
    )
