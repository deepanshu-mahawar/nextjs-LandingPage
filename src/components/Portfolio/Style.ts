import styled from "styled-components";

export const PortfolioSection = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 150px 80px 150px;

    @media (min-width: 1450px) and (max-width: 1750px) {
        padding: 100px 50px 80px 50px;
    }

    @media screen and (max-width: 576px) {
        padding: 50px 20px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        padding: 50px 20px;
    }

    @media (min-width: 769px) and (max-width: 992px) {
        padding: 50px 20px;
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        padding: 50px 20px;
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        padding: 50px 40px;
    }

    
`;

export const GridLayout = styled.div`
    display: grid;
    padding: 80px 0px;
    gap: 80px;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 576px) {
        display: flex;
        flex-direction: column;
        padding: 20px 0px;
        gap: 40px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 20px 0px;
        gap: 40px;
    }

    @media (min-width: 769px) and (max-width: 992px) {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 1201px) and (max-width: 1450px) {
        display: flex;
        flex-direction: column;
    }

`;

export const Button = styled.button`
    color: ${({theme}) => theme.colors.background1};
    padding: 20px 40px;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 40px;
    font-weight: 300;
    font-size: ${({theme}) => theme.fontSize.size18};
`
