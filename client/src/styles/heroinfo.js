import styled from 'styled-components';
import appColor from './colors';

const HeroInfo = styled.div`
    margin-top:6rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:8rem;
    padding:2rem 1rem;
    width:100%;
    background-color:${appColor.secondary};
    h1{
        font-size:1.6rem;
        line-height:2.5rem;
        text-aling:center;
        
    }
`;

export default HeroInfo;
