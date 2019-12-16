import styled from 'styled-components';
import appColor from '../../../styles/colors';

const AuthNav = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    background-color:${appColor.gray}
    color: ${appColor.primary};
    a{
        margin:0;
    }
`;

export default AuthNav;