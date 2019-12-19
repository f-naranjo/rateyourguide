import styled from 'styled-components';
import appColor from '../../../styles/colors';

const MainNav = styled.div`
z-index:9999;
display:flex;
position:fixed;
height:6rem;
justify-content:space-between;
align-items:center;
width:100%;
max-width:600px;
padding:2rem;
font-size:2rem;
background-color:${appColor.primary}
color: ${appColor.secondary};

    svg{
        fill:${appColor.secondary}
        height:32px;

    }

    a{
        text-decoration:none;
        color:${appColor.secondary};
    }
    .direction svg{
        transform:rotate(180deg)
    }
    // .icon{
    //     display:flex;
    //     align-items:center;
    // }
    .icon svg{
        height:32px;
    }
    .ham-close{
        display:none;
    }
    .hamburguer{
        display:flex;
        height:32px;
        justify-content:center;
    }

`;


export default MainNav;