class TrackOrders:
    def __init__(self):
        self.orders = {}
        self.menu = set()
        self.days = set()
        self.frequented_days = {}

    # aqui deve expor a quantidade de estoque
    def __len__(self):
        return len(self.orders)

    def add_new_order(self, customer, order, day):
        if customer not in self.orders:
            self.orders[customer] = []
        self.orders[customer].append((order, day))
        self.menu.add(order)
        self.days.add(day)
        if day not in self.frequented_days:
            self.frequented_days[day] = 1
        else:
            self.frequented_days[day] += 1

    def get_most_ordered_dish_per_customer(self, customer):
        self.customer = customer
        return max(
            set([order[0] for order in self.orders[customer]]),
            key=[order[0] for order in self.orders[customer]].count,
        )

    def get_never_ordered_per_customer(self, customer):
        self.customer = customer
        return self.menu.difference(
            set([order[0] for order in self.orders[customer]])
        )

    def get_days_never_visited_per_customer(self, customer):
        self.customer = customer
        return self.days.difference(
            set([order[1] for order in self.orders[customer]])
        )

    def get_busiest_day(self):
        self.most_frequented = ("", 0)

        for day, frequency in self.frequented_days.items():
            if frequency > self.most_frequented[1]:
                self.most_frequented = (day, frequency)
        return self.most_frequented[0]

    def get_least_busy_day(self):
        self.less_frequented = ("", 1)

        for day, frequency in self.frequented_days.items():
            if frequency <= self.less_frequented[1]:
                self.less_frequented = (day, frequency)
        return self.less_frequented[0]
