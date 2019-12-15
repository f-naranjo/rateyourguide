import styled from 'styled-components';
import appColor from '../../../styles/colors';

const BookForm = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100vw;
  height:100vh;
  padding:4rem 2rem;
  background-color:${appColor.gray}
  color: ${appColor.primary};

form{
    display:flex;
    flex-direction:column;
    margin-top:6rem;
    width:80%;
    max-width:500px;

}

input{
    padding:0.5rem;
    font-size:2rem;
    margin:1rem 0;
    border: 1px solid ${appColor.primary};
    background-color:white;
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


label{
    text-align:left;
    font-size:1.4rem;
    margin-top:1rem;
}
a:first-of-type{
    display:block;
    margin-top:4rem;
  }

a{
    text-decoration:none;
    color:${appColor.primary}
}

`;


export default BookForm;