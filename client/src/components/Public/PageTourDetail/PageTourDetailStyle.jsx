import styled from 'styled-components';
import appColor from '../../../styles/colors';

const TourDetail = styled.div`
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
.session-wrapper{
    width:100%;
    p{margin-top:2rem;
    font-size:1.4rem;
    font-weight:600;
}
}
.session-picker{

padding:1rem 1rem;
margin:1rem 0;
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${appColor.primary};
  line-height: 1.3;
  width: 100%;
  max-width: 100%;
  border: 1px solid ${appColor.primary};
  border-radius: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ffd803%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
  linear-gradient(to bottom, #ffffff 0%,#ffffff 100%);
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
  }
  .session-picker::-ms-expand {
  display: none;
  }
  .session-picker:hover {
  border-color: none;
  }
  .session-picker:focus {
  outline: none;
  }
  .session-pickeroption {
    font-weight:normal;
  }
  
`;


export default TourDetail;