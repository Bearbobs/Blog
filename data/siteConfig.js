module.exports = {
  siteTitle: 'Escapades. Tech',
  siteDescription: 'Blog about Tech, Career and Life',
  authorName: 'Anuj Kapoor',
  twitterUsername: 'AnujKaps',
  authorAvatar: 'avatar.JPG', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Software Engineer, from India. Trying to document his experiences.
  `,
  siteUrl: 'https://escapades.tech',
  disqusSiteUrl: 'https://escapades.tech',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: 'cover.png', // file in content/images
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/ico.jpg',
  postsPerPage: 6,
  disqusShortname: 'escapades-tech',
  headerTitle: 'Escapades.Tech',
  headerLinksIcon: '', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/Bearbobs',
          rel: 'external',
        },
        {
          label: 'Linkedin',
          url: 'https://www.linkedin.com/in/anuj-kapoor-642387158/',
          rel: 'external',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/AnujKaps',
          rel: 'external',
        },
      ],
    },
  ],
}
