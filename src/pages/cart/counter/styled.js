import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 400;

  & > * {
    margin: .5em;
    background-color: #F5f5f5;
    padding: 0.3em .8em;
    user-select: none;
  }

  .less {
    border-radius: 100%;
    cursor: pointer;

    transition: .3s;
  }

  .quantity {
    padding: 0.3em 1em;
  }

  .more {
    border-radius: 100%;
    cursor: pointer;

    transition: .3s;
    
  }

  .more:hover, .less:hover{
    background-color: #38FCE5;
    color: white;
  }
`