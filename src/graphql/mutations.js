/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const upvotePost = `mutation UpvotePost($id: String!) {
  upvotePost(id: $id) {
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
export const downvotePost = `mutation DownvotePost($id: String!) {
  downvotePost(id: $id) {
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
export const upvoteComment = `mutation UpvoteComment($id: String!) {
  upvoteComment(id: $id) {
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
export const downvoteComment = `mutation DownvoteComment($id: String!) {
  downvoteComment(id: $id) {
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
export const createBlog = `mutation CreateBlog($input: CreateBlogInput!) {
  createBlog(input: $input) {
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
export const updateBlog = `mutation UpdateBlog($input: UpdateBlogInput!) {
  updateBlog(input: $input) {
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
export const deleteBlog = `mutation DeleteBlog($input: DeleteBlogInput!) {
  deleteBlog(input: $input) {
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
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
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
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
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
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
