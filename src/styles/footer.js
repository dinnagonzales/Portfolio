import styled, { css } from 'styled-components';
import { theme } from './index';
import { media } from './media';

import leftBg from '../images/footer-left.png';
import rightBg from '../images/footer-right.png';

export const Container = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background-color: ${theme.background};
    height: 100px;

    text-align: center;

    ${media.mediumUp`
        height: 130px;
        padding: 15px;
    `};

    .copyright{
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        font-size: 11px;
        ${media.mediumUp`
            font-size: 12px;
            bottom: 10px;
        `};
    }
`;

export const ConnectImg = styled.img`
    display: block;
    margin: 0 auto 5px;
    width: 150px;

    ${media.mediumUp`
        width: 200px;
        margin: 0 auto;
    `};
`;

export const FooterButton = styled.a`
    display: inline-block;
    padding: 5px;
    height: 40px;

    ${media.mediumUp`
        padding: 15px;
        height: 60px;
    `};
`;

export const Img = styled.img`
    display: inline-block;
    max-height: 100%;
    width: auto;
`;