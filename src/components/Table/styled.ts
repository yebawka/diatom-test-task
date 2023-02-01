import styled, { css } from 'styled-components';
import { TableConfig } from './types';

export const StyledTable = styled.table<TableConfig>`
    border-collapse: collapse;
    border-spacing: ${({ theme }) => theme.space[0]};
    width: 100%;

    td,
    th {
        border: ${({ theme }) => theme.space[1]} solid
            ${({ theme }) => theme.palette.border};
        padding: ${({ theme }) => theme.space[1]}
            ${({ theme }) => theme.space[2]};
    }

    thead {
        background: ${({ theme }) => theme.palette.background};
        color: ${({ theme }) => theme.palette.common.white};
        height: ${({ header }) => header?.height};
    }

    tbody {
        tr {
            height: ${({ row }) => row?.height};
        }

        ${({ striped }) =>
            striped &&
            css`
                tr:nth-child(odd) {
                    background-color: ${({ theme }) =>
                        theme.palette.common.white};
                }
                tr:nth-child(even) {
                    background-color: ${({ theme }) => theme.palette.secondary};
                }
            `}
    }

    ${({ header }) =>
        header?.sticky &&
        css`
            overflow: auto;
            thead {
                position: sticky;
                top: ${({ theme }) => theme.space[0]};
                z-index: 1;
            }
        `}
`;
