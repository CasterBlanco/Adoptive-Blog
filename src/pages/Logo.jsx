import A1 from '../assets/Image-8.png';
import A2 from '../assets/image01.png';
import A3 from '../assets/0_2.png';
import A4 from '../assets/0_3.png';
import A5 from '../assets/Image-3.png'
import A6 from '../assets/Image-6.png'
import A7 from '../assets/Image-1.png'
import A8 from '../assets/Image-2.png'
import A9 from '../assets/Image-4.png'
import A10 from '../assets/Image-5.png'
import A11 from '../assets/Image-7.png'
import A12 from '../assets/Image-9.jpg'
import A13 from '../assets/image-10.jpg'
import A14 from '../assets/Image-11.jpg'
import A15 from '../assets/Image-12.jpg'
import A16 from '../assets/Image-13.jpg'
import A17 from '../assets/Image-14.jpg'
import A18 from '../assets/Image-15.jpg'
import A19 from '../assets/Image-16.jpg'
import A20 from '../assets/Image-17.jpg'
import { Link } from "react-router-dom";
import { useCommentContext } from '../Components/CommentContext';
import { useHeartContext } from "../Components/HeartContext";
import React, { useState } from 'react';


function Logo() {
  const { commentCounts } = useCommentContext();
  const { heartCounts, toggleHeart, heart, heartStates  } = useHeartContext();
  const items = [
    {
      id: 'blog-1',
      heartId: 'heart-1',
      linkTo: '/image-8',
      imgSrc: A1,
      title: "Our First Concert in U.S.!",
      text: "It's official! We're coming to the U.S. for our first-ever concert! We're beyond excited to meet our American fans and show them what we've got.",
      date: 'December 5, 2022',
      author: 'Minnie (DARKPINK)',
      commentLink: '/comment',
      commentCount: commentCounts['blog-1'],
      heartCount: heartCounts['heart-1'],
    },
    {
      id: 'blog-2',
      heartId: 'heart-2',
      linkTo: '/image01',
      imgSrc: A2,
      title: "Movie Night with the Squad",
      text: "Nothing beats a cozy night in with your closest friends! Watching movies, eating snacks, and just enjoying each other's company.",
      date: 'December 5, 2022',
      author: 'Minnie (DARKPINK)',
      commentLink: '/comment01',
      commentCount: commentCounts['blog-2'],
      heartCount: heartCounts['heart-2'],
    },
    {
      id: 'blog-3',
      heartId: 'heart-3',
      linkTo: '/0_2',
      imgSrc: A3,
      title: "Happy Birthday to my best friend!",
      text: "Happy Birthday to the one and only Nisoo! You're not only an amazing friend, but also an incredible artist and performer. Here's to many more years of laughter and unforgettable memories. Love you always! 💕🎂🎉",
      date: 'March 15, 2023',
      author: 'José (DARKPINK)',
      commentLink: '/comment02',
      commentCount: commentCounts['blog-3'],
      heartCount: heartCounts['heart-3'],
    },
    {
      id: 'blog-4',
      heartId: 'heart-4',
      linkTo: '/0_3',
      imgSrc: A4,
      title: "Missing the stage so much!",
      text: "Can't wait to be back on stage and perform for all of you! The energy from the crowd is truly indescribable. It's been too long, but we'll be back soon! 💪🎶🤩",
      date: 'April 20, 2023',
      author: 'Lennie Win (DARKPINK)',
      commentLink: '/comment03',
      commentCount: commentCounts['blog-4'],
      heartCount: heartCounts['heart-4'],
    },
    {
      id: 'blog-5',
      heartId: 'heart-5',
      linkTo: '/Image-3',
      imgSrc: A5,
      title: "Thank you, ARMY!",
      text: "ARMY, we can't thank you enough for all the love and support you've shown us over the years. We're constantly blown away by your dedication and passion. You inspire us to keep pushing ourselves and making music that we're proud of. We love you all! ❤️ #MLS #ARMY #ThankYou",
      date: 'May 7, 2023',
      author: 'MLS',
      commentLink: '/comment04',
      commentCount: commentCounts['blog-5'],
      heartCount: heartCounts['heart-5'],
    },
    {
      id: 'blog-6',
      heartId: 'heart-6',
      linkTo: '/Image-6',
      imgSrc: A6,
      title: "New music video alert!",
      text: "Pinks, the wait is over! Our new music video is out now! We worked so hard on this one, and we hope you love it as much as we do. Check it out and let us know what you think in the comments! ❤️ #DARKPINK #NewMusicVideo #LennieWin",
      date: 'March 15, 2023',
      author: 'Lennie Win',
      commentLink: '/comment05',
      commentCount: commentCounts['blog-6'],
      heartCount: heartCounts['heart-6'],
    },
    {
      id: 'blog-7',
      heartId: 'heart-7',
      linkTo: '/Image-1',
      imgSrc: A7,
      title: "Dancing our way into the weekend! 💃🏽🕺🏻",
      text: "BCTzens, let's get the weekend started off right! Let's dance together and have some fun. What are some of your favorite dance moves or songs to get you hyped? Share them in the comments! 🎉🔥",
      date: 'October 15, 2022',
      author: 'BCT Official',
      commentLink: '/comment06',
      commentCount: commentCounts['blog-7'],
      heartCount: heartCounts['heart-7'],
    },
    {
      id: 'blog-8',
      heartId: 'heart-8',
      linkTo: '/Image-2',
      imgSrc: A8,
      title: "New music dropping soon! 🎶🙌",
      text: "Pinks, we're excited to announce that we have some new music coming your way very soon! We've been working hard on this project and can't wait for you all to hear it. Stay tuned for more updates! 🖤💗",
      date: 'September 2, 2022',
      author: 'DARKPINK Official',
      commentLink: '/comment07',
      commentCount: commentCounts['blog-8'],
      heartCount: heartCounts['heart-8'],
    },
    {
      id: 'blog-9',
      heartId: 'heart-9',
      linkTo: '/Image-4',
      imgSrc: A9,
      title: "Feeling the love at our concert tonight! ❤️💜",
      text: "ARMY, you were absolutely amazing tonight at our concert! We felt your love and energy the whole time and it was an unforgettable experience. We can't wait to come back and perform for you all again. Thank you for making this night so special. 💜❤️",
      date: 'July 13 2022',
      author: 'MLS Official',
      commentLink: '/comment08',
      commentCount: commentCounts['blog-9'],
      heartCount: heartCounts['heart-9'],
    },
    {
      id: 'blog-10',
      heartId: 'heart-10',
      linkTo: '/Image-7',
      imgSrc: A10,
      title: "New Music New Vibes 🔥",
      text: "We're so excited to share our latest album with all of our amazing fans! We've been working hard on this one and can't wait for you to hear it 🎶 #KpopMusic #NewAlbum",
      date: 'August 2 2023',
      author: 'ECNO',
      commentLink: '/comment09',
      commentCount: commentCounts['blog-10'],
      heartCount: heartCounts['heart-10'],
    },
    {
      id: 'blog-11',
      heartId: 'heart-11',
      linkTo: '/Image-5',
      imgSrc: A11,
      title: "Stay True to Yourself 👑",
      text: "No matter what anyone says always stay true to who you are and what you believe in. That's the key to success and happiness 💪 #KpopInspiration #BeYourself",
      date: 'December 12 2023',
      author: 'AY',
      commentLink: '/comment10',
      commentCount: commentCounts['blog-11'],
      heartCount: heartCounts['heart-11'],
    },
    {
      id: 'blog-12',
      heartId: 'heart-12',
      linkTo: '/Image-9',
      imgSrc: A12,
      title: "STaking a Break 🏖️",
      text: "It's been a busy year, but we're finally taking some time to relax and recharge on a beautiful beach ☀️ #KpopVacation #BeachVibes",
      date: 'June 27 2023',
      author: 'Blue Cotton',
      commentLink: '/comment11',
      commentCount: commentCounts['blog-12'],
      heartCount: heartCounts['heart-12'],
    },
    {
      id: 'blog-13',
      heartId: 'heart-13',
      linkTo: '/Image-10',
      imgSrc: A13,
      title: "Feeling the Love 🥰",
      text: "Thank you to all of our amazing fans for showing us so much love and support! We couldn't do this without you ❤️ #KpopLove #FanArmy",
      date: 'April 14 2023',
      author: 'MLS',
      commentLink: '/comment12',
      commentCount: commentCounts['blog-13'],
      heartCount: heartCounts['heart-13'],
    },
    {
      id: 'blog-14',
      heartId: 'heart-14',
      linkTo: '/Image-11',
      imgSrc: A14,
      title: "My favorite childhood memory 🧸💭",
      text: "One of my favorite childhood memories is when my mom surprised me with my first teddy bear! It was a big, fluffy bear that I immediately fell in love with. I used to take it everywhere with me, and even slept with it every night. It's amazing how something so simple can bring so much joy and comfort. What are some of your favorite childhood memories? 🌟🌈",
      date: 'May 24, 2023',
      author: 'Minoo from DARKPINK',
      commentLink: '/comment14',
      commentCount: commentCounts['blog-14'],
      heartCount: heartCounts['heart-14'],
    },
    {
      id: 'blog-15',
      heartId: 'heart-15',
      linkTo: '/Image-12',
      imgSrc: A15,
      title: "Trying new things in the studio 🎶💻",
      text: "Lately, I've been experimenting with some new sounds and styles in the studio and it's been so much fun! It's important to keep growing as an artist and challenging yourself creatively. I can't wait for you all to hear what I've been working on 🔥🎧",
      date: 'June 3, 2023',
      author: 'LN from MLS',
      commentLink: '/comment15',
      commentCount: commentCounts['blog-15'],
      heartCount: heartCounts['heart-15'],
    },
    {
      id: 'blog-16',
      heartId: 'heart-16',
      linkTo: '/Image-13',
      imgSrc: A16,
      title: "Feeling cute, might delete later 🤪",
      text: "Just feeling cute today! Hope everyone is having a good day 💜",
      date: 'June 22, 2023',
      author: 'Nisoo from DARKPINK',
      commentLink: '/comment16',
      commentCount: commentCounts['blog-16'],
      heartCount: heartCounts['heart-16'],
    },
    {
      id: 'blog-17',
      heartId: 'heart-17',
      linkTo: '/Image-14',
      imgSrc: A17,
      title: "New album coming soon 👀",
      text: "Can't wait for you all to hear our new album! Stay tuned 😎",
      date: 'August 8, 2023',
      author: 'LN from MLS',
      commentLink: '/comment17',
      commentCount: commentCounts['blog-17'],
      heartCount: heartCounts['heart-17'],
    },
    {
      id: 'blog-18',
      heartId: 'heart-18',
      linkTo: '/Image-15',
      imgSrc: A18,
      title: "Back at rehearsals 💪🏼",
      text: "Practicing hard for our upcoming tour! Can't wait to see all of our fans 😘",
      date: 'September 1, 2023',
      author: 'Raymond from...',
      commentLink: '/comment8',
      commentCount: commentCounts['blog-18'],
      heartCount: heartCounts['heart-18'],
    },
    {
      id: 'blog-19',
      heartId: 'heart-19',
      linkTo: '/Image-16',
      imgSrc: A19,
      title: "Trying out a new hairstyle 🤔",
      text: "Decided to change things up with a new hairstyle! What do you all think? 😊",
      date: 'October 13, 2023',
      author: 'Nelson Lang from...',
      commentLink: '/comment19',
      commentCount: commentCounts['blog-19'],
      heartCount: heartCounts['heart-19'],
    },
    {
      id: 'blog-20',
      heartId: 'heart-20',
      linkTo: '/Image-17',
      imgSrc: A20,
      title: "Treat yourself today 🍦",
      text: "Life's too short, so why not treat yourself to some ice cream today? 😜",
      date: 'November 3, 2023',
      author: 'Mandy from Blue...',
      commentLink: '/comment20',
      commentCount: commentCounts['blog-20'],
      heartCount: heartCounts['heart-20'],
    },
  ];
  const [showFavorites, setShowFavorites] = useState(false);
 

 

  const filteredItems = showFavorites
  ? items.filter((item) => heartStates[item.heartId])
  : items;


  return (
    
    <div className='content'>
      <div>
      <button className={`flex button1 ${showFavorites ? 'white-bg' : 'blue-bg'}`} onClick={() => setShowFavorites(false)}>All Post</button>
      <button className={`flex button2 ${showFavorites ? 'blue-bg' : 'white-bg'}`} onClick={() => setShowFavorites(true)}>Favourites</button>
      </div>
      <button className='button-hide'></button>
      <Link to='/addPost'>
    <button className='flex button3'>Add Post</button>
    </Link>
    <div className='mobile-button'>
    <button className={`flex mbutton1 ${showFavorites ? 'white-bg' : 'blue-bg'}`} onClick={() => setShowFavorites(false)}>All Post</button>
      <button className={`flex mbutton2 ${showFavorites ? 'blue-bg' : 'white-bg'}`} onClick={() => setShowFavorites(true)}>Favourites</button>
      <Link to='/addPost'>
    <button className='flex mbutton3'>+</button>
    </Link>
    </div>
    
    {filteredItems.map((item) => (
      console.log("item.heartId:", item.heartId),
      console.log("heartStates:", heartStates),
      <section key={item.id} className={`blog-1 ${showFavorites ? 'filtered-favorites' : 'all-items'}`}>
        <Link to={item.linkTo}>
          <img className='pic' src={item.imgSrc} alt="larawan" />
        </Link>
        <article>
          <div>
            <h3 className='limit-text'>{item.title}</h3>
            <p className='text'>{item.text}</p>
            <span className='gray-line'></span>
            <footer className='flex'>
              <div className='footerDiv'>
                <p className='footer-p'>{item.date}</p>
                <p className='footer-p'>-</p>
                <p className='footer-p'>{item.author}</p>
                <Link to={item.commentLink}>
                  <svg className='comment' id={item.id} stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path></svg>
                </Link>
                <p className='comment-count'>{item.commentCount}</p>
                <svg
                  className={heart(item.heartId)}
                  id={item.heartId}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  onClick={() => toggleHeart(item.heartId)}
                  xmlns="http://www.w3.org/2000/svg">
                  <path fillrule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                </svg>
                <p className='heart-count-1'>{item.heartCount}</p>
              </div>
            </footer>
          </div>
        </article>
      </section>
    ))}
  </div>

  
);
}

export default Logo;
