import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  .title {
    font: 700 2em Roboto;
  }
  .listproducts {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  button{
    border: none;
    border-radius: 5em;

    padding: .5em 1.5em;
    margin: 1em 0;
    
    cursor: pointer;
    background-color: #38FCE5;
    transition: .4s;
  }

  button:hover{
      box-shadow: 0px 0px 5px 1px #dddddd;
  }
`


export { Container }