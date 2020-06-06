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
    width: 100%;
    border-radius: 5px;
    margin: 20px auto 20px;
    text-align: center;
    height: auto;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    ${media.mediumUp`
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
    padding: 15px;
    text-align: left;
`;
export const ProjectInfo = styled.div.attrs({
    className: 'ProjectInfo'
})`
    background: ${theme.background};
    border-radius: 10px;
    padding: 15px;
    text-align: left;

    h2{
        margin: 0;
    }
    a{
        color: ${theme.primary};
        text-decoration: none;
    }
    p{
        font-size: 13px;
        line-height: 20px;
        margin: 30px 0 5px 0;
        ${media.mediumUp`
            font-size: 15px;
            line-height: 20px;
        `};
    }
    .date{
        text-align: right;
        font-size: 12px;
    }
`;