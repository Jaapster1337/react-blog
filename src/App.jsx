import './App.css'

import {HomePage} from './pages/HomePage/HomePage.jsx';
import {NewPost} from './pages/NewPost/NewPost.jsx';
import {Summary} from './pages/Summary/Summary.jsx';
import {NotFound} from './pages/NotFound/NotFound.jsx';
import {Nav} from "./pages/Nav/Nav.jsx";
import {DetailPage} from "./pages/DetailPage/DetailPage.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Nav/>
            <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/summary" element={<Summary/>}/>
                    <Route path="/newPost" element={<NewPost/>}/>
                    <Route path="/notFound" element={<NotFound/>}/>
                    <Route path="/detailPage/:id" element={<DetailPage/>}/>
            </Routes>
        </>
    )
}

export default App
