import styled from 'styled-components';
import appColor from './colors';

const ButtonBack = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  padding:1.5rem 3rem;
  text-transform: uppercase;
  border-radius:4rem;
  border: 2px solid ${appColor.tertiary};
  text-align: center;
  color: ${appColor.primary};
  background-color: ${appColor.gray};
  align-self:center;
  transition:0.3s;
  :hover{
    transition:0.3s;
    background-color:${appColor.tertiary}
    cursor:pointer;
  }
`;

export default ButtonBack;

