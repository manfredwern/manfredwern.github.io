module.exports = {
  // cv: {
  //   Guides: [
  //     'about-me',
  //     {
  //       type: 'link',
  //       label: 'Custom Label', // The label that should be displayed (string).
  //       href: 'https://example.com' // The target URL (string).
  //     },
  //     {
  //       type: 'ref',
  //       id: 'doc1', // Document id (string).
  //     },
  //     {
  //       type: 'category',
  //       label: 'Docs',
  //       collapsed: false,
  //       items: ['doc1', 'doc2', 'doc3'],
  //     },
  //   ],
  // },
  // work: {
  //   Work: [
  //     'technical-skills',
  //     {
  //       type: 'category',
  //       label: 'Docs',
  //       collapsed: false,
  //       items: ['doc1', 'doc2', 'doc3'],
  //     },
  //   ],
  // },
  aboutMeSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['about-me','technical-skills']
    },
    {
      type: 'doc',
      id: 'projects'
    },
    // {
    //   type: 'doc',
    //   id: 'technical-skills'
    // },
    // {
    //   type: 'doc',
    //   id: 'work-experience'
    // },
    // {
    //   type: 'doc',
    //   id: 'education'
    // },
    // {
    //   type: 'doc',
    //   id: 'doc2'
    // },
    // {
    //   type: 'doc',
    //   id: 'doc3'
    // },
  ],
};


// cvSiderBar: {
//   'About me': ['about-me','technical-skills'],
//   'Experiences': ['work-experience', 'education'],
//   Docusaurus: ['doc1', 'doc2', 'doc3'],
//   Features: ['mdx'],
// },
