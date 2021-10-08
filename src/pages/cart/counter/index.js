
import { useEffect, useState } from 'react'
import { Container } from './styled';

export default function Counter(props) {
  const [qtd, setQtd] = useState(props.value);


    function increment() {
        if (qtd >= 10)
        return;
        setQtd(qtd+1)
    }

    function decrement() {
        if (qtd === 0) 
        return;
        setQtd(qtd-1)
    }


    useEffect(() => {
        props.onChange(qtd);
    }, [qtd]) 
    
  return (
    <Container>
      <div className="less" onClick={decrement}>
        -
      </div>

      <div className="quantity">
        {qtd}
      </div>

      <div className="more" onClick={increment}>
        +
      </div>
    </Container>
  )
}