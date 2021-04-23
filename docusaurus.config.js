module.exports = {
  title: "Hi, I'm Manfred.",
  tagline: "I'm a naturally curious person in search of new coding experiences 👨‍💻",
  url: 'https://manfredwern.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon/favicon.ico',
  organizationName: 'manfredwern', // Usually your GitHub org/user name.
  projectName: 'manfredwern.github.io', // Usually your repo name.
  themeConfig: {
    metadatas: [{name: 'og:card', content: 'summary'}],
    prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight'),
    },
    colorMode: {
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '☀️',
      },
    },
    navbar: {
      title: 'manfredwern',
      items: [
        {
          to: 'cv/',
          activeBasePath: 'cv',
          label: 'About me',
          position: 'left',
        },
        {to: 'playground', label: 'Playground', position: 'left'},
        {
          href: 'https://github.com/manfredwern',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    sidebarCollapsible: false,
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} Manfred Werner`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'cv',
          routeBasePath: 'cv',
          sidebarPath: require.resolve('./sidebars.js'),       
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],  
};
