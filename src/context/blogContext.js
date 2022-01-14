import React from "react";

const blogContext = React.createContext()

export const BlogProvider = ({children}) => {
    return <blogContext.Provider value={null}>{children}</blogContext.Provider>
}
