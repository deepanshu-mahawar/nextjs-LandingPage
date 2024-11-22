import styled from "styled-components";

export const PortfolioSection = styled.main`
    display: flex;
    flex-direction: column;
    padding: 100px 180px 80px 180px;

    @media (min-width: 1201px) and (max-width: 1450px) {
        padding: 50px 40px;
    }

    @media screen and (max-width: 576px) {
        padding: 50px 20px 0px 20px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        padding: 50px 20px;
    }

    @media (min-width: 769px) and (max-width: 992px) {
        padding: 50px 40px;
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        padding: 50px 40px;
    }

    @media (min-width: 1450px) and (max-width: 1750px) {
        padding: 50px 50px 0px 50px;
    }
    
`;

export const GridLayout = styled.div`
    display: grid;
    padding-top: 50px;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 576px) {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

