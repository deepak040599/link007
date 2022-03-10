import React, {  useState } from 'react'
import './Feed.css'
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import InputOption from './InputOption';
import PhotoSharpIcon from '@mui/icons-material/PhotoSharp';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Post from './Post';
// import {db} from './firebase';
// import {firebase} from "./firebase";
// import firebase from 'firebase/compat';
// import firebase from "firebase/app";
// import firebase from './firebase';
// import Firebase from './firebase';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { AiFillBank,AiFillLinkedin,AiFillMacCommand ,AiFillWindows,AiFillSlackSquare} from "react-icons/ai";

function Feed() {
  const [input,setInput]=useState('');
//   const [posts,setPosts] = useState([]);
  
//  useEffect(() => {
//    db.collection("posts").onSnapshot(snapShot =>(
//        setPosts(snapShot.docs.map((doc)=>(
//             {
//                 id:doc.id,
//                 data:doc.data(),
//             }
//        )))
//    ))
//  }, [])
 

 const sendPost = e => {
     e.preventDefault();
    //  db.collection('posts').add({
    //      name:'Deepak Suthar',
    //      description:'it is a test',
    //      message:input,
    //      photoUrl:'',
    //      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    //  })
 }




  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateSharpIcon/>
                <form action="">
                    <input value={input}  onChange={e=>setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
        </div>
        <div className="feed_inputOptions">
            <InputOption Icon={PhotoSharpIcon} title='Photo' color='#7085f9'/>
            <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e'/>
            <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd'/>
            <InputOption Icon={ReviewsIcon} title='Write Review' color='#7fc15e'/>
        </div>

        {/* post */}
        {/* {posts.map(({id,data:{name,description,message,photoUrl}})=>{
            <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
        })} */}
        <Post name='Abhishek' description='senior drupal dev' message= 'deepak is a very active learner and curious to do his first internship' Icon={<AiFillSlackSquare/>}/>
        <Post name='Deepak' description='reactjs dev' message= 'he is very proficience in english communication and having a skill of adept in everthing  ' Icon={<AiFillBank/>} />
        <Post name='Aayush' description='mern stack dev' message= 'Deepak is very good in mern stack and aspire to do his first internship . i am doing work with him' Icon={<AiFillLinkedin/>}/>
        <Post name='Shantnu' description='cloud dev' message= 'Deepak is wishing to learn cloud but i tell him first do and complete internship and take first jobs'Icon={<AiFillBank/>}/>
        <Post name='Maya' description='system engineer' message= 'Deepak is working in full tym job and i see her inclination toward tech was mind blowing 'Icon={<AiFillMacCommand/>}/>
        <Post name='grecy' description='Blockchain dev' message= 'i am touch with deepa ]k through linkedin so anyone can provide first internship'Icon={<FaBeer/>}/>
        <Post name='tushar' description='ml learner' message= 'i am met with deepak in last tym in college.he has good capacity on capturing things'Icon={<AiFillWindows/>}/>
    </div>
  )
}

export default Feed