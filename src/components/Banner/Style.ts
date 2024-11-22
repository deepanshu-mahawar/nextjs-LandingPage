import styled from "styled-components";

export const HeadingSection = styled.div`
    padding: 360px 0px 0px 180px;

    @media (min-width: 1450px) and (max-width: 1750px) {
        padding: 350px 0px 0px 50px;
    }

    @media screen and (max-width: 576px) {
       padding: 250px 0px 0px 20px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
       padding: 250px 50px 0px 20px;
    }

    @media (min-width: 769px) and (max-width: 992px) {
       padding: 250px 0px 0px 40px;
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        padding: 250px 0px 0px 40px;
        width: 100vw;
    }

    @media (min-width: 1200px) and (max-width: 1450px) {
        padding: 250px 0px 0px 40px;
    }
`;


export const Heading = styled.h1`
    color: ${({theme}) => theme.colors.background1};
    font-size: 85px;
    font-weight: ${({theme}) => theme.fontWeight.weight200};
    line-height: 120px;

    @media screen and (max-width: 576px) {
       font-size: 55px;
       line-height: 60px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        font-size: 65px;
        line-height: 80px;
    }
`;

export const Span = styled.span`
    font-weight: ${({theme}) => theme.fontWeight.semibold};
`;

export const Paragraph = styled.p`
    color: ${({theme}) => theme.colors.background1};
    font-size: ${({theme}) => theme.fontSize.size18};
    font-weight: ${({theme}) => theme.fontWeight.weight300};
    line-height: ${({theme}) => theme.textLineHeight.medium};
    padding: 25px 0px;

    @media screen and (max-width: 576px) {
       font-size: 18px;
       padding: 25px 0px;
    }
`;

export const Button = styled.button`
    color: ${({theme}) => theme.colors.background1};
    font-size: 27px;
    border-bottom: 2px solid ${({theme}) => theme.colors.background1};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 576px) {
       font-size: 25px;
    }
`;

