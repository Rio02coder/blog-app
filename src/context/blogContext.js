import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'delete_blogPost' : return state.filter((blogPost) => {return blogPost.id !== action.payload})
        case 'add_blogPost' : return [...state, {id: Math.floor(Math.random() * 99999),title: action.payload.title, content: action.payload.content}]
        default: return state
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'add_blogPost', payload: {title, content}})
        callback()
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blogPost', payload: id})
    }
}

export const {Context, Provider} = createDataContext(blogReducer,{addBlogPost, deleteBlogPost},[])