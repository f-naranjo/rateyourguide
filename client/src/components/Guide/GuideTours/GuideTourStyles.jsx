import styled from 'styled-components';
import appColor from '../../../styles/colors';

const TourDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:8rem 2rem 0 2rem;
  color: ${appColor.primary};
  transition: 0.3s ease-in-out;
  background-color:${appColor.white}
`;

export default TourDiv;