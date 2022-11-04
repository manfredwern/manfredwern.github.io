module.exports = {
  title: "Hi, I'm Manfred.",
  tagline: "I'm a naturally curious person in search of new coding experiences 👨‍💻",
  url: 'https://manfredwern.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon/favicon.ico',
  organizationName: 'manfredwern',
  projectName: 'manfredwern.github.io',
  deploymentBranch: 'master',
  themeConfig: {
    // metadatas: [{name: 'og:card', content: 'summary'}],
    prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight'),
    },
    colorMode: {
      // switchConfig: {
      //   darkIcon: '🌙',
      //   lightIcon: '☀️',
      // },
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'manfredwern',
      style: 'primary',
      hideOnScroll: true,
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
    // sidebarCollapsible: false,
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
        // sitemap: {
        //   changefreq: 'yearly',
        //   priority: 0.5,
        //   ignorePatterns: ['/tags/**'],
        //   filename: 'sitemap.xml',
        // },
      },
    ],
  ],  
};
