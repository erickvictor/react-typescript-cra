import React from 'react'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import MovieCard, { MovieCardProps } from '../MovieCard'
import Slider, { SliderSettings } from '../Slider'

import * as S from './styles'

export type MovieCardSliderProps = {
  items: MovieCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: true,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: true,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: true,
        slidesToShow: 1
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next movies" />,
  prevArrow: <ArrowLeft aria-label="previous movies" />
}

const MovieCardSlider = ({ items, color = 'white' }: MovieCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <MovieCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default MovieCardSlider
