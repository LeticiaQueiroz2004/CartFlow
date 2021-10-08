import { useState } from "react";
import { Container } from "./styled.js";

export default function Contador() {
  const [qtd, setQtd] = useState(0);

  function contar() {
    setQtd(qtd + 1);
  }

  function reset() {
    setQtd(0);
  }

  return (
    <Container>
      <div className="container">
        <h3> Contador </h3>
        <div> {qtd} </div>
        <button onClick={contar}> Contar </button>
      </div>

      <Filho onReset={reset} qtd={qtd} />
    </Container>
  );
}

function Filho(props) {
  function reset() {
    props.onReset();
  }
  return (
    <Container>
      <button onClick={reset}> Reset </button>
    </Container>
  );
}
