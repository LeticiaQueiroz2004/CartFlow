import { Container } from './styled'

import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReactImageZoom from 'react-image-zoom'

import Comments from './comments/index'
import Cookie from 'js-cookie'


export default function ProductDetails(props) {
  const [product, setProduct] = useState(props.location.state);  
  const navigation = useHistory();
  const [animate, setAnimate] = useState(false);
  


  function buy() {
    let cart = Cookie.get('cart');
    cart = cart !== undefined 
                ? JSON.parse(cart) 
                : [];

    if (cart.some(item => item.id === product.id) === false)
        cart.push({...product, qtd: 1 });
 
    Cookie.set('cart', JSON.stringify(cart));
    
    navigation.push('/cart');
  }

  return (
    <Container>
        <div className="detailsProduct">
          <Link to="/"> Voltar </Link>
          <h1> Detalhes do Produto </h1>
          <div> 
              <ReactImageZoom  
                width="250"  
                zoomWidth="320" 
                img={product.picture}
            />
          </div>
          <div className="title"> {product.title} </div>
          <div className="price"> {product.price} </div>
        </div>

        <div className="descriptionProduct">
          <h2> Descrição </h2>
          <div> {product.description} </div>
          <br/>
          <h2> Especificações </h2>
          <div> {product.specifications} </div>
          <br/>
          <div> <button onClick={buy}> Comprar </button> </div>
          <div className="commentsButton"> 
            <button onClick={() => setAnimate(true)}> Exibir  </button>
            <button onClick={() => setAnimate(false)}> Esconder </button>
            <Comments animate={animate} />
          </div>
        </div>
    </Container>
  )



  
}