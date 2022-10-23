import '../styles/globals.css'
<<<<<<< HEAD

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
=======
import {UserProvider} from "../context/useContext"

import Head from "next/head";
import Script from "next/script"

// add bootstrap css 

function MyApp({ Component, pageProps }) {
  return(
  <>
    <Head>
        <title>Loanyee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProvider>
        <Component {...pageProps} />
    </UserProvider>
  </>

  )
>>>>>>> main-temp
}

export default MyApp
