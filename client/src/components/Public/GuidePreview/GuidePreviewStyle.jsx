import styled from 'styled-components';
import appColor from '../../../styles/colors';

const DivPreview = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:2rem 1rem;
  margin:1rem 2rem;
  background-color:${appColor.white}
  color: ${appColor.primary};
  transition: 0.3s ease-in-out;
 
  .info-wrapper{
      display:flex;
      justify-content:space-between;
      align-items:flex-start;
      padding:1rem;
      .personal-info{
        padding-left:2rem;
        text-align:left;
        h2{
            font-size:1.5rem;
            font-weight:600;
            margin-bottom:0.8rem;
            text-transform:uppercase;
        }
        p{
            line-height:1.5rem;
            margin-left:1.5rem;
            font-size:1.5rem;
        }
        p::before,p::after{
            content:'"';
        }
    }
      img{
          width:80px;
          height:80px;
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
      font-size:1.5rem;
      text-align:left;
      padding:2rem;
  }
  .tour-preview{
      padding:2rem;
      margin-top:1rem;
      background-color:${appColor.highlightSoft};
      text-align:left;
      h4{
          font-size:1.5rem;
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
//   :first-of-type{
//       margin-top:10rem;
//   }
`;


export default DivPreview;