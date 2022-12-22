import { useTheme } from '@nextui-org/react'
import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import styles from '../../styles/Home.module.css'
import { SideMenuNavbar } from '../components/ui/SideMenuNavbar'

interface Props {
    title:string,
    description:string
}


export const MainLayout:FC<PropsWithChildren<Props>> = ({children, title, description}) => {

  const {type} = useTheme()
  // console.log(type);

  const backgroundImage = (type === 'light') 
  ? "url('https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
  : "url('https://images.unsplash.com/photo-1468186402854-9a641fd7a7c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80')"


  return (
    <>
        <Head>
          
        <title> {title} </title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
        </Head>

      

        <SideMenuNavbar />
        <main className={styles.main} style={{
          backgroundImage,
          backgroundSize: '100%'
          
        }} >
          { children }         

          
        </main>
    </>
  )
}
