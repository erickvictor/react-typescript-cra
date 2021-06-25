import React from 'react'
import { Container } from '../../components/Container'
import Menu from '../../components/Menu'
import moviesMock from '../../components/MovieCardSlider/mock'
import MovieCardSlider from '../../components/MovieCardSlider'
// import * as S from './styles'

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <MovieCardSlider items={moviesMock} />
    </Container>
  </section>
)

export default Home
