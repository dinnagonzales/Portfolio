import styled, { css } from 'styled-components';
import { theme, colors } from '../../../styles/index';
import { media } from '../../../styles/media';

export const TimodoroContainer = styled.main.attrs({
    className: 'TimodoroContainer'
})`
    min-height: 250px;
    border: 1px solid purple;
    padding: 0 40px;
`;


export const TimodoroForm = styled.main.attrs({
    className: 'TimodoroForm'
})`
  min-height: 100vh;
  padding: 0 40px;
`;