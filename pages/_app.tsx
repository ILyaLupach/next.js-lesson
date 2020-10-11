import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
