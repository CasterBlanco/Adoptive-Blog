import React from 'react'
import { useState, useEffect } from "react";
import Breadcrumb from "../Components/BreadCrumbs";
import { PostImage } from '../Components/PostImage';


function AddPost() {
    const [newComment, setNewComment] = useState('');
    const [newComment2, setNewComment2] = useState('');

    const [comments, setComments] = useState([]); 
    const [showLowestComment, setShowLowestComment] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(true); 

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
        }, 2000); 
      }, []);


  return (
    <div className='addPost'>
            <Breadcrumb />
             <div className='divPost'>
             <h1 className='h1Post'>New post</h1>
                <h3 className='h3Post'>Add title*</h3>
                <textarea className="textarea-post"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  cols='70'
                  rows='5'
                  placeholder="Our First Concert in the U.S.!"
                ></textarea>
                <h3 className='h3Post'>Add text*</h3>
                  <textarea className="textarea"
                  value={newComment2}
                  onChange={(e) => setNewComment2(e.target.value)}
                  cols='70'
                  rows='9'
                  placeholder="Our t's official! We're coming to the U.S. for our first-ever concert! We're beyond excited to meet our American fans and show them what we've got. See you soon! 🎉🇺🇸🎤 Concert in the U.S.!"
                ></textarea>
             </div>
             <div>
             <button className={isButtonDisabled ? 'post-button' : ""}    onClick={() => {
                  if (!newComment.trim()) {
                    alert('Please leave a comment');
                    return;
                  }
                  addComment();
                }}
                 disabled={isButtonDisabled}>Post</button>
             </div>
             <div>
                
             <PostImage />
             </div>
    </div>
  )
}

export default AddPost