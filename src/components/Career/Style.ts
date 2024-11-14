import styled from "styled-components";

export const CareerSection = styled.main`
    display: flex;
    padding: 150px 180px;
    width: 100%;
    gap: 100px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100vw;
        padding: 50px 40px;
    }

    @media (min-width: 1400px) and (max-width: 1750px) {
        padding: 50px 80px;
    }

`;

export const TextSection = styled.div`
    width: 50%;
    padding: 10px 0px;
    
    .dividerLine{
        width: 30%;
        padding: 25px 0px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    
`;

