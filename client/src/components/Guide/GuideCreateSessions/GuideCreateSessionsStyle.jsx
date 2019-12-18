import styled from 'styled-components';
import appColor from '../../../styles/colors';

const CreateSessionsForm = styled.form`
  display:flex;
  justify-content:center;
  color: ${appColor.primary};
  transition: 0.3s ease-in-out;
  flex-wrap:wrap;
  width:100%;
  .session-date{
    margin-top:2.5rem;
    text-align:left;
    p{
      font-size:1.4rem;
    }
  }
  h2{
    font-size:1.4rem;
    margin:1rem 0;
    text-align:left;
  }
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
  .react-date-picker,.react-time-picker{
    margin:1rem 0;
    
  }
  .react-date-picker__inputGroup, .react-time-picker__wrapper{
    margin:0.5rem;
    input{
      padding:0;
    }
  }

  select {
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
  select::-ms-expand {
  display: none;
  }
  select:hover {
  border-color: none;
  }
  select:focus {
  outline: none;
  }
  select option {
    font-weight:normal;
  }

`;

export default CreateSessionsForm;