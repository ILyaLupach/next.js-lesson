import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'

const ErrorPage = () => {
  return (
    <MainLayout>
      <h1 className='error'>Error 404</h1>
      <p>Please <Link href='/'>go to home</Link></p>
    </MainLayout>
  )
}

export default ErrorPage
