import {createContext, useReducer } from "react";

const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost:() => {},
});


const PostListProvider = () => {
    const [postList,dispatchPostList]=useReducer()
    return <PostList.Provider value={[postList,]}>{children}</PostList.Provider>
}
export default PostListProvider