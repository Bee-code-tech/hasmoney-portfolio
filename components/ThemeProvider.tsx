'use client'

import { FC, ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface MyThemeProviderProps {
  children: ReactNode;
}

const MyThemeProvider: FC<MyThemeProviderProps> = ({ children, ...props }) => {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
};

export default MyThemeProvider;
