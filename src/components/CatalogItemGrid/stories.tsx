import { Story, Meta } from '@storybook/react/types-6-0'
import CatalogItemGrid, { CatalogItemGridProps } from '.'

export default {
  title: 'CatalogItemGrid',
  component: CatalogItemGrid,
  args: {
    title: 'Liga da Justiça de Zack Snyder',
    genre: 'Ação, Aventura',
    average: 8.4,
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
    overview:
      'Determinado a garantir que o sacrifício final do Superman não foi em vão, Bruce Wayne alinha forças com Diana Prince com planos de recrutar uma equipe de metahumanos para proteger o mundo de uma ameaça de proporções catastróficas que se aproxima.'
  }
} as Meta

export const Basic: Story<CatalogItemGridProps> = (args) => (
  <CatalogItemGrid {...args} />
)

Basic.parameters = {
  backgrounds: {
    default: 'suno-dark'
  }
}
