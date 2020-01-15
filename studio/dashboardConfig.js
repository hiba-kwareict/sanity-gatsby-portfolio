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
                  buildHookId: '5e1e9aa129dd9435b17e1135',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-yfdeqyjz',
                  apiId: '65225d5f-0fc3-41c1-a2fb-1379223b0e07'
                },
                {
                  buildHookId: '5e1e9aa1cd86a359e00a71d8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ixozru9g',
                  apiId: 'fa623137-4f71-4002-856e-0e87b4c12b4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hiba-kwareict/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ixozru9g.netlify.com',
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
