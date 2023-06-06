const siteMetadata = {
  title: 'Asha Maurya',
  author: 'Asha Maurya',
  headerTitle: 'ashamaurya',
  description: 'Software Developer',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://dalelarroder.com',
  siteRepo: 'https://github.com/jtc21am/amaurya-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'jtc21am@gmail.com',
  github: 'https://github.com/jtc21am',
  twitter: 'https://twitter.com/dalelarroder',
  facebook: '',
  linkedin: 'https://www.linkedin.com/in/asha-m-271829273/',
  // spotify: 'https://open.spotify.com/',
  steam: '',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
