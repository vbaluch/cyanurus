const path = require("path");

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  try {
    const tagPageTemplate = path.resolve("./src/templates/tag-page.js");
    const { data, errors } = await graphql(`
      query {
        cyanurus {
          tags {
            id
            slug
          }
        }
      }
    `);

    if (errors) {
      throw new Error(errors);
    }
    data.cyanurus.tags.forEach((tag) => {
      createPage({
        path: "/tags/" + tag.slug,
        component: tagPageTemplate,
        context: {
          tagID: tag.id,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
