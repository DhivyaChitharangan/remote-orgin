// theme.ts

import { useColorScheme } from 'react-native';

export type defaultColorTheme = {
  backgroundColor: string;
  textColor: string;
  primary:string;
  PrimarySandal:string;
  primarySecondry:string;
  primaryLight:string;
  black:string,
  white:string  // Add more styling options here
};

const lightTheme: defaultColorTheme = {
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
  primary: '#0e8680',
  PrimarySandal: '#d8c77c',
  white: '#ffffff',
  black: '#000000' // Add more styling options for light mode
  ,
  primarySecondry: '#71cbc6',
  primaryLight: '#b8e5e3'
};

const darkTheme: defaultColorTheme = {
  backgroundColor: '#000000',
  textColor: '#FFFFFF',
  primary: '#0e8680',
  PrimarySandal: '#d8c77c',
  white: '#ffffff',
  black: '#000000' // Add more styling options for dark mode
  ,
  primarySecondry: '#71cbc6',
  primaryLight: '#b8e5e3'
};

export const useThemeContext = (): defaultColorTheme => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkTheme : lightTheme;
};
