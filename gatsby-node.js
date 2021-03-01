const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === "Mdx") {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: `slug`,
            node,
            value: `/blog${value}`,
        })
    }
}

exports.createPages = async({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
        query graphCPage {
            allMdx {
                edges {
                    node {
                        id
                        fields {
                        slug
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild("Error while create Blogs")
    } else {
        result.data.allMdx.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/compi/blog.js`),
                context: { id: node.id },
            })
        })
    }
}