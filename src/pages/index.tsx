import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

import ImgLogo from '../assets/2.svg'

const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImgLogo />
      <h1>ReactJS Estrutura</h1>
      <p>A ReactJS + Next.js estrutura feita pela Rocketseat</p>
    </Container>
  )
}

export default Home
