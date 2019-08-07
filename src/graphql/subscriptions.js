/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = `subscription OnCreateBlog {
  onCreateBlog {
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
export const onUpdateBlog = `subscription OnUpdateBlog {
  onUpdateBlog {
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
export const onDeleteBlog = `subscription OnDeleteBlog {
  onDeleteBlog {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateTag = `subscription OnCreateTag {
  onCreateTag {
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
export const onUpdateTag = `subscription OnUpdateTag {
  onUpdateTag {
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
export const onDeleteTag = `subscription OnDeleteTag {
  onDeleteTag {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
