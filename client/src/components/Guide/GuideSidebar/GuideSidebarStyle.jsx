import styled from 'styled-components';
import appColor from '../../../styles/colors';

const GuideSidebarDiv= styled.div`
  display:flex;
  position:fixed;
  left:0;
  top:0;
  height:100vh;
  padding:2rem;
  width:230px;
  background-color:${appColor.primary}
  flex-direction:column;
  align-items:flex-start;
  justify-content:flex-start;
  color: ${appColor.secondary};
  transition: 0.3s ease-in-out;
  .guide-info{
    align-self:center;
    margin-top:2rem;
    img{
      border-radius:50%;
      width:130px;
      height:130px;
      object-fit:cover;
    }
    h2{
      font-size:1.6rem;
      margin:2rem 0;
    }

  }
  .main-guidemenu{
    list-style-type:none;
    margin-top:4rem;
    li{
        font-size:1.6rem;
        margin:1rem 0;
        text-align:left;
        padding:1rem 0;
        border-bottom:1px solid ${appColor.primarySoft}
    }
    .logo{
        width:160px;
    }
  }
  a{
    text-decoration:none;
    color:${appColor.secondary};
    transition: 0.3s;
    :hover{
      color:${appColor.highlight};
      transition: 0.3s;
    }
  }

  i{
    margin-right:1rem;
  }
`;

export default GuideSidebarDiv;