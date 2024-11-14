import styled from "styled-components";

export const HeaderSection = styled.header`
    height: 100px;
    width: 100vw;
    position: absolute;
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



    @media (max-width: 768px) {
        display: flex;
        padding: 0 40px;
    }

    @media (min-width: 1600px) and (max-width: 1800px) {
        padding: 0px 80px;
    }
`;

export const ButtonSection = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;

    @media (max-width: 768px) {
        display: none;
    }



`

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
    /* color: ${({theme}) => theme.colors.background2};
    border: none;
    font-size: 16px; */

    background: ${({$active,theme}) => $active ? theme.colors.primary : "transparent"};
    color: ${({$active,theme}) => $active ? theme.colors.background1 : theme.colors.background2};
    padding: ${({$active,theme}) => $active ? theme.padding.btnPadding : null};
    border-radius: ${({$active,theme}) => $active ? theme.borderRadius.radius : null};
    
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

    @media (max-width: 768px) {
        display: flex;
    }

`;

export const MobileMenu = styled.div`
    position: absolute;
    top: 102px;
    left: 0px;
    width: 100%;
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
    }
`;

