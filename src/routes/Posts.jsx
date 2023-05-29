import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";
// import MainHeader from "../components/MainHeader";
import { useState } from "react";
function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // function hideModalHandler() {
  //   setModalIsVisible(false);
  // }
  // function showModalHandler() {
  //   setModalIsVisible(true);
  // }
  return (
    <>
      {/* <MainHeader onCreatePost={showModalHandler} /> */}
      <Outlet />
      <main>
        <PostsList
          // isPosting={modalIsVisible}
          // onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch('http://localhost:8080/posts')
  const resData = await response.json();
  return resData.posts;
};