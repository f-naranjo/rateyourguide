import styled from 'styled-components';
import appColor from '../../../styles/colors';

const CreateTourForm = styled.form`
  display:flex;
  justify-content:center;
  color: ${appColor.primary};
  transition: 0.3s ease-in-out;
  flex-wrap:wrap;
  width:100%;
  .form-left{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    width:50%;
    padding:0 2rem;
  }
  .form-right{
    padding:2rem;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:50%;
    height:100%;
  }
  input{
    padding:1rem;
    font-size:1.6rem;
    width:100%;
    :focus{
      outline:none;
    }
  }

  input[type=submit]{
    padding:1rem;
    font-size:1.4rem;
    width:150px;;
    text-decoration: none;
    :focus{
      outline:none;
    }
    align-self:flex-end;
    margin-top:2rem;
    border-radius:4rem;
    padding:1rem;
    border:2px solid ${appColor.highlight};
    background-color: ${appColor.highlight};
    transition:0.3s;
    :hover{
      background-color: ${appColor.white};
      cursor:pointer;
    }
  }

  label{
    font-size:1.4rem;
    margin:2.5rem 0 1rem 0;
  }
  textarea{
    resize:none;
    width:100%;
    height:30vh;
    border:1px solid #cccccc;
    font-size:1.6rem;
    padding:1rem;
    :focus{
      outline:none;
    }
  }
  .tour-img{
    width:100%;
    align-self:center;
  }
 .tour-img img{
  object-fit:cover;
  width:300px;
  height:150px;
  }

`;

export default CreateTourForm;