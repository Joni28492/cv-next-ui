import { NextUIProvider } from '@nextui-org/react'
import { NextComponentType, NextPageContext } from 'next';
// import type { AppProps } from 'next/app'
import React from 'react'
import { darkTheme } from '../themes/darkTheme'


interface Props {
  Component:  NextComponentType<NextPageContext, any, any>;
  pageProps:  any;
}


const AppWrapper = ( { Component, pageProps }: Props ) => {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}


export default AppWrapper;