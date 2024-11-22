import styled from "styled-components";


export const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: #f9f9f9;
    border: 1px solid #e6e6e6;
    border-radius: 30px;
    padding: 70px 30px;

    &:hover{
        border: 1px solid #404041;
        box-shadow: 10px 10px 40px -20px #404041;

        .logohover{
            background-color: black;
            color: white;
        }
    }

    @media screen and (max-width: 576px) {
        padding: 70px 30px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        width: 80%;
    }

    @media (min-width: 769px) and (max-width: 992px) {
        padding: 30px 10px;
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        padding: 30px 20px;
    }


`;

export const LogoSection = styled.div`
    border: 1px solid black;
    border-radius: 60px;
    padding: 3px;

`;

export const Logos = styled.div`
    padding: 30px;
    border-radius: 60px;

    .logoImg{
        font-size: 50px;
    }

    @media (min-width: 769px) and (max-width: 992px) {
        padding: 15px;

        .logoImg{
            font-size: 30px;
        }
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        padding: 15px;

        .logoImg{
            font-size: 30px;
        }
    }
`;

export const Heading = styled.h1`
    font-size: 25px;
    font-weight: 500;
    color: black;
    padding: 30px 0px 15px 0px;
    text-align: center;

    @media screen and (max-width: 576px) {
        font-size: 30px;
    }

    @media (min-width: 769px) and (max-width: 992px) {
        font-size: 20px;
    }
`;

export const Paragraph = styled.p`
    font-size: 15px;
    color: black;
    text-align: center;
    line-height: 30px;

    @media screen and (max-width: 576px) {
        font-size: 16px;
    }
`;