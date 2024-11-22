import styled from "styled-components";

export const FooterSection = styled.footer`
    color: ${({theme}) => theme.colors.background1};
    padding: 50px 180px;
    background-color: ${({theme}) => theme.colors.background2};

    .line{
        border-color: #262626;
    }

    @media (min-width: 1450px) and (max-width: 1750px) {
        padding: 50px 50px;
    }

    @media screen and (max-width: 576px) {
       display: none;
    }

    @media (min-width: 577px) and (max-width: 768px){
        display: none;
    }

    @media (min-width: 769px) and (max-width: 992px){
        width: 100%;
        padding: 50px 40px 70px 40px;
    }

    @media (min-width: 993px) and (max-width: 1200px){
        width: 100%;
        padding: 50px 40px 70px 40px;
    }

    @media (min-width: 1201px) and (max-width: 1450px){
        padding: 50px 40px;
    }
`;

export const LogoSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;

    .logo{
        width: 18%;
    }

    @media (min-width: 769px) and (max-width: 992px){
        align-items: center;
        .logo{
            width: 25%;
        }
    }

    @media (min-width: 993px) and (max-width: 1200px){
        align-items: center;
        .logo{
            width: 25%;
        }
    }
    
`;

export const Text = styled.p`
    font-size: 25px;
    font-weight: ${({theme}) => theme.fontWeight.light};
`;

export const ParagraphSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0px;

    @media (min-width: 769px) and (max-width: 992px){
        padding: 20px 0px;
    }

    @media (min-width: 993px) and (max-width: 1200px){
        padding: 20px 0px;
    }
    
`;

export const Text2 = styled.p`
    line-height: ${({theme}) => theme.textLineHeight.normal};
    font-weight: 200;

    @media (min-width: 769px) and (max-width: 992px){
        margin-right: 250px;
    }

    @media (min-width: 993px) and (max-width: 1200px){
        margin-right: 250px;
    }
`;

export const IconSection = styled.div`
    display: flex;
    gap: 15px;
    height: 55px;

    @media (min-width: 769px) and (max-width: 992px){
        height: 40px;
    }

    @media (min-width: 993px) and (max-width: 1200px){
        height: 40px;
    }
`;

export const Icons = styled.a`
    padding: 10px 12px;
    border: 1px solid ${({theme}) => theme.colors.background1};
    border-radius: 30px;

    .icon{
        font-size: ${({theme}) => theme.fontSize.size30};
    }

    @media (min-width: 769px) and (max-width: 992px){
        padding: 8px 10px;
        
        .icon{
            font-size: 20px;
        }
    }

    @media (min-width: 993px) and (max-width: 1200px){
        padding: 8px 10px;
        
        .icon{
            font-size: 20px;
        }
    }
`;

export const LinkSection = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    font-weight: ${({theme}) => theme.fontWeight.weight300};
    font-size: ${({theme}) => theme.fontSize.size16};

    .listItems{
        display: flex;
        gap: 30px;
    }

    .vl{
        border-left: 1px solid #262626;
        padding-left: 30px;
    }

    @media (min-width: 769px) and (max-width: 992px){
        p{
            width: 100%;
            position: absolute;
            text-align: center;
            display: flex;
            margin-top: 50px;
            justify-content: start;
        }

        .listItems{
            gap: 20px;
        }

        .vl{
            padding-left: 20px;
        }
    }

    @media (min-width: 993px) and (max-width: 1200px){
        p{
            width: 100%;
            position: absolute;
            text-align: center;
            display: flex;
            margin-top: 50px;
            justify-content: start;
        }

        .listItems{
            gap: 20px;
        }

        .vl{
            padding-left: 20px;
        }
    }
    
    @media (min-width: 1201px) and (max-width: 1450px){
        margin-bottom: 20px;
        p{
            position: absolute;
            margin-top: 50px;
        }
    }

`;


export const FooterForMobile = styled.div`
    display: none;

  @media screen and (max-width: 576px) {
       display: block;
       background-color: black;
       padding: 0px 20px;
       padding-top: 40px;
       padding-bottom: 30px;

    .LogoLink{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 300px;
    }

    .para{
        color: white;
        padding-top: 20px;
        font-weight: 300;
        width: 100%;
    }

    .copyright{
        text-align: center;
        color: white;
        font-weight: 300;
        width: 100%;
        padding-top: 40px;
    }

    .follow{
        font-size: 25px;
        color: white;
        padding-top: 40px;
    }
  }

  @media (min-width: 577px) and (max-width: 768px){
       display: block;
       background-color: black;
       padding: 0px 20px;
       padding-top: 40px;
       padding-bottom: 30px;

    .LogoLink{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 300px;
    }

    .para{
        color: white;
        padding-top: 20px;
        font-weight: 300;
        width: 100%;
    }

    .copyright{
        text-align: center;
        color: white;
        font-weight: 300;
        width: 100%;
        padding-top: 40px;
    }

    .follow{
        font-size: 30px;
        color: white;
        padding-top: 40px;
    }
  }

    
`;



export const FollowIcons = styled.div`
    display: flex;
    gap: 20px;
    padding-top: 10px;
    padding-bottom: 40px;

    a{
        border: 2px solid white;
        border-radius: 50px;
        padding: 7px;
    }
    .icon{
        font-size: 15px;
        color: white;
    }

    @media (min-width: 577px) and (max-width: 768px){
        .icon{
        font-size: 18px;
        color: white;
    }
    }
`;

export const NavLink1 = styled.nav`
    padding: 20px 0px;

    ul{
        display: flex;
        flex-direction: column;
        gap: 18px;
        color: white;
    }

    a{
        &:hover{
            /* border-bottom: 2px solid white; */
            font-size: 20px;
        }
    }
`;



