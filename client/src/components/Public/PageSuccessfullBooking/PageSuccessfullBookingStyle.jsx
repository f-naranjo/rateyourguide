import styled from 'styled-components';
import appColor from '../../../styles/colors';

const SuccessDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:8rem 2rem 0 2rem;
  color: ${appColor.primary};
  transition: 0.3s ease-in-out;
  div {
    background-none;
  }
  svg{
    width:80%;
    margin:4rem;
    margin-top:10rem;
  }
  h2{
    font-size:1.8rem;
    line-height:2.5rem;
    margin:2rem 0;
    margin-bottom:0rem;
    
  }
  .last{
    margin-top:6rem;
  }
  a{
    text-decoration:none;
    margin:1rem;
  }
  p{
    font-weight:600;
  }
  i{
    margin-left:1.5rem;
    font-size:2rem;
  }

`;


export default SuccessDiv;