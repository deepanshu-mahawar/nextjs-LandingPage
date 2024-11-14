import styled from "styled-components";

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .divider{
        width: 200px;
    }
`;

export const HeadingSection = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    text-align: left;

    .hr{
        border: 1px solid #a48ea6;
        width: 50px;
    }
`;

export const Heading = styled.h1`
    color: #a48ea6;
    font-weight: 500;
    font-size: 25px;
`;

export const SubHeading = styled.h2`
    font-size: 53px;
    font-weight: 500;
    color: black;
    padding: 15px 0px 20px 0px ;
    line-height: 70px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 40px;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    font-weight: 400;
    padding: 25px 0px;
    line-height: 40px;
    text-align: center;
    margin-left: 250px;
    margin-right: 250px;

    @media (max-width: 768px) {
        margin-left: 0px;
        margin-right: 0px;
    }
`;

export const Button = styled.button`
    background: #a48ea6;
    width: fit-content;
    color: white;
    padding: 20px 40px;
    border-radius: 40px;
    font-size: 17px;
    font-weight: 300;
`;


