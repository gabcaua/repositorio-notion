import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1d251268ba1145dfa935c6368c2a12be',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  //rootNotionSpaceId: 'fb420fb7-4dec-44d9-b9b3-a17d4460c9b8',

  // basic site info (required)
  name: 'Repositório - Trabalhos Acadêmicos - Cauã Gabriel',
  domain: 'repositorio.cgsilva.com.br',
  author: 'Cauã Gabriel',
  language: 'pt-BR',
  // open graph metadata (optional)
  description: 'O Repositório - Cauã Gabriel é uma iniciativa para armazenar, preservar e divulgar as contribuições de Cauã e colaboradores (as) para a educação e a ciência. contato@cgsilva.com.br',

  // social usernames (optional)
  twitter: 'imgabcaua',
  github: 'gabcaua',
  linkedin: 'cgsilva-dev',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
   newsletter: 'mailto:contato@cgsilva.com.br?subject=Seus trabalhos.', // optional newsletter URL
   youtube: '@cn_estudios', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,
  isSearchEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/caua~': ""
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
