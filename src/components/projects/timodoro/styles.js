import styled, { css } from 'styled-components';
import { theme, colors } from '../../../styles/index';
import { media } from '../../../styles/media';

export const TimodoroAppContainer = styled.div.attrs({
    className: 'TimodoroForm'
})`
    border: 2px solid pink;
`;

export const TimodoroForm = styled.form.attrs({
    className: 'TimodoroForm'
})`
    min-height: 100vh;
    padding: 0 40px;
`;

export const TimodorosContainer = styled.main.attrs({
    className: 'TimodorosContainer'
})`
    min-height: 50px;
    width: 100%;
    display: block;
    border: 1px solid purple;
    padding: 0 40px;
`;

export const TimodoroContainer = styled.main.attrs({
    className: 'TimodoroContainer'
})`
    min-height: 50px;
    width: 30%;
    display: inline-block;
    border: 1px solid blue;
    padding: 0 40px;
`;