const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const galleryTemplate = path.resolve("src/templates/gallery.js");
    resolve(
      graphql(`
        {
          contentfulArtist {
            galleries {
              id
              slug
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.contentfulArtist.galleries.forEach(gallery => {
          createPage({
            path: gallery.slug,
            component: galleryTemplate,
            context: {
              slug: gallery.slug
            }
          });
        });
        return;
      })
    );
    const archiveTemplate = path.resolve("src/templates/archive.js");
    resolve(
      graphql(`
        {
          contentfulArtist {
            archive {
              id
              slug
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.contentfulArtist.archive.forEach(archive => {
          createPage({
            path: archive.slug,
            component: archiveTemplate,
            context: {
              slug: archive.slug
            }
          });
        });
        return;
      })
    );
  });
};
