import styled, { css } from 'styled-components';
import { media } from './media';

const theme = {
    beige: '#F9FAF4',
    olive: '#4A6163',
    orange: '#F9A66C',
    yellow: '#FFC94B',
    coral: '#F17A7E',
};

const primaryFont = css`{
    font-family: 'Inter', serif;
}`;

const secondaryFont = css`{
    font-family: 'Playfair Display', serif;
}`;

export const Body = styled.main`
    ${primaryFont};
    padding: 20px;
    margin: 50px auto;
   
    ${media.mediumUp`
        padding: 150px;
        margin: 50px auto 150px;
    `};
`;

export const Section = styled.section`
    text-align: center;
    .logo{
        width: 50px;
        ${media.mediumUp`
            width: 80px;
        `};
    }

    h1{
        margin: -5px 0 0;
        ${secondaryFont};
        color: ${theme.olive};
        font-size: 40px;
        white-space: nowrap;
       
        ${media.mediumUp`
            letter-spacing: 5px;
            font-size: 90px;
        `};
    }
    
    h2{
        ${primaryFont};
        text-transform: uppercase;
        color: ${theme.coral};
        font-size: 12px;
        letter-spacing: 8px;
        margin: 0 0 15px;
        -webkit-text-emphasis-style: open;
        white-space: nowrap;

        ${media.mediumUp`
            font-size: 25px;
            margin: 0 0 35px;
        `};
    }
`;

export const LinksSection = styled(Section)`
    a{
        cursor: pointer;
        display: inline-block;
        margin: 15px;
        width: 30px;

        ${media.mediumUp`
            margin: 25px;
            width: 80px;
        `};

        img{
            transition: width 0.2s ease;
            width: 90%;
        }

        &:hover{
            img{
                width: 100%;
            }
        }
    }
`;
