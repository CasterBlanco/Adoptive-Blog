import C2 from "../assets/image01.png";
import B1 from "../assets/blog/desktop/post/icon.jpg"
import { useState, useEffect } from "react";
import { useCommentContext  } from "../Components/CommentContext"
import { useHeartContext } from "../Components/HeartContext";
import Breadcrumbs from "../Components/BreadCrumbs";
import LoadingSpinner from '../Components/LoadingSpinner'
import React from "react";


function Comment01(props) {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]); 
  const [showLowestComment, setShowLowestComment] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showAllComments, setShowAllComments] = useState(false);
  const { commentCounts, incrementCommentCount } = useCommentContext();
  const { heartCounts, toggleHeart, heart } = useHeartContext();
  const [isLoading, setIsLoading] = useState(true); 

  
 

  const handleTextareaChange = (e) => {
    const commentText = e.target.value;
    setNewComment(commentText);
    setIsButtonDisabled(commentText.trim() === '');
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('comments', JSON.stringify(comments));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [comments]);

const addComment = () => {
  if (newComment.trim() === '') return;

  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', {
    month: 'long',
  })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  

  const updatedComments = [
    ...comments,
    { text: newComment, date: formattedDate },



  ];

  localStorage.setItem('comments', JSON.stringify(updatedComments));
  setComments(updatedComments);
  setNewComment('');

  if (updatedComments.length > 1) {
    setShowLowestComment(false); 
    console.log(updatedComments.length);
    console.log(showLowestComment);
  }
};

useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 1000); 
}, []);



const handleCommentButtonClick = () => {
  incrementCommentCount('blog-2');
};

    
  return (
 
   
    <div className='first-comment'>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <React.Fragment>
      <Breadcrumbs />
        <div className="ourFirst">
            <h1>Movie Night with the Squad</h1>
            <div className="comment-creator">
                <img className="comment-avatar" src={B1} alt="" />
                <p className='comment-name'>
                Nelson Lang (GOT9) January 10, 2023                
                </p>
            </div>
            <br/>
            <p className='comment-post'>
           Nothing beats a cozy night in with your closest friends! Watching movies, eating snacks, and just enjoying each other's company. Shoutout to my amazing squad for always being there for me. Love you guys! ❤️🍿👯‍♀️
           </p>
              <div>
                      <svg className='comment' id="blog-2" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                      </svg>
                        <p className='comment-count'>{commentCounts['blog-2']}</p>
                        <p className='heart-count-1'>{heartCounts['heart-2']}</p>
                        <svg className={heart ('heart-2') } 
                        id='heart-first'
                        stroke="currentColor" 
                        fill="currentColor" 
                        strokeWidth="0" 
                        viewBox="0 0 16 16" 
                        height="1em" 
                        width="1em" 
                        onClick={() => toggleHeart('heart-2')}
                        xmlns="http://www.w3.org/2000/svg"><path fillrule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path></svg>
                        <div className='contact'>
                        <br/>
                        <br/>
            <div className="comment" onChange={handleTextareaChange}>
            <h3 className="h3-comment">Leave a Comment</h3>
                <textarea className="textarea1"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  cols='70'
                  rows='5'
                  placeholder="Love seeing you guys having fun together! Can't wait to hang out with you guys again! 🤗"
                ></textarea>
                <button className={isButtonDisabled ? 'gray-button' : ""}    onClick={() => {
                  if (!newComment.trim()) {
                    alert('Please leave a comment');
                    return;
                  }
                  addComment();
                  handleCommentButtonClick();
                }}
                 disabled={isButtonDisabled}>Submit</button>
              </div>
              <div>
                <h3 className="
                comments">Comments:</h3>
                <ul>
                {comments.slice(0, showAllComments ? undefined : - 1).map((comment, index) => (
                <li key={index} className={showAllComments || index < 1 ? 'comment-item' : 'comment-item hidden'}>
                    <div className="comment-avatar-container">
                    <img className="comment-avatar" src={B1} alt="" />
                  </div>
                  <p className="anonymous">Anonymous (You)</p>
                  <p className="comment-text">{comment.text}</p>
                  <div className="comment-info">
                    <p className="comment-date">{comment.date}{ <p className='comment-count' id="fave">{heartCounts[('heart-01')]}</p>}
                    {<div className="comment-actions">
                      <svg
                        className={`heart-icon ${heart('heart-01')}`}
                        id='heart-01'
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        onClick={() => toggleHeart('heart-01')}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fillrule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                      </svg>
                      </div>}</p>
                  </div>
                </li>
              ))}
                <li className="comment-item">
                <div className="comment-avatar-container">
                    <img className="comment-avatar" src={B1} alt="" />
                  </div>
                  <p className="anonymous">John (GOT9)</p>
                  <p className="comment-text">Looks like a fun night! Wish I could've been there! 😍</p>
                  <div className="comment-info">
                    <p className="comment-date">January 11, 2023 <p className='comment-count' id="fave">{heartCounts['heart-jc']}</p>
                    {<div className="comment-actions">
                    <svg
                        className={`heart-icon ${heart('heart-jc')}`}
                        id='heart-jc'
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"sd
                        width="1em"
                        onClick={() => toggleHeart(`heart-jc`)}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fillrule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                      </svg>
                      </div>}</p>
                  </div>
                </li>
                <li className="comment-item">
                <div className="comment-avatar-container">
                    <img className="comment-avatar" src={B1} alt="" />
                  </div>
                  <p className="anonymous">Rijin (MLS)</p>
                  <p className="comment-text">Love seeing you guys having fun together! Can't wait to hang out with you guys again! 🤗</p>
                  <div className="comment-info">
                    <p className="comment-date">January 11, 2023  <p className='comment-count' id="fave">{heartCounts['dark']}</p>
                    {<div className="comment-actions">
                    <svg
                        className={`heart-icon ${heart('dark')}`}
                        id='dark'
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"sd
                        width="1em"
                        onClick={() => toggleHeart('dark')}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fillrule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                      </svg>
                      </div>}</p>
                  </div>
                </li>
                </ul>
            </div>
            <div>
       
        <ul>
          {comments.slice(0, showAllComments ? undefined : - 1).map((comment, index) => (

          <li key={index} className={showAllComments || index < 1 ? 'comment-item' : 'comment-item hidden'}>
            
              {console.log(comment)}
            </li>
            
          ))}
        </ul>
        {comments.length > 0 && (
        <button onClick={() => setShowAllComments(!showAllComments)} className="view-more-button">
          {showAllComments ? 'Show Less' : 'Show More'}
        </button>
      )}
      </div>
        </div>
      </div>
        </div>
            <div>
              <img className="comment-img" src={C2} alt="alter" />
            </div>
            </React.Fragment>
            )}
    </div>
   
  )
}


export default Comment01;