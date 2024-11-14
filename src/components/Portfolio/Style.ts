import styled from "styled-components";

export const PortfolioSection = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 150px 80px 150px;

    @media (max-width: 768px) {
        padding: 50px 40px 50px 40px;
    }

    
    @media (min-width: 1400px) and (max-width: 1750px) {
        padding: 80px 80px 80px 80px;
    }
`;

export const GridLayout = styled.div`
    display: grid;
    padding: 80px 0px;
    gap: 80px;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 768px) {
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
