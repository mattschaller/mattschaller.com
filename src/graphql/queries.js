/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
    id
    name
    description
    created
    modified
    posts {
      items {
        id
        author
        title
        body
        excerpt
        slug
        likes
        dislikes
        createdAt
        modified
        version
      }
      nextToken
    }
    version
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
      created
      modified
      posts {
        nextToken
      }
      version
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
    excerpt
    slug
    likes
    dislikes
    createdAt
    modified
    blog {
      id
      name
      description
      created
      modified
      posts {
        nextToken
      }
      version
    }
    tags {
      items {
        id
        value
      }
      nextToken
    }
    comments {
      items {
        id
        author
        body
        likes
        dislikes
        version
      }
      nextToken
    }
    version
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
      excerpt
      slug
      likes
      dislikes
      createdAt
      modified
      blog {
        id
        name
        description
        created
        modified
        version
      }
      tags {
        nextToken
      }
      comments {
        nextToken
      }
      version
    }
    nextToken
  }
}
`;
export const getTag = `query GetTag($id: ID!) {
  getTag(id: $id) {
    id
    value
    post {
      id
      author
      title
      body
      excerpt
      slug
      likes
      dislikes
      createdAt
      modified
      blog {
        id
        name
        description
        created
        modified
        version
      }
      tags {
        nextToken
      }
      comments {
        nextToken
      }
      version
    }
  }
}
`;
export const listTags = `query ListTags($filter: ModelTagFilterInput, $limit: Int, $nextToken: String) {
  listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      value
      post {
        id
        author
        title
        body
        excerpt
        slug
        likes
        dislikes
        createdAt
        modified
        version
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
    post {
      id
      author
      title
      body
      excerpt
      slug
      likes
      dislikes
      createdAt
      modified
      blog {
        id
        name
        description
        created
        modified
        version
      }
      tags {
        nextToken
      }
      comments {
        nextToken
      }
      version
    }
    version
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
      post {
        id
        author
        title
        body
        excerpt
        slug
        likes
        dislikes
        createdAt
        modified
        version
      }
      version
    }
    nextToken
  }
}
`;
