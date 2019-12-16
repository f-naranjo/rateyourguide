import styled from 'styled-components';
import appColor from '../../styles/colors';

const GuideMainDiv = styled.div`
  display:flex;
  justify-content:flex-start;
  flex-wrap:wrap;
  padding:2rem 0 2rem 230px;
  color: ${appColor.primary};
  transition: 0.3s ease-in-out;
  width:100%;
  .breadcrumbs{
    width:70%;
    text-align:left;
    padding:2rem;
    font-size:1.8rem;
    h4{
      margin-bottom:1rem;
    }
    p{
      font-size:1.4rem;
    }
  }
  .page-controls{
    width:30%;
    display:flex;
    justify-content:flex-end;
    padding:2rem;
  }
  .page-info{
    width:100%;
    text-align:left;
    padding:0 0 2rem 2rem;
    font-size:1.4rem;
  }

  .admin-btn{
    font-size:1rem;
    padding:1rem 1rem;
    border-radius: 4rem;
    text-decoration:none;
    align-self:flex-end;
    margin-top:1.5rem;
    margin-bottom:1.5rem;
    transition:0.3s;

}

.admin-btn-xl{
  font-size:1.6rem;
  padding:1rem 2rem;
  border-radius: 4rem;
  text-decoration:none;
  align-self:flex-start;
  margin-top:1.5rem;
  margin-bottom:1.5rem;
  transition:0.3s;
  i{
    margin-right:1rem;
  }
  

}

.edit{
    background-color: ${appColor.edit};
    border:2px solid ${appColor.edit};
    color:${appColor.primary};
    :hover{
      transition:0.3s;
      background-color: ${appColor.white}
    }
  
}

.delete{
    background-color: ${appColor.delete};
    border:2px solid ${appColor.delete};
    color:${appColor.primary};
    :hover{
      transition:0.3s;
      background-color: ${appColor.white}
    }
    
}

.create{
    background-color: ${appColor.create};
    border:2px solid ${appColor.create};
    color:${appColor.primary};
    :hover{
      transition:0.3s;
      background-color: ${appColor.white}
    }
    
}

i{
  margin-right:0.5rem;
}
`;

export default GuideMainDiv;