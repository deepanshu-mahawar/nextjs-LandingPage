import styled from "styled-components";

export const Navigations = styled.nav`
    text-align: center;
    font-size: 16px;
    color: black;
    background: transparent;
    font-weight: 400;

    @media (max-width: 768px) {
        display: none;
    }

`;

export const NavMenus = styled.a<{$active?:boolean}>`
    /* margin: 0 20px; */
    /* text-decoration: none;
    

    &:hover, &.active{
        background-color: black;
        color: white;
        padding: 18px 35px;
        border-radius: 30px;
        font-size: 15px;
        text-transform: uppercase;
    } */

    margin: 0px 15px;
    /* margin: ${({$active,theme}) => $active ? theme.margin.linkMargin : null}; */
    background: ${({$active,theme}) => $active ? theme.colors.background2 : "transparent"};
    color: ${({$active,theme}) => $active ? theme.colors.background1 : theme.colors.background2};
    padding: ${({$active,theme}) => $active ? theme.padding.btnPadding : null};
    border-radius: ${({$active,theme}) => $active ? theme.borderRadius.radius : null};

`;