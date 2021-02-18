module.exports = {
  title: "Hi, I'm Manfred Werner",
  tagline: 'Dream big. Discover. Never stop learning.',
  url: 'https://manfredwern.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'manfredwern', // Usually your GitHub org/user name.
  projectName: 'manfredwern.github.io', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight'),
    },
    navbar: {
      title: 'manfredwern',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          to: 'cv/',
          activeBasePath: 'cv',
          label: 'About me',
          position: 'left',
        },
        {to: 'playground', label: 'Playground', position: 'left'},
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/manfredwern/manfredwern.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    sidebarCollapsible: false,
    footer: {
      style: 'light',
      // links: [
      //   {
      //     title: 'About me',
      //     items: [
      //       {
      //         label: 'Skills',
      //         to: 'cv/technical-skills',
      //       },
      //     ],
      //   },
      //   // {
      //   //   title: 'Community',
      //   //   items: [
      //   //     {
      //   //       label: 'Stack Overflow',
      //   //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //   //     },
      //   //     {
      //   //       label: 'Discord',
      //   //       href: 'https://discordapp.com/invite/docusaurus',
      //   //     },
      //   //     {
      //   //       label: 'Twitter',
      //   //       href: 'https://twitter.com/docusaurus',
      //   //     },
      //   //   ],
      //   // },
      //   {
      //     title: 'More',
      //     items: [
      //       // {
      //       //   label: 'Blog',
      //       //   to: 'blog',
      //       // },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      logo: {
        alt: 'Facebook Open Source Logo',
        // src: 'img/oss_logo.png',
        // href: 'https://opensource.facebook.com',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Manfred Werner. Built with Docusaurus!`,
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
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],  
};
