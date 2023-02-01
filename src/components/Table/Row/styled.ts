import styled from 'styled-components';
import { StyledIdProps } from './types';

export const StyledTd = styled.td<StyledIdProps>`
    background: ${({ isHighlighted, theme }) =>
        isHighlighted && theme.palette.primary};
`;
