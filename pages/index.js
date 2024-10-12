import Head from 'next/head'
import Navbar from '../components/Navbar'
import LadingPage from '../components/LadingPage'
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <LadingPage />
        {/*<PropostaState />*/}
        <Head>
        <link rel="shortcut icon" href=".//NavBar/Logo.png" />
        <title>FreeLancerPHP</title>
      </Head>
        
      </div>
    </>
  )
}