import styled, { css } from 'styled-components';
import { colors, theme, primaryFont } from './index';
import { media } from './media';

import bodyRight from '../images/body-right.png';

export const Container = styled.main`
    ${primaryFont};
    text-align: center;
    background-size: 150px;
    padding-bottom: 100px;

    ${media.mediumUp`
        background: url( ${bodyRight} ) right center no-repeat;
        background-size: 300px;
        padding-bottom: 150px;
    `};

    .WelcomeText{
        display: block;
        max-width: 200px;
        margin: 0 auto 10px;
        ${media.mediumUp`
            max-width:100%;
        `};
    }
    .ComingSoon{
        color: ${colors.grey};
        font-size: 14px;
        width: 250px;
        margin: 0 auto 30px;
        ${media.mediumUp`
            font-size: 20px;
        `};
    }
`;

export const Button = styled.a`
    ${primaryFont};
    display: inline-block;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 5px;
    vertical-align: middle;
    color: ${theme.primary};
    background: ${colors.white};
    border: 1px solid ${theme.primary};

    font-size: 12px;
    ${media.mediumUp`
        font-size: 14px;
        padding: 20px;
    `};

    &:hover,
    &:focus{
        color: ${colors.white};
        background: ${theme.primary};
    }
`;

export const TwitterButton = styled(Button)`
    margin-left: 10px;
    padding: 5px 10px;

    img{
        height: 50px;
        vertical-align: middle;
    }
`;


export const Content = styled.article`
    border-radius: 5px;
    margin: 50px auto 20px;
    ${media.mediumUp`
        border: 1px solid ${theme.background};
        background: ${colors.white};
        box-shadow: 5px 10px 14px ${theme.background};
        margin: 0 30%;
        padding: 40px;
    `};
`;