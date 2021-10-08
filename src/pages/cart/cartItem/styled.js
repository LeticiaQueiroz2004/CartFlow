import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 60%;

  font: 700 1em Roboto;

  padding: 2em 0;

  img {
    width: 5em;
    height: auto;
  
  }

  .remove img {
    width: 3em;
    cursor: pointer;
  }

  .counter{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .price, .qtd{
    padding: 0 2em;
    text-align: center;
  }

  .qtd{
    padding: 0 2em 0 .5em;
  }

  .picture{
    margin: 1em 0em;
  }
`

export const RemoveIcon = styled.img`
  content: url('/assets/images/deletee.svg')
`


