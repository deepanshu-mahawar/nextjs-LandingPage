import styled from "styled-components";

export const MainSection = styled.div`
    
    display: flex;
    flex-direction: column;

    .divider{
        width: 200px;
        padding: 20px 0px;
    }

    @media screen and (max-width: 576px) {
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media (min-width: 769px) and (max-width: 992px) {
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        justify-content: center;
        align-items: center;
    }


`;

export const HeadingDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    .headline{
        border: 1px solid #a48ea6;
        width: 50px;
    }
`;

export const Heading = styled.h1`
    font-size: 25px;
    font-weight: 500;
    color: #a48ea6;

    @media (min-width: 1201px) and (max-width: 1450px){
        font-size: 20px;
    }
`;

export const SubHeading = styled.h2`
    font-size: 50px;
    font-weight: 500;
    padding-top: 14px;

    @media (min-width: 769px) and (max-width: 992px){
        text-align: center;
    }

    @media (min-width: 1201px) and (max-width: 1450px) {
        font-size: 30px;
    }
`;

export const Paragraph = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 40px;

    @media (min-width: 769px) and (max-width: 992px) {
        text-align: center;
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        text-align: center;
    }

    @media (min-width: 1201px) and (max-width: 1450px) {
        font-size: 16px;
        line-height: 35px;
    }


`;

export const Button = styled.button`
    background: #a48ea6;
    width: fit-content;
    color: white;
    padding: 20px 40px;
    border-radius: 40px;
    font-size: 18px;
    font-weight: 300;
    margin-top: 30px;

    @media (min-width: 1201px) and (max-width: 1450px) {
        display: none;
    }
`;

