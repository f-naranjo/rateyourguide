import styled from 'styled-components';
import appColor from '../../../styles/colors';

const SessionDetail = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:flex-start;
  padding:0rem 0rem;
  margin:0rem 0rem;
  background-color:${appColor.secondary}
  color: ${appColor.primary};
  transition: 0.3s ease-in-out;
  .tour-header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      width:100%;
      padding:2rem 1.5rem;
  }

  .tour-maininfo{
      display:flex;
      justify-content:space-between;
      font-size:1.5rem;
      p{
          margin:0 0.3rem;
      }
  }
    img{
        object-fit:cover;
        width:100%;
    }
  h1{
      font-size:1.8rem;
      font-weight:600;
      text-align:left;
      line-height:2.5rem;
      padding-right:1.5rem;
  }

  .info-wrapper{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    background-color:${appColor.white}
    padding: 1rem 2rem;
    margin: 0rem 1rem;
    h3{
        font-size:1.5rem;
        font-weight:600;
        margin: 1.5rem 0;
    }
    h3:last-of-type{
        margin-top:4rem;
    }
    p{
        font-size:1.3rem;
        line-height:2rem;
        text-align:left;
    }

    .nav-buttons{
        display:flex;
        justify-content:space-between;
        align-items: center;
        width:100%;
        margin:0 0.3rem;
        margin-top:3rem;
        .nav-confirm{
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin:0;
        }
        p{
            font-size:1.3rem;
            line-height:1.2rem;
            text-align:left;
            padding:1rem 1.5rem;
        }
        span{
            font-weight:bold;
        }
        i{
            margin-right:1.5rem;
        }
    }
}
i{
    margin-right:0.5rem;
    margin-left:1rem;
}
`;


export default SessionDetail;