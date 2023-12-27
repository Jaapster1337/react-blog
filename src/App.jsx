import './App.css'

import {HomePage} from './pages/HomePage/HomePage.jsx';
import {NewPost} from './pages/NewPost/NewPost.jsx';
import {Summary} from './pages/Summary/Summary.jsx';
import {NotFound} from './pages/NotFound/NotFound.jsx';
import {Nav} from "./pages/Nav/Nav.jsx";
import {DetailPage} from "./pages/DetailPage/DetailPage.jsx";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";



function App() {
    const [error, setError] = useState('');
    const [blogs , setblogs] = useState({})

    useEffect(() =>{
        async function fetchData() {
            setError('');
            try {
                const {data} = await axios.get('http://localhost:3000/posts');
                setblogs(data);
            } catch (e) {
                setError("Data ophalen mislukt")
            }
        }
        fetchData();
},[])



    async function PostBlog(){
        try {
            const response = await axios.post('http://localhost:3000/posts',
       {
           "title": "Wat gebruiker heeft ingevuld",
           "subtitle": "Wat gebruiker heeft ingevuld",
           "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
           "author": "Voornaam achternaam",
           "created": "2023-09-21T09:30:00Z",
           "readTime": 1,
           "comments": 0,
           "shares": 0,
            })
            console.log(response)
        } catch (e){
            console.error(e)
        }
    }

    function LogData(){
        console.log(blogs)
    }

        return (
            <>
                <Nav/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/summary" element={<Summary blogState={blogs} error={error} setError={setError}/>}/>
                    <Route path="/newPost" element={<NewPost blogState={blogs} error={error} setError={setError}/>}/>
                    <Route path="/notFound" element={<NotFound/>}/>
                    <Route path="/detailPage/:id" element={<DetailPage blogState={blogs} error={error} setError={setError}/>}/>
                </Routes>
                <button type="button" >Fetch</button>
                <button type="button" >Log</button>
                <button type="button" onClick={PostBlog}>post</button>
            </>
        )
}
export default App;
