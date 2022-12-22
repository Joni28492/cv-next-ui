import { Navbar } from '@nextui-org/react'
import React, { FC } from 'react';
import NextLink from 'next/link'

interface Props {
    isActive?: boolean;
    href: string;
    text: string;

}

export const CustomLink:FC<Props> = ({isActive, href, text}) => {
  return (
    <Navbar.Link isActive={isActive} href={href}>
        <NextLink  href={href} > {text} </NextLink>
    </Navbar.Link>
  )
}
