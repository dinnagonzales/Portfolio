import styled, { css } from 'styled-components';
import { media } from './media';

import bodyRight from '../images/body-right.png';

export const Container = styled.main`
    background: url( ${bodyRight} ) right center no-repeat;
    background-size: 150px;
    padding-bottom: 150px;
   
    ${media.mediumUp`
        background-size: 300px;
        padding-bottom: 300px;
    `};
`;