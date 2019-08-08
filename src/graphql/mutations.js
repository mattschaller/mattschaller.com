/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const upvotePost = `mutation UpvotePost($id: String!) {
  upvotePost(id: $id) {
    id
    author
    title
    body
    excerpt
    slug
    likes
    dislikes
    created
    modified
    blog {
      id
      title
      body
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
        created
        modified
        version
      }
      nextToken
    }
    version
  }
}
`;
export const downvotePost = `mutation DownvotePost($id: String!) {
  downvotePost(id: $id) {
    id
    author
    title
    body
    excerpt
    slug
    likes
    dislikes
    created
    modified
    blog {
      id
      title
      body
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
        created
        modified
        version
      }
      nextToken
    }
    version
  }
}
`;
export const upvoteComment = `mutation UpvoteComment($id: String!) {
  upvoteComment(id: $id) {
    id
    author
    body
    likes
    dislikes
    created
    modified
    post {
      id
      author
      title
      body
      excerpt
      slug
      likes
      dislikes
      created
      modified
      blog {
        id
        title
        body
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
export const downvoteComment = `mutation DownvoteComment($id: String!) {
  downvoteComment(id: $id) {
    id
    author
    body
    likes
    dislikes
    created
    modified
    post {
      id
      author
      title
      body
      excerpt
      slug
      likes
      dislikes
      created
      modified
      blog {
        id
        title
        body
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
export const createBlog = `mutation CreateBlog($input: CreateBlogInput!) {
  createBlog(input: $input) {
    id
    title
    body
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
        created
        modified
        version
      }
      nextToken
    }
    version
  }
}
`;
export const updateBlog = `mutation UpdateBlog($input: UpdateBlogInput!) {
  updateBlog(input: $input) {
    id
    title
    body
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
        created
        modified
        version
      }
      nextToken
    }
    version
  }
}
`;
export const deleteBlog = `mutation DeleteBlog($input: DeleteBlogInput!) {
  deleteBlog(input: $input) {
    id
    title
    body
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
        created
        modified
        version
      }
      nextToken
    }
    version
  }
}
`;
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    author
    title
    body
    excerpt
    slug
    likes
    dislikes
    created
    modified
    blog {
      id
      title
      body
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
        created
        modified
        version
      }
      nextToken
    }
    version
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    author
    title
    body
    excerpt
    slug
    likes
    dislikes
    created
    modified
    blog {
      id
      title
      body
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
        created
        modified
        version
      }
      nextToken
    }
    version
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    author
    title
    body
    excerpt
    slug
    likes
    dislikes
    created
    modified
    blog {
      id
      title
      body
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
        created
        modified
        version
      }
      nextToken
    }
    version
  }
}
`;
export const createTag = `mutation CreateTag($input: CreateTagInput!) {
  createTag(input: $input) {
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
      created
      modified
      blog {
        id
        title
        body
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
export const updateTag = `mutation UpdateTag($input: UpdateTagInput!) {
  updateTag(input: $input) {
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
      created
      modified
      blog {
        id
        title
        body
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
export const deleteTag = `mutation DeleteTag($input: DeleteTagInput!) {
  deleteTag(input: $input) {
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
      created
      modified
      blog {
        id
        title
        body
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    author
    body
    likes
    dislikes
    created
    modified
    post {
      id
      author
      title
      body
      excerpt
      slug
      likes
      dislikes
      created
      modified
      blog {
        id
        title
        body
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    author
    body
    likes
    dislikes
    created
    modified
    post {
      id
      author
      title
      body
      excerpt
      slug
      likes
      dislikes
      created
      modified
      blog {
        id
        title
        body
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    author
    body
    likes
    dislikes
    created
    modified
    post {
      id
      author
      title
      body
      excerpt
      slug
      likes
      dislikes
      created
      modified
      blog {
        id
        title
        body
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
