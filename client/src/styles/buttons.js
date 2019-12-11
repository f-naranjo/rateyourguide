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
  :first-of-type{
    margin-top:3rem;
  }
  :hover{
    transition:all 0.3s;
    cursor:pointer;
    background-color:${appColor.white};
    border: 2px solid ${appColor.highlight};
  }
`;

const ButtonBack = styled.a`
  font-size: 1.2rem;
  margin: 1rem 0;
  padding:1.5rem 1.8rem;
  text-transform: uppercase;
  border-radius:4rem;
  border: 2px solid ${appColor.tertiary};
  text-align: center;
  color: ${appColor.primary};
  background-color: ${appColor.gray};
  width:80%;
  align-self:center;
  transition:0.3s;

  :first-of-type{
    margin-top:3rem;
  }
  :hover{
    transition:0.3s;
    cursor:pointer;
  }
`;

export default ButtonForward;
