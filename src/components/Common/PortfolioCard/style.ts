import styled from "styled-components";

export const CardSection = styled.div`
    position: relative;
    width: 660px;
    height: 500px;
    border-radius: 35px;
    overflow: hidden;  

    @media screen and (max-width: 576px) {
        position: relative;
        width: 500px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        position: relative;
        width: 550px;
    }
`;

export const ImageBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    .bgImg{
        filter: brightness(0.5);
    }
`;

export const Watermark = styled.button`
    position: absolute;
    z-index: 1;
    right: 30px;
    top: 30px;
    color: black;
    background: white;
    padding: 10px 15px;
    border-radius: 30px;
    font-size: 13px;
`;

export const ContentDiv = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 40px;
`;

export const TextDiv = styled.div`
    margin: 365px 0px 0px 0px;
`; 

export const Button = styled.button`
    background: white;
    color: black;
    padding: 5px 15px;
    border-radius: 30px;
    font-size: 12px;
`;

export const Text = styled.p`
    padding-top: 10px;
    font-size: 32px;
    font-weight: 600;
    color: white;
`;