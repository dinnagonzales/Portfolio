import styled, { css } from 'styled-components';
import { media } from './media';

export const colors = {
    sand: '#ebe5db',
    burnt: '#ce8523',
    terra: '#b35417',
    olive: '#354739',
    navy: '#2f4d6a',
    mustard: '#d59229',
    white: '#fff',
    grey: '#333',
};

export const theme = {
    primary: colors.burnt,
    secondary: colors.olive,
    highlight: colors.terra,
    background: colors.sand,
};

export const primaryFont = css`{
    font-family: 'Lato', sans-serif;
}`;

export const secondaryFont = css`{
    font-family: 'Playfair Display', serif;
}`;

export const Container= styled.div`
    .hidden{
        display: none;
    }
`;