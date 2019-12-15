import styled from 'styled-components';
import appColor from './colors';

const ButtonForward = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 1rem 0;
  padding:1.5rem 3rem;
  border-radius:4rem;
  border: 2px solid ${appColor.highlight};
  text-align: center;
  color: ${appColor.primary};
  background-color: ${appColor.highlight};
  align-self:center;
  text-transform: uppercase;
  transition:all 0.3s;
  
  :hover{
    transition:all 0.3s;
    cursor:pointer;
    background-color:${appColor.white};
    border: 2px solid ${appColor.highlight};
  }

`;

export default ButtonForward;

