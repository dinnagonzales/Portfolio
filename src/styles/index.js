import styled, { css } from 'styled-components';
import { media } from './media';

const colors = {
    white: '#fff',
};

const theme = {
    beige: '#F9FAF4',
    olive: '#4A6163',
    orange: '#F9A66C',
    yellow: '#FFC94B',
    coral: '#F17A7E',
};

const primaryFont = css`{
    font-family: 'Inter', serif;
}`;

const secondaryFont = css`{
    font-family: 'Playfair Display', serif;
}`;

export const Main = styled.main`
    ${primaryFont};
    display: block;
    padding: 20px;
    margin: 50px auto;
   text-align: center;
    ${media.mediumUp`
        margin: 50px auto 150px;
    `};
    h1{
        padding-top: 50px;
        font-size: 20px;
    }
    img{
        max-width: 200px;
    }
`;

export const LinksSection = styled.section`
    margin-top: 10px; 
`;

export const PagesSection = styled.section`
    text-align: center;
    margin-top: 10px;
    ${media.mediumUp`
        text-align: right;
    `};
`;


export const Header = styled.header`
    position: relative;
    padding: 15px;
    height: 40px;
    ${media.mediumUp`
        padding: 20px 20%;
    `};
    .logo{
        width: 50px;
        display: block;
        margin: 0 auto 25px;

        ${media.mediumUp`
            position: absolute;
            top: 15px;
            width: 70px;
            left: 15%;
        `};
    }
}`;

export const Footer = styled.footer`
    ${primaryFont};
    font-size: 12px;
    background-color: ${theme.olive};
    color: ${colors.white};
    text-align: center;
    padding: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}`;

export const Link = styled.a`
    color: ${theme.olive};
    letter-spacing: 2px;
    display: inline-block;
    margin-left: 15px;
    text-decoration: none;
    font-size: 12px;
    ${media.mediumUp`
        margin-left: 55px;
        font-size: 14px;
    `};
`;

export const Icon = styled.a`
    cursor: pointer;
    display: inline-block;
    margin: 15px;
    width: 30px;

    ${media.mediumUp`
        margin: 10px;
        width: 30px;
    `};

    img{
        transition: width 0.2s ease;
        width: 90%;
    }
`;