module.exports = {
  title: 'Ifapme X44',
  description: 'Support de cours',
  markdown: {
    // options for markdown-it-anchor
    lineNumbers: false,
    /* anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'))
    } */
  },
  themeConfig: {
    lastUpdated: 'Dernière mise à jour', // string | boolean
    displayAllHeaders: false, // Default: false
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'https://gitlab.com/g.guminski/ifapme-x44',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribuer !',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Aidez-nous à améliorer cette page !',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Roadmap', link: '/roadmap/'},
      {
        text: 'Introduction',
        items: [
          { text: 'IDE & Visual Studio Code', link: '/introduction/01-visual-studio.html' },
          { text: 'Guide de création de Sites Web', link: '/introduction/02-sites-web.html' },
          { text: 'Git & Gitlab', link: '/introduction/03-git.html' }
        ]
      },
      {
        text: 'Frontend',
        items: [
          { text: 'Les Balises HTML5', link: '/frontend/01-balises-html5.html' },
          { text: 'ARIA "Accessible Rich Internet Applications"', link: '/frontend/02-aria.html' },
          { text: 'Les microdatas', link: '/frontend/03-microdata.html' },
          { text: 'SEO', link: '/frontend/04-seo.html' },
          { text: 'Positionnement CSS', link: '/frontend/05-positionnement.html' },
          { text: 'Responsive & Media Queries', link: '/frontend/06-responsive.html' },
          { text: 'Fonts', link: '/frontend/07-font.html' },
          { text: 'Fichiers SVG et gestion d\'images', link: '/frontend/08-svg-image.html' },
          { text: 'Animation CSS', link: '/frontend/09-animate.html' },
          { text: 'Javascript avec jQuery', link: '/frontend/10-jquery.html' }
        ]
      },
      {text: 'Backend', link: '/backend/'},
	    {
        text: 'PHP',
         items: [
          { text: 'Introduction à PHP', link: '/php/01-introduction-php.html' }         
        ]
      },
      {text: 'Tags', link: '/tags/'},
      {text: 'À propos', link: '/about/'}
    ],
    sidebar: {
      '/introduction/' : [
        '',
        '01-visual-studio',
        '02-sites-web',
        '03-git'
      ],
      '/frontend/' : [
        '',
        '01-balises-html5',
        '02-aria',
        '03-microdata',
        '04-seo',
        '05-positionnement',
        '06-responsive',
        '07-font',
        '08-svg-image',
        '09-animate',
        '10-jquery'
      ],
      '/backend/' : [
        '',
      ],
      '/php/' : [
        '',
        '01-introduction-php'      
      ],
    }
  }
}
