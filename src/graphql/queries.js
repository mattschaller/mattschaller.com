/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlogs = `query GetBlogs {
  getBlogs {
    id
    name
    description
    revision
    posts {
      items {
        id
        author
        title
        body
        likes
        dislikes
        revision
      }
      nextToken
    }
  }
}
`;
export const getPosts = `query GetPosts {
  getPosts {
    id
    author
    title
    body
    likes
    dislikes
    revision
    blog {
      id
      name
      description
      revision
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        author
        body
        likes
        dislikes
        revision
      }
      nextToken
    }
  }
}
`;
export const getComments = `query GetComments {
  getComments {
    id
    author
    body
    likes
    dislikes
    revision
    post {
      id
      author
      title
      body
      likes
      dislikes
      revision
      blog {
        id
        name
        description
        revision
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
    id
    name
    description
    revision
    posts {
      items {
        id
        author
        title
        body
        likes
        dislikes
        revision
      }
      nextToken
    }
  }
}
`;
export const listBlogs = `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      revision
      posts {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    author
    title
    body
    likes
    dislikes
    revision
    blog {
      id
      name
      description
      revision
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        author
        body
        likes
        dislikes
        revision
      }
      nextToken
    }
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      author
      title
      body
      likes
      dislikes
      revision
      blog {
        id
        name
        description
        revision
      }
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    author
    body
    likes
    dislikes
    revision
    post {
      id
      author
      title
      body
      likes
      dislikes
      revision
      blog {
        id
        name
        description
        revision
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      author
      body
      likes
      dislikes
      revision
      post {
        id
        author
        title
        body
        likes
        dislikes
        revision
      }
    }
    nextToken
  }
}
`;
