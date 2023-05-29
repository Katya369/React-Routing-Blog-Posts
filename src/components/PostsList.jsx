// import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';
// import NewPost from '../routes/NewPost';
// import Modal from './Modal';
import classes from './PostsList.module.css';

// function PostsList({isPosting, onStopPosting}) {
  function PostsList({isPosting, onStopPosting}) {
    const posts = useLoaderData();
//  const [isFetching, setIsFetching] = useState(false);
// const [posts, setPosts] = useState([]);
 
// useEffect(() => {
//   async function fetchPosts() {
//     setIsFetching(true);
//     // const response = await fetch('http://localhost:8080/posts')
//     // const resData = await response.json();
//     // if (!response.ok) {

//     // };
//     setPosts(resData.posts);
//     setIsFetching(false);
//   }
//   fetchPosts();
// },[]);
// const addPostHandler = (postData) => {
//   // fetch('http://localhost:8080/posts', {
//   //   method: 'POST',
//   //    body:JSON.stringify(postData),
//   //    headers: {
//   //     'Content-Type': 'application/json'
//   //    }
//   // });
//   setPosts((existingPosts) => [postData, ...existingPosts]);
// };
  // let modalContent;

  // if (modalIsVisible) {
  //   modalContent = (
  // <Modal onClose={hideModalHandler}>
  //   <NewPost
  //     onBodyChange={bodyChangeHandler}
  //     onAuthorChange={authorChangeHandler}
  //   />
  // </Modal>
  //   );
  // }

  return (
    <>
      {/* {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )} */}
      {/* {!isFetching && posts.length > 0 && (<ul className={classes.posts}> */}
        { posts.length > 0 && (<ul className={classes.posts}>
       
       {posts.map((post) => <Post key = {post.id} id={post.id} author={post.author} body={post.body}/>)}
     </ul>)};
     {/* {!isFetching && posts.length === 0 && <div style={{textAlign: 'center', color: 'white'}}><h2>There are no post yet.</h2> <p>Start adding some!</p></div>} */}
     {posts.length === 0 && <div style={{textAlign: 'center', color: 'white'}}><h2>There are no post yet.</h2> <p>Start adding some!</p></div>}
      {/* {isFetching && (<div style={{textAlign: 'center', color: 'white'}}><p>Loading posts...</p></div>)} */}
      </>
  );
}

export default PostsList;