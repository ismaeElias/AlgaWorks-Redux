import React from 'react';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux'
import Checkbox from '../../shared/Checkbox';
import { selectAllProducts, selectProducts } from '../../store/Products/Products.selectors';
// import { selectAllProducts } from '../../store/Products/Products.selectors'
import { Array, Title, Wrapper } from './ShoppingList.styles';

function ShoppingList ({ title, onToggle, displayOnlySelected }) {
   const products = useSelector(displayOnlySelected ? selectProducts : selectAllProducts );

  return <Wrapper>
    <Title>
      { title }:
    </Title>
    <Array>
      {
        products.map(product =>
          <Checkbox
            key={product.id}
            value={product.checked}
            title={product.name}
            onClick={() => onToggle(product.id, product.checked, product.name)}
          />
        )
      }
    </Array>
  </Wrapper>
}

export default ShoppingList
