import styled from 'styled-components';
import appColor from '../../../styles/colors';

const HomeAdmin = styled.div`
  display:flex;
  flex-direction:column;
  align-items:space-between;
  width:100%;
  .stats-main, .stats-secondary{
      width:100%;
      padding:2rem;
      display:flex;
      justify-content:space-between;
   
    }
    .stat{
        display:flex;
        flex-direction:column;
        width:23%
        height:20rem;
        padding:2rem;
        background-color:${appColor.white}
        border:2px solid ${appColor.tertiary}
        i{
            margin:1rem;
            font-size:3rem;
            color:${appColor.highlight}
        }
        h2{
            margin:1rem;
            font-size:2rem;
        }
        p{
            font-size:1.6rem;
            margin:0.5rem;
            span{
                font-size:2.5rem;
            }
        }
        :hover{
            transition:0.3s ease-in-out;
            -webkit-box-shadow: 10px 10px 47px -21px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 47px -21px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 47px -21px rgba(0,0,0,0.75);
        }
  }
  .social{
      padding:2rem;
      display:flex;
      flex-direction:column;
      h4{
          text-align:left;
          margin:2rem 0;
          font-size:1.6rem;
        }
  }
  .comments-wrapper{
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
      align-items:space-between;
    .comment{
        background-color:${appColor.white};
        padding:1rem;
        height:10rem;
        width:49%;
        margin-bottom:2rem;
        border: 1px solid black    }
  }
`;

export default HomeAdmin;