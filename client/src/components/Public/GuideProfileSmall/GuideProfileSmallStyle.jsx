import styled from 'styled-components';
import appColor from '../../../styles/colors';

const GuiaNombreMal = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height:100vh;
  padding:2rem;
  background-color:${appColor.gray}
  color: ${appColor.primary};

form{
    display:flex;
    flex-direction:column;
}

input{
    padding:0.5rem;
    font-size:2rem;
    margin:1rem 0;
    border: 1px solid ${appColor.primary}
    background-color:white;
}

select{
    padding:1rem;
}

label{
    text-align:left;
    font-size:1.4rem;
    margin-top:1rem;
}
`;


export default BookForm;