import styled from "styled-components";

export const PortfolioSection = styled.main`
    display: flex;
    flex-direction: column;
    padding: 100px 180px 80px 180px;

    @media (max-width: 768px) {
        padding: 80px 40px 80px 40px;
    }


    @media (min-width: 1500px) and (max-width: 1750px) {
        padding: 80px 80px 80px 80px;
    }
`;

export const GridLayout = styled.div`
    display: grid;
    padding-top: 50px;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 20px 50px;
    }
`;

