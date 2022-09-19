export type WorkTile = {
  title: string
  description: string
  image: {
    src: string
    width: number
    height: number
  }
}

export const workTiles: WorkTile[] = [
  {
    description: `Join Us`,
    title: `In Our Rightful Fight For Freedom`,
    image: {
      src: '/static/images/change.png',
      width: 1037,
      height: 862,
    },
  },
  {
    description: 'Our Ancestors Died, Raped, Enslaved, Imprisoned, Slaughtered and Dehumanized For Our Freedom',
    title: 'We Shall Not Let Their Sacrifice Goe In Vain',
    image: {
      src: '/static/images/morocco_vs_france.png',
      width: 1200,
      height: 675,
    },
  },
  {
    description: 'Our Rightful DEMAND Is The Only Solution For Our Problems',
    title: 'Put English As The First Foreign Language And Teach It In The Elementary School Instead Of The Rotten Corps Of The Dead Language; French',
    image: {
      src: '/static/images/teaching-english.png',
      width: 1200,
      height: 675,
    },
  },
]
