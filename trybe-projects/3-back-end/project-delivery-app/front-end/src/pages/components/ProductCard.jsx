import React from 'react';

export default function ProductCard(productData, { add, rm, set }, cart) {
  const { id, name, price, urlImage } = productData;
  return (
    <div key={ id }>
      <div data-testid={ `customer_products__element-card-price-${id}` }>
        { price.replace('.', ',')}
      </div>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
        style={ { width: '100px' } }
      />
      <div>
        <p data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </p>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ () => rm(productData) }
        >
          -
        </button>
        <input
          type="text"
          value={ cart.find((item) => item.name === name)
            ? cart.find((item) => item.name === name).quantity
            : 0 }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ (e) => set(productData, Number(e.target.value)) }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => add(productData) }
        >
          +
        </button>
      </div>
    </div>
  );
}
