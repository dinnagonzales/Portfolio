import styled, { css } from 'styled-components';
import { theme } from './index';
import { media } from './media';

import leftBg from '../images/footer-left.png';
import rightBg from '../images/footer-right.png';

export const Container = styled.footer`
    padding: 10px;
    background: url( ${leftBg} ) left bottom no-repeat;
    background-size: 150px;
    background-color: ${theme.background};
    height: 150px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    ${media.mediumUp`
        padding: 30px;
        height: 300px;
        background: url( ${leftBg} ) left bottom no-repeat, url( ${rightBg} ) right 15% top no-repeat;
        background-color: ${theme.background};
        background-size: 300px, 250px;
    `};
`;

export const ConnectImg = styled.img`
    width: 70%;
    max-width: 250px;
    margin-top: 5px;
    display: block;
    margin: 0 auto;
    ${media.mediumUp`
        width: 20%;
        min-width: 250px;
        max-width: none;
    `};
`;