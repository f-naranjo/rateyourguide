import styled from 'styled-components';
import appColor from '../../../styles/colors';

const DivPreviewTour = styled.div`
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  justify-content:space-between;
  width:100%;
  padding:0rem 2rem;
  margin: 2rem 0;

  color: ${appColor.primary};
  transition: 0.3s ease-in-out;
  .preview-wrapper{
      display:flex;
      background-color:${appColor.white};
  }
  .tour-img{
      background-color:#000000;
      height:auto;
      width:40%;
    }
   .tour-img img{
        object-fit:cover;
        width:100%;
    }
    .tour-info{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        padding:1rem;
        width:60%;
        h2{
            font-size:1.5rem;
            margin-bottom:1rem;
            font-weight:600;
        }
        p{
            font-size:1.4rem;
            text-align: left;
            line-height:1.8rem;
            span{
                font-weight:600;
            }
            margin-bottom:1rem;
        }
 
        .tour-items{
            display:flex;
            align-items:center;
            justify-content:flex-end;
            width:100%;
            p{
                margin:0 1rem;
                :last-of-type{
                    margin:0;
                }
            }
        }

        .tour-title{
            margin-top:1rem;
            padding-right:1rem;
            display:flex;
            align-items:center;
            justify-content:space-between;
            width:100%;
            p{
                width:20%;
            }
            h2{
                width:80%;
                text-align:left;
            }
            flex-wrap:wrap;

        }
        a{
            font-size:1.2rem;
            padding:1rem 1.5rem;
            border-radius: 4rem;
            background-color: ${appColor.highlight}
            text-decoration:none;
            color:${appColor.primary}
            align-self:flex-end;
            margin-top:1.5rem;
        }
    }
 



  .info-wrapper{
      display:flex;
      justify-content:space-between;
      align-items:flex-start;
      padding:1rem;
      .personal-info{
        padding-right:2rem;
        text-align:left;
        h2{
            font-size:1.2rem;
            font-weight:600;
            margin-bottom:0.8rem;
            text-transform:uppercase;
        }
        p{
            line-height:1.2rem;
            margin-left:1.5rem;
            font-size:1.2rem;
        }
        p::before,p::after{
            content:'"';
        }
    }
      img{
          width:60px;
          height:60px;
          object-fit:cover;
          border-radius:50%;
          margin-bottom:0.5rem;
      }
      .rate{
          font-size:1.5rem;
          font-weight:600;
      }
  }
  .featured-tour{
      font-size:1.2rem;
      text-align:left;
      padding:1rem;
  }
  .tour-preview{
      padding:1.5rem 1rem;
      margin-top:1rem;
      background-color:${appColor.highlightSoft};
      text-align:left;
      h4{
          font-size:1.2rem;
          font-weight: 600;
          margin-bottom:1rem;
      }
  }
  :hover{
    transition:0.3s ease-in-out;
    -webkit-box-shadow: 10px 10px 47px -21px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 47px -21px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 47px -21px rgba(0,0,0,0.75);
  }
  :first-of-type{
      margin-top:10rem;
  }
`;


export default DivPreviewTour;