import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./PostToll";

const PostShow = () => {
  const datas = useSelector((e) => e.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      {datas?.userlist?.map((e) => {
        return <h3>{e.email}</h3>;
      })}
    </div>
  );
};

export default PostShow;
