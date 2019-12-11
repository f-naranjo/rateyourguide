import styled from 'styled-components';
import appColor from './colors';

const ButtonForward = styled.button`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 1rem 0;
  padding:1.5rem 1.8rem;
  border-radius:4rem;
  border: 2px solid ${appColor.highlight};
  text-align: center;
  color: ${appColor.primary};
  background-color: ${appColor.highlight};
  width:80%;
  align-self:center;

  :first-of-type{
    margin-top:3rem;
  }
`;

const ButtonBack = styled.button`
  font-size: 1.2rem;
  margin: 1rem 0;
  padding:1.5rem 1.8rem;
  border-radius:4rem;
  border: 2px solid ${appColor.tertiary};
  text-align: center;
  color: ${appColor.primary};
  background-color: ${appColor.gray};
  width:80%;
  align-self:center;

  :first-of-type{
    margin-top:3rem;
  }
`;

export default ButtonForward;
