import { Container, RemoveIcon } from './styled'
import { useState } from 'react';
import Counter from '../counter'


export default function CarrinhoItem(props) {
  const [product, setProduct] = useState(props.info);

    function updateQtd(qtd) {
        setProduct({...product, qtd });
        props.onUpdate(product.id, qtd)
    }

    function remove() {
        props.onRemove(product.id);
    }
  return (
    <Container>
      <div className="counter">
        <img className="picture" src={product.picture} alt="" />
        <Counter onChange={updateQtd} value={product.qtd} />
      </div>

      <div className="title"> 
        {product.title} 
      </div>
      
      <div className="price"> 
        <div className="price-unit">Preço unitário</div>
        {product.price} 
      </div>

      <div className="qtd"> 
        <div className="quantity">Qtd</div>
        {product.qtd} 
      </div>

      <div className="remove"> 
        <RemoveIcon onClick={remove} /> 
      </div>
    </Container>
  )
}