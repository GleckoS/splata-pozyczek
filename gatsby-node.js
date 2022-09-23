const fs = require('fs')
const { resolve } = require('path')

exports.createPages = async ({
  graphql,
  actions: { createPage },
}) => {
  const { data: { allWpPage: { nodes } } } = await graphql(`
    query {
      allWpPage{
        nodes {
          id
          uri
        }
      }
    }
  `);

  nodes.forEach(({ id, uri }) => {
    if (id !== 'cG9zdDo0MzQ=' && id !== 'cG9zdDozNzU=' && id !== 'cG9zdDo2MzQ=') {
      createPage({
        path: uri,
        component: resolve('src/templates/page.jsx'),
        context: {
          id
        },
      });
    }
  });
}