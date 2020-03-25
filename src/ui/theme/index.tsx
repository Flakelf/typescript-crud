import React from 'react';
import { ThemeProvider } from 'styled-components';

import variables from './variables';

interface ICustomThemeProvider {
  children: React.ReactNode;
}

const theme = {
  ...variables,
};

const CustomThemeProvider = ({ children }: ICustomThemeProvider): JSX.Element => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { CustomThemeProvider };
