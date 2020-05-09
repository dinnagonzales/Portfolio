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
    height: 130px;

    text-align: center;

    ${media.mediumUp`
        padding: 30px;
    `};

    .copyright{
        position: absolute;
        bottom: 15px;
        left: 0;
        right: 0;
        font-size: 11px;
        ${media.mediumUp`
            font-size: 12px;
        `};
    }
`;

export const ConnectImg = styled.img`
    display: block;
    margin: 0 auto 5px;
    width: 150px;

    ${media.mediumUp`width: 20%;
        width: 200px;
    `};
`;

export const FooterButton = styled.a`
    display: inline-block;
    padding: 15px;
    height: 60px;
`;

export const Img = styled.img`
    display: inline-block;
    max-height: 100%;
    width: auto;
`;