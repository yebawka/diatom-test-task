import { DefaultTheme } from 'styled-components';

export enum Color {
    Background = '#676cc7',
    Border = '#ccc',
    Striped = '#f7f7ff',
    Highlight = '#c2beff',
    White = '#fff',
    Black = '#000',
}

export const defaultTheme: DefaultTheme = {
    space: ['0', '1px', '2px', '4px', '8px', '16px'],
    palette: {
        common: {
            black: Color.Black,
            white: Color.White,
        },
        primary: Color.Highlight,
        secondary: Color.Striped,
        border: Color.Border,
        background: Color.Background,
    },
};
