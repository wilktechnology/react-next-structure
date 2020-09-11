import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import LogoWilk from '../assets/wilktechnology.svg'

interface IUser {
  id: number
  name: string
}

const data: IUser[] = [
  { id: 1, name: 'André Wronscki' },
  { id: 2, name: 'Eduardo Wronscki' }
]

const Home: React.FC = () => {
  if (!data) {
    return (
      <Container>
        <p>Carregando...</p>
      </Container>
    )
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <LogoWilk />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Wilk Technology</p>

      <h2>Contributors</h2>
      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </Container>
  )
}

export default Home
