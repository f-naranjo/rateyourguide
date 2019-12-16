import styled from 'styled-components';
import appColor from './colors';

const AuthForm = styled.div`
    // margin-top:6rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:100vh;
    padding:2rem 1rem;
    width:100%;
    background-color:${appColor.gray};
    h1{
        font-size:1.6rem;
        line-height:2.5rem;
        text-aling:center;
    }
    h2{
        font-size:1.8rem;
        line-height:2.5rem;
        margin:2rem 0;
        margin-bottom:0rem;
      }
    form{
        display:flex;
        flex-direction:column;
        margin-top:2rem;
        width:60%;
        max-width:500px;
        
        input{
            padding:1rem;
            font-size:2rem;
            margin:1rem 0;
            border: 1px solid ${appColor.primary};
            background-color:white;
        }
        label{
            text-align:left;
            font-size:2rem;
            margin-top:1rem;
        }
        input[type=submit]{
            font-size: 1.2rem;
            font-weight: 400;
            width:80%;
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

        }




    }
    svg{
        width:80%;
        fill:${appColor.tertiary}
        margin:4rem;
        margin-top:0rem;
      }
        
    }
`;

export default AuthForm;
