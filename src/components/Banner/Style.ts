import styled from "styled-components";

export const HeadingSection = styled.div`
    padding: 360px 0px 0px 180px;

    @media (max-width: 768px) {
        padding: 250px 40px 0px 40px;
    }

    @media (min-width: 1500px) and (max-width: 1750px) {
        padding: 250px 400px 0px 80px;
    }
`;

export const Heading = styled.h1`
    color: ${({theme}) => theme.colors.background1};
    font-size: 85px;
    font-weight: ${({theme}) => theme.fontWeight.weight200};
    line-height: 120px;

    @media (max-width: 768px) {
        font-size: 70px;
        line-height: 100px;
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

    @media (max-width: 768px) {
        font-size: 18px;
        padding: 15px 0px;
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

    @media (max-width: 768px) {
        font-size: 25px;
    }
`;

