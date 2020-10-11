import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'

import classes from './MainLayout.module.scss'

type Props = {
  title?: string
  children: ReactNode
}

export const MainLayout = ({ children, title = 'Next'}: Props) => {
  return (
    <>
      <Head>
        <title>{title || 'Next Title'}</title>
        <meta name="keywords" content="Next, React, JavaScript" />
        <meta name="description" content="this my first Next.js app" />
        <meta charSet='UTF-8' />
      </Head>
      <nav className={classes.navigation}>
        <h2>Navigation</h2>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}
