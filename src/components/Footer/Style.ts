import styled from "styled-components";

export const FooterSection = styled.footer`
    color: ${({theme}) => theme.colors.background1};
    padding: 50px 180px;
    background-color: ${({theme}) => theme.colors.background2};

    .line{
        border-color: #262626;
    }

    //Media Query for smartphones
    @media (max-width: 768px) {
    padding: 50px 40px;

        .line{
        display: none;
        }
    }


    @media (min-width: 1500px) and (max-width: 1750px) {
        padding: 50px 80px;
    }

`;

export const LogoSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;

    .logo{
        width: 18%;
    }

    //Media Query for smartphones
    @media (max-width: 768px) {
        align-items: center;

        .logo{
            width: 30%;
        }
    }

`;

export const Text = styled.p`
    font-size: 25px;
    font-weight: ${({theme}) => theme.fontWeight.light};

    //Media Query for smartphones
    @media (max-width: 768px) {
        font-size: 20px;
    }

`;

export const ParagraphSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0px;

    //Media Query for smartphones
    @media (max-width: 768px) {
        padding: 20px 0px 0px 0px;
    }



`;

export const Text2 = styled.p`
    line-height: ${({theme}) => theme.textLineHeight.normal};
    font-weight: 200;

    //Media Query for smartphones
    @media (max-width: 768px) {
        height: fit-content;
        width: fit-content;
        margin-right: 200px;
        font-size: 18px;
        font-weight: 200;
    }


`;

export const IconSection = styled.div`
    display: flex;
    gap: 15px;
    height: 55px;

    //Media Query for smartphones
    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    }



`;

export const Icons = styled.a`
    padding: 10px 12px;
    border: 1px solid ${({theme}) => theme.colors.background1};
    border-radius: 30px;

    .icon{
        font-size: ${({theme}) => theme.fontSize.size30};
    }

    //Media Query for smartphones
    @media (max-width: 768px) {
    padding: 10px 10px;

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

    //Media Query for smartphones
    @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0px;

    .listItems{
        flex-direction: column;
        margin-top: 30px;
    }
    .vl{
        display: none;
    }

    p{
        text-align: center;
        margin-top: 50px;
    }
    }

`;
