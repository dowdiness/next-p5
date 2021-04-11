import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

import sketch from '../sketches/rect'

const Sketch = dynamic(import('../components/p5-wrapper'), {
  loading: () => <></>,
  ssr: false
})

export const Home = () => {
  // const [rotation, setRotation] = useState(0)
  // const { canvasRef } = useP5(sketch)
  return (
    <div className={styles.container}>
      <Head>
        <title>P5js with Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Processing sketches
        </h1>

        <p className={styles.description}>
          <a href="https://openprocessing.org/">https://openprocessing.org/</a>
        </p>

        <Sketch sketch={sketch} />

      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}

export default Home
