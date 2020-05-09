import styled, { css } from 'styled-components';
import { media } from './media';

import bodyRight from '../images/body-right.png';

export const Container = styled.main`
    text-align: center;
    background-size: 150px;
    padding-bottom: 100px;
   
    ${media.mediumUp`
        background: url( ${bodyRight} ) right center no-repeat;
        background-size: 300px;
        padding-bottom: 150px;
    `};

    img{
        display: block;
        margin: 100px auto;
        width: 100px;
    }
`;