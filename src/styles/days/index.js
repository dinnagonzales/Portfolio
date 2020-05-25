import styled, { css } from 'styled-components';
import { theme, colors } from '../index';
import { media } from '../media';

import evenDay from '../../images/day-orange.png'
import oddDay from '../../images/day-green.png'
import evenCount from '../../images/number-orange.png'
import oddCount from '../../images/number-green.png'

export const DaysContainer = styled.article.attrs({
    className: 'DaysContainer'
})`
    border: 1px solid red;
    width: 100%;

    border-radius: 5px;
    margin: 50px auto 20px;
    text-align: center;
    height: auto;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;

    ${media.mediumUp`
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
        box-shadow: rgb(235,229,219) 2px 3px 0px;
        border: 1px solid ${theme.background};
        width: 1200px;
        max-width: 80%;
        margin: 0 auto 50px;
        background: ${colors.white};
        padding: 40px;
    `};


`;

export const DayContainer = styled.div.attrs({
    className: 'DayContainer'
})`
    border: 1px solid ${theme.background};
`;

export const DayCount = styled.div.attrs({
    className: 'DayCount',
    'aria-label': `${ ({day}) => `Day ${day}`}`,
})`
    background-image: url(${ ({even}) => even ? evenDay : oddDay });
    background-repeat: no-repeat;
    background-size: auto 100%;
    height: 40px;
    width: 80px;
    position: relative;

    .number{
        background-image: url(${ ({even}) => even ? evenCount : oddCount });
        background-repeat: no-repeat;
        background-position: ${ ({day}) => day && (day) }px center;
        width: 20px;
        height: 40px;
        position: absolute;
        right: 0;
    }
`;