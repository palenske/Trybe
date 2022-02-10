def paint_costs(area):
    CAN_PRICE = 80
    required_liters = area / 3
    required_cans = round((required_liters / 18) + 0.5)      
    return required_cans, required_cans * CAN_PRICE

# print(paint_costs(53))