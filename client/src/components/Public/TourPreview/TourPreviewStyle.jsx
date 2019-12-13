import styled from 'styled-components';
import appColor from '../../../styles/colors';

const DivPreviewTour = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:2rem 1rem;
  margin:10rem 2rem;
  background-color:${appColor.white}
  color: ${appColor.primary};
  transition: 0.3s ease-in-out;
 
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
//   :first-of-type{
//       margin-top:10rem;
//   }
`;


export default DivPreviewTour;