import styled, { css } from 'styled-components';
import { media } from './media';

import top from '../images/top.png';

export const Container= styled.header`
    background-image: url( ${top} );
    background-repeat: no-repeat;
    text-align: center;
    width: 100%;
    height 150px;
    background-size: 90%;
    background-position: top left -300%;
    
    ${media.mediumUp`
        height 200px;
        background-size: 50%;
        background-position: top left 13%;
    `};
`;

export const NameImg = styled.img`
    width: 60%;
    max-width: 150px;
    display: inline-block;

    margin-bottom: 5px;
    margin-top: 45px;

    ${media.mediumUp`
        width: 10%;
        margin-bottom: 10px;
        margin-top: 55px;
        min-width: 150px;
        max-width: none;

    `};
`;
export const LabelImg = styled.img`
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