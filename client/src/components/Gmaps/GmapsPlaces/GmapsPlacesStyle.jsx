import styled from 'styled-components';
import appColor from '../../../styles/colors';

const PlacesDiv = styled.div`
display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100%;
  height:100%;
  padding:0;
  background-color:${appColor.gray}
  color: ${appColor.primary};
margin:0;
a{
  text-decoration:none;
  color:${appColor.primary}
}
.input-wrapper{
    width:100%;
}
.location-search-input{
    width:100%;
    padding:1rem;
    font-size:1.6rem;
    color: ${appColor.primary}
    :focus{
        outline:none;
    }
}
.autocomplete-dropdown-container{
    position:absolute;
    z-index:9999;
    font-size:1.6rem;
    .suggestion-item--active{
        padding:1rem;
        text-align:left;
        background-color:${appColor.highlight};
        cursor:pointer;
        transition:0.3s;
    }
    .suggestion-item{
        padding:1rem;
        text-align:left;
        cursor:pointer;
        transition:0.3s;
        background-color:${appColor.gray};
    }
}
`;


export default PlacesDiv;