import React from 'react'
import { Container } from '../../components/Container'
import Menu from '../../components/Menu'
import Heading from '../../components/Heading'
// import moviesMock from '../../components/MovieCardSlider/mock'
import MovieCardSlider from '../../components/MovieCardSlider'
import useMoviesService from '../../utils/services/useMoviesService'

import * as S from './styles'

const Home = () => {
  const service = useMoviesService()

  return (
    <section>
      <S.Menu>
        <Container>
          <Menu />
        </Container>
      </S.Menu>
      {service.status === 'loaded' && console.log(service.payload)}
      <S.SectionNews>
        <Container>
          <Heading circleLeft>
            Lançamentos<span> da Semana</span>
          </Heading>
          {service.status === 'loaded' && (
            <MovieCardSlider items={service.payload.data} />
          )}
        </Container>
      </S.SectionNews>
    </section>
  )
}

export default Home
