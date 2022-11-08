import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { addProductToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addToCart = () => addProductToCart(product);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
