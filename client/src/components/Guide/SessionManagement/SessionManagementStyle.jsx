import styled from 'styled-components';
import appColor from '../../../styles/colors';

const ManageSessionDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:1.5rem;
    border:2px solid ${appColor.tertiary}
    background-color:${appColor.white};
    width:32.5%;
    justify-content:flex-start;
    :hover{
        transition:0.3s ease-in-out;
        -webkit-box-shadow: 10px 10px 47px -21px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 47px -21px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 47px -21px rgba(0,0,0,0.75);
    }
    .info{
        display:flex;
    }
    .ctrl-btns{
        display:flex;
        justify-content:space-between;
        padding:1.5rem;
        :hover{
            cursor:pointer;
        }
    }
      p{
          font-size:1.4rem;
          text-align:left;
          margin:1.5rem;
          span{
              font-weight:600;
          }
      }
      .admin-btn{
          margin:0
      }
    .clients-detail{
        padding:1.5rem;
        h2{
            font-size:1.4rem;
            font-weight:600;
            text-align:left;
            margin:2rem 0;
        }
        .client{
            h3{
                font-size:1.4rem;
                text-align:left;
                margin-top:2rem;
            }
            p{
                text-aling:left;
                margin:1rem 0;
            }
        }
    }
`;


export default ManageSessionDiv;