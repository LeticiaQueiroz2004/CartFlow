import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0px;
  right: 0px;
  

  &, .content {
    width: 200px;
    min-height: 100vh;
  }


  .animate {
    animation: comments 1.5s forwards;
    animation-delay: 0.3s;
  }

  .content {
    position: absolute;
    right: -200px;
    top: 0px;
    
    color: #fff;
    background-color: #38FCE5;
    text-align: right;
    box-shadow: 0px 0px 5px 1px #dddddd;
  }

  .content > div {
    margin: 1em;
  }

  .hide {
    animation: hideComments 1.5s forwards;
    animation-delay: 0.3s; 
  }

  @keyframes comments {
    50% {
      right: -250px;
    }
    100% {
      right: 0px;
    }
  }

  @keyframes hideComments {
    from {
      right: -50px;
    }
    100% {
      right: -300px;
    }
  }

`