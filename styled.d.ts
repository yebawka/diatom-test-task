import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        space: string[];
        palette: {
            common: {
                black: string;
                white: string;
            };
            primary: string;
            secondary: string;
            background: string;
            border: string;
        };
    }
}
