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
      width:40%;
    }
   .tour-img img{
    object-fit:cover;
    width:100%;
    height:100%;
    }
    .tour-info{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        padding:1rem;
        padding-left:2rem;
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
            justify-content:flex-start;
            width:100%;
            margin:0 0 1rem 0;
            p{
                margin:0 1rem;
                :first-of-type{
                    margin:0;
                }
            }
        }

        .tour-title{
            margin-top:1rem;
            
            display:flex;
            align-items:center;
            justify-content:space-between;
            width:100%;
            p{
                width:25%;
                text-align:right;
            }
            h2{
                width:75%;
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
            align-self:flex-start;
            margin-top:1.5rem;
            margin-bottom:1.5rem;
        }
    }

    :first-of-type{
        margin-top:10rem;
    }


`;


export default DivPreviewTour;