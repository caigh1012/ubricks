import { defineConfig } from 'vitepress';

const serverBasePath = process.env.NODE_ENV === 'production' ? '/ubricks/' : '/';
const serverPublicPath = process.env.NODE_ENV === 'production' ? '/ubricks/' : '/';

export default defineConfig({
  title: 'ubricks',
  description: 'A javascript utility library',
  base: serverBasePath,
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '示例', link: '/markdown-examples' },
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

    socialLinks: [{ icon: 'github', link: 'https://github.com/caigh1012/ubricks' }],
  },
});
