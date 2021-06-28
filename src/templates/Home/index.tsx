import React from 'react'
import { Container } from '../../components/Container'
import Menu from '../../components/Menu'
import Heading from '../../components/Heading'
import moviesMock from '../../components/MovieCardSlider/mock'
import MovieCardSlider from '../../components/MovieCardSlider'
import * as S from './styles'

const Home = () => (
  <section>
    <S.Menu>
      <Container>
        <Menu />
      </Container>
    </S.Menu>

    <S.SectionNews>
      <Container>
        <Heading circleLeft>
          Lançamentos<span> da Semana</span>
        </Heading>
        <MovieCardSlider items={moviesMock} />
      </Container>
    </S.SectionNews>
  </section>
)

export default Home
