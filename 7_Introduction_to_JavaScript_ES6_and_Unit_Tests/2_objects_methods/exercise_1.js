const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const orderName = order.name;
  const orderPhone = order.phoneNumber;
  const orderStreet = order.address.street;
  const orderNumber = order.address.number;
  const orderApartment = order.address.apartment;
  
  console.log(`Olá ${deliveryPerson}! 
  Entrega para: ${orderName}, Telefone: ${orderPhone},
  R. ${orderStreet}, Nº: ${orderNumber}, AP: ${orderApartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const buyerName = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const totalPrice = order.payment.total = 50;
  const newPizzas = ['muzzarella', 'calabresa'];
  for (var i in pizzas) {
    pizzas[i] = newPizzas[i];
  }

  console.log(`Olá ${buyerName}!
  O total do seu pedido de ${pizzas.join(', ')} e ${drinks} é de R$ ${totalPrice},00.`);
}

orderModifier(order);