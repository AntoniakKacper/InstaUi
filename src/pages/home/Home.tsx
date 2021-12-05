import "App.scss";
import {Post} from "components/Post";
import {PostModel} from "models/PostModel";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "store";
import {setPosts} from "store/actions/postAction";
import CircularProgress from "@mui/material/CircularProgress";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const { posts } = useSelector((state: RootState) => state.posts);
  const { loading } = useSelector((state: RootState) => state.stateRed);
  const action = useDispatch();

  useEffect(() => {
    action(setPosts());
  }, [action]);

  if (loading) {
    return (
      <div className="home-wrapper">
        <CircularProgress size={40} />
      </div>
    );
  }
  return (
    <div className="home-wrapper">
      {posts &&
        posts.map((post: PostModel) => (
          <Post
            key={post.id}
            avatarUrl="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            username="XD"
            imageUrl="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            // description={post.description}
            post={post}
          />
        ))}
    </div>
  );
};
