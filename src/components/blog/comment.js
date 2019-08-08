/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Comment = ({ comment }) => {

  console.log(comment);
  console.log(this);

  const { id, author, body, likes, dislikes, post, version} = 1  //data.posts.getComment

  return (
    <article className="media" key={id}>
      {/* <figure className="media-left">
        <p className="image is-64x64">
          <Image fixed={this.props.data.portrait.childImageSharp.fixed} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{items.author}</strong>
            <br/>
            {items.body}
            <br/>
            <small>{items.likes} <a>likes</a> · {items.dislikes} <a>dislikes</a> · <a>Reply</a> · 3 hrs</small>
          </p>
        </div>
      </div> */}
    </article>
  )

}

export default Comment

// const data = useStaticQuery(graphql`
//   query getComment($id: ID!) {
//     posts {
//       getComment(id: "1") {
//         id
//         author
//         body
//         likes
//         dislikes
//         post {
//           id
//         }
//         version
//       }
//     }
//   }
//   `)