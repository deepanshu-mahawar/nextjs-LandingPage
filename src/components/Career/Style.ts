import styled from "styled-components";

export const CareerSection = styled.main`
    display: flex;
    padding: 150px 180px;
    width: 100%;
    gap: 100px;

    @media (min-width: 1450px) and (max-width: 1750px) {
        padding: 100px 50px;
    }

    @media screen and (max-width: 576px) {
        flex-direction: column;
        padding: 0px 20px;
        padding-bottom: 50px;
        gap: 50px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        flex-direction: column;
        padding: 0px 20px;
        padding-bottom: 50px;
        gap: 50px;
    }

    @media (min-width: 769px) and (max-width: 992px){
        width: 100%;
        flex-direction: column;
        padding: 50px 40px;
    }


    @media (min-width: 993px) and (max-width: 1200px){
        width: 100%;
        flex-direction: column;
        padding: 50px 40px;
    }

    @media (min-width: 1201px) and (max-width: 1450px){
        width: 100%;
        padding: 50px 40px;
        gap: 30px;
    }
`;

export const TextSection = styled.div`
    width: 50%;
    padding: 10px 0px;
    
    .dividerLine{
        width: 30%;
        padding: 25px 0px;
    }

    @media screen and (max-width: 576px) {
        width: 100%;
    }

    @media (min-width: 577px) and (max-width: 768px){
        width: 100%;
    }

    @media (min-width: 769px) and (max-width: 992px){
        width: 100%;
    }
    
    @media (min-width: 993px) and (max-width: 1200px){
        width: 100%;
    }

`;

