
import { Container } from './styled'
import { useEffect, useState } from "react"

import Cookie from 'js-cookie'
import CartItem from './cartItem'

import { Link } from "react-router-dom";




export default function Cart() {
  const [product, setProducts] = useState([]);
  
  useEffect(loadCart, []);

  function loadCart() {
    let cart = Cookie.get('cart');
    cart = cart !== undefined 
                  ? JSON.parse(cart) 
                  : [];

    setProducts(cart);
  }
  

  function removeProduct(id) {
    let cart = product.filter(item => item.id !== id);
    
    Cookie.set('cart', JSON.stringify(cart));

    setProducts([...cart]);
  }


  function updateProduct(id, qtd) {
     let productUpdated = product.filter(item => item.id === id)[0];
     productUpdated.qtd = qtd;
 
     Cookie.set('cart', JSON.stringify(product));
  }

  return (
    <Container>
      <h1 className="cartTitle"> Meu carrinho </h1>
      <Link to="/" className="back"> Voltar </Link>

      <div className="cartitems">
        {product.map(item => 
            <CartItem key={item.id} 
                info={item} 
                onUpdate={updateProduct} 
                onRemove={removeProduct} />
        )}
      </div>

    </Container>
  )


}