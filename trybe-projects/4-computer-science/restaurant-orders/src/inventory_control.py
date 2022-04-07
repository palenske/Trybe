class InventoryControl:
    def __init__(self):
        self.INGREDIENTS = {
            "hamburguer": ["pao", "carne", "queijo"],
            "pizza": ["massa", "queijo", "molho"],
            "misto-quente": ["pao", "queijo", "presunto"],
            "coxinha": ["massa", "frango"],
        }
        self.MINIMUM_INVENTORY = {
            "pao": 50,
            "carne": 50,
            "queijo": 100,
            "molho": 50,
            "presunto": 50,
            "massa": 50,
            "frango": 50,
        }
        self.used_ingredients = {item: 0 for item in self.MINIMUM_INVENTORY}
        self.orders = []

    def get_available_dishes(self):
        self.avaliable_dishes = set()
        self.remaining_ingredients = set()

        for item in self.MINIMUM_INVENTORY:
            if self.MINIMUM_INVENTORY[item] - self.used_ingredients[item] > 0:
                self.remaining_ingredients.add(item)

        for dish, ingredients in self.INGREDIENTS.items():
            if self.remaining_ingredients.intersection(
                set(ingredients)
            ) == set(ingredients):
                self.avaliable_dishes.add(dish)

        return self.avaliable_dishes

    def add_new_order(self, customer, order, day):
        if order not in self.get_available_dishes():
            return False

        for item in self.INGREDIENTS[order]:
            self.used_ingredients[item] += 1

        self.orders.append((customer, order, day))

    def get_quantities_to_buy(self):
        return self.used_ingredients
