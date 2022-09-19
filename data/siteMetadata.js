const siteMetadata = {
  title: 'Unfrench Morocco',
  author: 'The Free Moroccans',
  headerTitle: 'unfrenchmorocco',
  description: 'The Free Moroccans speaking up against the cultural french occupation',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://unfrenchmorocco.com',
  siteRepo: '',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  email:'',
  twitter:'',
  socialBanner: '/static/images/twitter-card.png',
  facebook: 'https://facebook.com/unfrenchmorocco',
  linkedin: '',
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
