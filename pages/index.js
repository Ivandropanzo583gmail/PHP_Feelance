import Ultra from "./Ultra"
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <div>
        <Ultra />
        <Head>
          <link rel="shortcut icon" href="./realidade_virtual.png" />
          <title>Banner</title>
        </Head>
      </div>
    </>
  )
}