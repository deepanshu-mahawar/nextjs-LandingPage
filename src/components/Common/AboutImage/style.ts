import styled from "styled-components";

export const ImageSection = styled.div`
    width: 50%;

    .image{
        border-radius: 50px;
    }

    @media screen and (max-width: 576px) {
        width: 100%;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        width: 100%;
    }

    @media (min-width: 769px) and (max-width: 992px) {
        width: 100%;
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        width: 100%;
    }

    @media (min-width: 1201px) and (max-width: 1450px) {
        width: 50%;
    }
`;