'use client'

import { FC, ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface MyThemeProviderProps {
  children: ReactNode;
  attribute: string;
  defaultTheme: string
}


// Themeprovider component hahaha 
const MyThemeProvider: FC<MyThemeProviderProps> = ({ children, ...props }) => {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
};

export default MyThemeProvider;
