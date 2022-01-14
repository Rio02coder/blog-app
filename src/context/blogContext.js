import React, {useReducer} from "react";

const blogContext = React.createContext()

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogPost' : return [...state, {title: `Post ${state.length + 1}`}]
        default: return state
    }
}

export const BlogProvider = ({children}) => {
    const [blogPosts, dispatch] = useReducer(blogReducer,[])
    const addBlogPost = () => {
        dispatch({type: 'add_blogPost'})
    }
    return <blogContext.Provider value={{posts: blogPosts, addBlogPost: addBlogPost}}>{children}</blogContext.Provider>
}

export default blogContext