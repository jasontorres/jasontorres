import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Intro from '../components/Intro'
export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Hero />
        <Intro />
        <Portfolio />
        <section className="section" id="notes">
          <div className="container">
            <div className="section-header">
              <h2>Recent Notes</h2>
              <p>What I've been up to recently</p>
            </div>
            <div className="columns">
              {posts.map(({ node: post }) => (
                <div className="column">
                  <div className="card blog-card" key={post.id}>
                    <div className="card-content">
                      <h3 className="title">
                        <Link
                          className="has-text-primary"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </h3>
                      <p className="subtitle">{post.frontmatter.date}</p>
                      <p>
                        {post.excerpt}
                        <br />
                        <Link className="is-small" to={post.fields.slug}>
                          Read
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          status: { eq: "published" }
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            status
          }
        }
      }
    }
  }
`
