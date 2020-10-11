import Link from 'next/link'
import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'

const App = () => {
  return (
    <MainLayout title='home page'>
      <Head>
      </Head>
      <h1>Hello Next.JS</h1>
      <p><Link href='/about'>about</Link></p>
      <p><Link href='/posts'>posts</Link></p>
      <p><Link href='/post/123'>post/123</Link></p>
    </MainLayout>
  )
}

export default App
