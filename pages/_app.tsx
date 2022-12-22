import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { NextUIProvider,  } from '@nextui-org/react';
import { darkTheme } from '../src/themes/darkTheme';
// https://www.npmjs.com/package/next-themes
// https://nextui.org/docs/theme/dark-mode#using-use-dark-mode
import { lightTheme } from '../src/themes/LightTheme';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {

  return (

    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >

      <NextUIProvider theme={ darkTheme }>
    
        <Component {...pageProps} />
        

      </NextUIProvider>

    </NextThemesProvider>
  )
}
