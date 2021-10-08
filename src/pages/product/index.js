import { Link } from 'react-router-dom'
import { Container } from './styled'

export default function Produto(props) {
  return (
    <Container>
      <img className="picture" src={props.info.picture} alt="" />
      <div className="title"> {props.info.title} </div>
      <div className="price"> {props.info.price} </div>
        
      <Link to={{
        pathname: '/details',
        state: props.info
      }}>
        <button> Ver Detalhes </button>   
      </Link>
    </Container>
  )
}


