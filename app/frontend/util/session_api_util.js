//ajax requests
//login
//logout
//signup

export const login = (user) => {
  return $.ajax ({
    method: "POST",
    url: "api/session",
    data: { user: user}
  })
}

export const signup = (user) => {
  return $.ajax ({
   method: "POST",
    url: "api/users",
    data: { user: user }
  })
}

export const logout = () => {
  return $.ajax ({
    method: "DELETE",
    url: "api/session",
  })
}
/************************************/
export const fetchUser = (userId) => {
  // debugger
  return $.ajax ({
    method: "GET",
    url: `api/users/${userId}`,
  })
}

/********************************* */

export const createPost = post => {
  return $.ajax ({
    method: "POST",
    url: 'api/posts',
    data: {post: post}
  })
} 
export const deletePost = postId => {
  return $.ajax ({
    method: "DELETE",
    url: `api/posts/${postId}`,
  })
}
export const fetchPosts = () => {
  return $.ajax ({
    method: "GET",
    url: `api/posts/`,
  })
}
export const fetchPost = (postId) => {
  return $.ajax ({
    method: "GET",
    url: `api/posts/${postId}`,
  })
}