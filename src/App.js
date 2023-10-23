import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Logo from './pages/Logo';
import Comment from './pages/Comment';
import Comment01 from './pages/Comment01';
import Comment02 from './pages/Comment02';
import Comment03 from './pages/Comment03';
import Comment04 from './pages/Comment04';
import Comment05 from './pages/Comment05';
import Comment06 from './pages/Comment06';
import Comment07 from './pages/Comment07';
import Comment08 from './pages/Comment08';
import Comment09 from './pages/Comment09';
import Comment10 from './pages/Comment10';
import Comment11 from './pages/Comment11';
import Comment12 from './pages/Comment12';
import Comment13 from './pages/Comment13';
import Comment14 from './pages/Comment14';
import Comment15 from './pages/Comment15';
import Comment16 from './pages/Comment16';
import Comment17 from './pages/Comment17';
import Comment18 from './pages/Comment18';
import Comment19 from './pages/Comment19';
import AddPost from './pages/AddPost';
import './App.css';
import { CommentProvider } from './Components/CommentContext';
import { HeartProvider } from './Components/HeartContext'


const router = createBrowserRouter(
  createRoutesFromElements(

    
    
      <Route path="/" element={<RootLayout />}>  
        <Route index element={<Logo  />} />
              <Route path="image-8" element={<Comment />} />
              <Route path="comment" element={<Comment />} />
              <Route path="image01" element={<Comment01 />} />
              <Route path="comment01" element={<Comment01 />} />
              <Route path="0_2" element={<Comment02 />} />
              <Route path="comment02" element={<Comment02 />} />   
              <Route path="0_3" element={<Comment03 />} />
              <Route path="comment03" element={<Comment03 />} /> 
              <Route path="image-3" element={<Comment04 />} />
              <Route path="comment04" element={<Comment04 />} /> 
              <Route path="image-6" element={<Comment05 />} />
              <Route path="comment05" element={<Comment05 />} />
              <Route path="image-1" element={<Comment06 />} />
              <Route path="comment06" element={<Comment06 />} />
              <Route path="image-2" element={<Comment07 />} />
              <Route path="comment08" element={<Comment07 />} />
              <Route path="image-4" element={<Comment08 />} />
              <Route path="comment09" element={<Comment08 />} />
              <Route path="image-5" element={<Comment09 />} />
              <Route path="comment10" element={<Comment09 />} />
              <Route path="image-7" element={<Comment10 />} />
              <Route path="comment11" element={<Comment10 />} />
              <Route path="image-9" element={<Comment11 />} />
              <Route path="comment12" element={<Comment11 />} />
              <Route path="image-10" element={<Comment12 />} />
              <Route path="comment13" element={<Comment12 />} />
              <Route path="Image-11" element={<Comment13 />} />
              <Route path="comment14" element={<Comment13 />} />
              <Route path="Image-12" element={<Comment14 />} />
              <Route path="comment15" element={<Comment14 />} />
              <Route path="Image-13" element={<Comment15 />} />
              <Route path="comment16" element={<Comment15 />} />
              <Route path="Image-14" element={<Comment16 />} />
              <Route path="comment17" element={<Comment16 />} />
              <Route path="Image-15" element={<Comment17 />} />
              <Route path="comment18" element={<Comment17 />} />
              <Route path="Image-16" element={<Comment18 />} />
              <Route path="comment19" element={<Comment18 />} />
              <Route path="Image-17" element={<Comment19 />} />
              <Route path="comment20" element={<Comment19 />} />
              <Route path="addPost" element={<AddPost />} />


              
          
            
      </Route>

             
   
  )
);

function App() {

  
  return (
    <HeartProvider>
    <CommentProvider> 
      <RouterProvider router={router} /> 
    </CommentProvider>
    </HeartProvider>
  );
}

export default App;