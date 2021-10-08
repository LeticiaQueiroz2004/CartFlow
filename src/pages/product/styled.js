import styled from "styled-components";

export const Container = styled.div`
  margin: 1em;
  padding: 1.5em;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 10em;
  border: 1px solid lightgray;
  box-shadow: 0 0 5px 1px #d5d4d6;

  .picture {
    width: 7em;
    height: 8em;
  }

  .title {
    font: 700 1em Roboto;
    color: #000;
    padding: 1em .5em .5em;
    text-align: center;
    color: #f837b2;
   }

  .price {
    font: 400 1.5em Roboto;
    font-size: 1.5em;
    color: #000;
  }
`;
