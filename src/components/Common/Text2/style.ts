import styled from "styled-components";

export const MainSection = styled.div`
    
    display: flex;
    flex-direction: column;

    .divider{
        width: 200px;
        padding: 20px 0px;
    }

    @media (max-width: 768px) {
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
`;

export const SubHeading = styled.h2`
    font-size: 50px;
    font-weight: 500;
    padding-top: 14px;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 40px;
    }


`;

export const Paragraph = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 40px;

    @media (max-width: 768px) {
        text-align: center;
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
`

