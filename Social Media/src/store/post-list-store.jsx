import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Freinds, I ma going to Mumbai for my vacations, Hope to enjoy a lot, Peace out",
    reactions: 2,
    userId: "user-9",
    tags: ["vaction", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho Gye",
    body: "4 saal ki masti k baad bhi ho gye hain pass, Hard to Believe",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "unbeliveable"],
  },
];

export default PostListProvider;
