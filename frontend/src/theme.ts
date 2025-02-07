import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const colors = {
    brand: {
        50: '#f0e7ff',
        100: '#d1beff',
        200: '#b195ff',
        300: '#916bff',
        400: '#7242ff',
        500: '#5819ff',
        600: '#4400e6',
        700: '#3300b4',
        800: '#220082',
        900: '#110051',
    },
};

export const theme = extendTheme({ config, colors }); 