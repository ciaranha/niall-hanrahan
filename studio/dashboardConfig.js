export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f12014832154c0273cd7623',
                  title: 'Sanity Studio',
                  name: 'niall-hanrahan-studio',
                  apiId: 'e53c7d2b-d707-40f8-97e5-ca782dd61409'
                },
                {
                  buildHookId: '5f120148a7d0d401fdf90061',
                  title: 'Portfolio Website',
                  name: 'niall-hanrahan',
                  apiId: '936bf4ab-5e04-4252-a5b4-6d26ffead8f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jaibles/niall-hanrahan',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: '',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
