import { Container } from './styled'

export default function Comentarios(props) {
    const animate = props.animate === true ? 'animate' : 'hide';
    return (
      <Container>
        <div className={`content ${animate}`}>
          <div> 
            <div> 21/10 - Letícia Queiroz </div>
            <div> Olá mundo </div>
          </div>
  
          <div> 
            <div> 21/10 - Letícia Queiroz </div>
            <div> Olá mundo </div>
          </div>
  
          <div> 
            <div> 21/10 - Letícia Queiroz </div>
            <div> Olá mundo </div>
          </div>
  
          <div> 
            <div> 21/10 - Letícia Queiroz </div>
            <div> Olá mundo </div>
          </div>
        </div>
      </Container>
    )
  }