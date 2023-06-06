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
    description: `Here are things`,
    title: `I'm working on`,
    image: {
      src: '/static/images/ironman-draw.png',
      width: 300,
      height: 300,
    },
  },
  {
    description: 'I am an',
    title: 'Apprentice',
    image: {
      src: '/static/images/underdog.png',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I am a`,
    title: 'Teaching Assistant and Curriculm Collaborator',
    image: {
      src: '/static/images/jtc1.png',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I am a`,
    title: 'Backend Technical Advisor for New E-commerce App',
    image: {
      src: '/static/images/keyboard.png',
      width: 400,
      height: 400,
    },
  },
]
