import styled, { css } from 'styled-components';
import { colors, theme, primaryFont } from './index';
import { media } from './media';

import bodyRight from '../images/body-right.png';

export const Container = styled.main`
    ${primaryFont};
    text-align: center;
    background-size: 150px;
    padding-bottom: 100px;
    width: 100%;
    ${media.mediumUp`
        background: url( ${bodyRight} ) right center no-repeat;
        background-size: 300px;
        padding-bottom: 150px;
    `};
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
    vertical-align: middle;
    color: ${theme.primary};
    background: ${colors.white};
    border: 1px solid ${theme.primary};

    letter-spacing: 1px;
    font-size: 12px;
    ${media.mediumUp`
        font-size: 14px;
    `};

    &:hover,
    &:focus{
        color: ${colors.white};
        background: ${theme.primary};
    }
`;


export const Content = styled.article`
    border-radius: 5px;
    margin: 50px auto 20px;
    text-align: center;
    height: auto;
    max-width: calc(100% - 40px);

    ${media.mediumUp`
        box-shadow: rgb(235,229,219) 2px 3px 0px;
        border: 1px solid ${theme.background};
        width: 1200px;
        max-width: 80%;
        margin: 0 auto;
        background: ${colors.white};
        padding: 40px;
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
        display: block;
        color: ${colors.grey};
        font-size: 14px;
        margin: 0 auto 30px;
        ${media.mediumUp`
            font-size: 18px;
        `};
    }
`;