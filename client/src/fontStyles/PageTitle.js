import styled from 'styled-components';
import appColor from '../styles/colors';

const PageTitle = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.color ? props.color : 'white'};
  margin-top: 0;
  text-align: center;
  color: ${appColor.primary};
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  margin-top: 0;
  text-align: center;
  color: ${appColor.primary};
`;

const Subtitle = styled.h3`
  font-size: 2.5rem;
  margin-top: 0;
  text-align: center;
  color: ${appColor.primary};
`;

const Important = styled.span`
  font-size: 2.5rem;
  margin-top: 0;
  text-align: center;
  color: ${appColor.highlight};
`;

export default PageTitle;