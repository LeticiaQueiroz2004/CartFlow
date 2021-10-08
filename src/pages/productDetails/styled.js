import styled from "styled-components";


const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  padding: 3em;
  font-family: Roboto;

  .title{
    font-weight: 700;
  }
 .title, .price {
     text-align: center;
 }

  h2 {
    margin-top: 2em;
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
  
  img {
    width: 20em;
    height: auto;
  }

  & > div { 
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  
    margin: 1em;
  }

`


export { Container }