import styled from "styled-components";

export const HeaderSection = styled.header`
    height: 100px;
    width: 100vw;
    position: fixed;
    /* top: 0; */
    z-index: 2;
    padding: 0px 180px;
    background: ${({theme}) => theme.colors.background1};
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    .logolink{
        height: 100px;
        padding: 10px 0px;
    }

    .logo{
        height: 100%;
        width: 100%;
    }

    .mobileIcons{
        color: black;
        font-size: 30px;
    }

    @media (min-width: 1450px) and (max-width: 1750px) {
        padding: 0px 40px;
    }

    @media screen and (max-width: 576px) {
        padding: 0px 20px;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        padding: 0px 20px;
    }

    @media (min-width: 769px) and (max-width: 992px) {
        padding: 0px 40px;
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        padding: 0px 40px;
        width: 100vw;
    }

    @media (min-width: 1200px) and (max-width: 1450px) {
        padding: 0px 40px;
    }
`;

export const ButtonSection = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;

    @media screen and (max-width: 576px) {
        display: none;
    }
`;

// export const Button = styled.button`
//     color: ${({theme}) => theme.colors.background2};
//     border: none;
//     font-size: 16px;

//     &:hover, &.active{
//         background-color: ${({theme}) => theme.colors.primary};
//         color: ${({theme}) => theme.colors.background1};
//         padding: 18px 35px;
//         border-radius: 30px;
//         font-size: ${({theme}) => theme.fontSize.size16};
//     }

//     @media (max-width: 768px) {
//         display: none;
//     }
// `;


export const Button = styled.button<{$active?:boolean}>`
    background: ${({$active,theme}) => $active ? theme.colors.primary : "transparent"};
    color: ${({$active,theme}) => $active ? theme.colors.background1 : theme.colors.background2};
    padding: ${({$active,theme}) => $active ? theme.padding.btnPadding : null};
    border-radius: ${({$active,theme}) => $active ? theme.borderRadius.radius : null};
    
    
    /* color: ${({theme}) => theme.colors.background2};
    border: none;
    font-size: 16px; */

    /* &:hover, &.active{
        background-color: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.background1};
        padding: 18px 35px;
        border-radius: 30px;
        font-size: ${({theme}) => theme.fontSize.size16};
    } */

    /* @media (max-width: 768px) {
        display: none;
    } */
`;

export const MobileIcons = styled.div`
    display: none;

    @media screen and (max-width: 576px) {
        display: flex;
    }

    @media (min-width: 577px) and (max-width: 768px) {
        display: flex;
    }

    @media (min-width: 769px) and (max-width: 992px) {
        display: flex;
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        display: flex;
    }


`;

export const MobileMenu = styled.div`
    position: absolute;
    top: 102px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background-color: white;
    padding: 20px;
    text-align: center;

    .mobileMenu{
        display: block;
        margin: 20px;
        font-size: 18px;
        color: black;
        text-decoration: none;

        &:hover{
            background-color: black;
            color: white;
            padding: 15px 0px;
            border-radius: 50px;
        }
    }

    .logSignBtn{
        display: block;
        margin: 20px;
        font-size: 18px;
        color: black;
        text-decoration: none;

        &:hover{
            background-color: #a48ea6;
            color: white;
            padding: 15px 0px;
            border-radius: 50px;
        }

        @media (min-width: 577px) and (max-width: 768px) {
            display: none;
        }

        @media (min-width: 769px) and (max-width: 992px) {
            display: none;
        }

        @media (min-width: 993px) and (max-width: 1200px) {
        display: none;
        }
    }

    @media (min-width: 1200px) and (max-width: 1450px) {
        display: none;
    }

    @media (min-width: 993px) and (max-width: 1200px) {
        display: block;
    }

`;

