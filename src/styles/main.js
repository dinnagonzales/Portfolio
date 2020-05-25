import styled, { css } from 'styled-components';
import { colors, theme, primaryFont } from './index';
import { media } from './media';

import bodyRight from '../images/body-right.png';

export const ContentContainer = styled.main.attrs({
    className: 'ContentContainer',
})`
    ${primaryFont};
    text-align: center;
    background-size: 150px;
    padding-bottom: 150px;
    width: 100%;
    min-height: calc(${window.outerHeight}px - 515px);
    ${media.mediumUp`
        background: url( ${bodyRight} ) right top 200px no-repeat;
        background-size: 300px;
        padding-bottom: 200px;
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


export const ContentBody = styled.article.attrs({
    className: 'ContentBody'
})`
    display: inline-block;
    border-radius: 5px;
    margin: 50px auto 20px;
    text-align: center;
    height: auto;

    ${media.mediumUp`
        box-shadow: rgb(235,229,219) 2px 3px 0px;
        border: 1px solid ${theme.background};
        width: 500px;
        margin: 0 auto 50px;
        background: ${colors.white};
        padding: 20px 20px 20px 0;
    `};

    display: grid;
    grid-template-columns: 1fr 2fr;
    .WelcomeText{
      max-width: 200px;
      margin: 0 auto 10px;
      ${media.mediumUp`
          max-width:100%;
      `};
      grid-row-start: span 2;
    }
    .ComingSoon{
        line-height: 20px;
        text-align: left;
        color: ${colors.grey};
        font-size: 14px;
        margin: 0 auto 15px;
    }
`;