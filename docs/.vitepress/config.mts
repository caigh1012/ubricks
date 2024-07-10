import { defineConfig } from 'vitepress';

const serverBasePath = process.env.NODE_ENV === 'production' ? '/abrick/' : '/';
const serverPublicPath = process.env.NODE_ENV === 'production' ? '/abrick/' : '/';

export default defineConfig({
  title: 'ubricks',
  description: 'A javascript utility library',
  base: serverBasePath,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/caigh1012/abrick' }],
  },
});
