import styled, { css } from 'styled-components';

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
    padding: 150px;
    margin: 50px auto 150px;
`;

export const Section = styled.section`
    text-align: center;
    .logo{
        width: 80px;
    }
    h2{
        ${primaryFont};
        text-transform: uppercase;
        color: ${theme.coral};
        font-size: 25px;
        letter-spacing: 8px;
        margin: 0 0 35px;
        -webkit-text-emphasis-style: open;
        white-space: nowrap;
    }
    h1{
        letter-spacing: 5px;
        margin: -5px 0 0;
        ${secondaryFont};
        color: ${theme.olive};
        font-size: 90px;
        white-space: nowrap;
    }
`;

export const LinksSection = styled(Section)`
    a{
        cursor: pointer;
        display: inline-block;
        margin: 25px;
        width: 80px;

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
