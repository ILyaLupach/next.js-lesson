import Router from 'next/router'
import { MainLayout } from '../../components/MainLayout'

const AboutPage = () => {

  const clickHandler = (url: string) => Router.push(url)

  return (
    <MainLayout title='about page'>
      <h1>About Page</h1>
      <button onClick={() => clickHandler('/')}>Go back to home</button>
      <button onClick={() => clickHandler('/posts')}>Go to posts</button>
    </MainLayout>
  )
}

export default AboutPage
