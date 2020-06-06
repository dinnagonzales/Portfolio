import styled, { css } from 'styled-components';
import { theme, secondaryFont, primaryFont } from '../index';
import { media } from '../media';


export const Container = styled.nav`
    text-align: center;
    margin-bottom: 20px;
    ul{
        margin: 0 auto;
        padding: 0;

        li{
            list-style: none;
            display: inline-block;
            margin-right: 25px;
            a{
                font-size: 13px;
                letter-spacing: 1px;
                ${primaryFont};
                text-transform: uppercase;
                color: ${theme.primary};
                text-decoration: none;

                &.active{
                    text-decoration: underline;
                    color: ${theme.secondary};
                }
            }
        }
    }
`;