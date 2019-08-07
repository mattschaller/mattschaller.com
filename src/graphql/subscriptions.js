/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = `subscription OnCreateBlog {
  onCreateBlog {
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
export const onUpdateBlog = `subscription OnUpdateBlog {
  onUpdateBlog {
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
export const onDeleteBlog = `subscription OnDeleteBlog {
  onDeleteBlog {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
