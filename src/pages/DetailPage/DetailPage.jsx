import {NavLink, useParams} from "react-router-dom";
import posts from './../../constants/data.json';
import {dateFormat} from "../../helpers/dateFormat.jsx";

export function DetailPage() {
    const {id} = useParams();
    const postArray = posts

    return (
        <>
            <div className="content">
                <h1>{postArray[id].title}({postArray[id].readTime} minuten)</h1>
                <h3>{postArray[id].subtitle}</h3>
                <p>Geschreven door {postArray[id].author} op {dateFormat(postArray[id].created)}</p>
                <p>{postArray[id].content}</p>
                <p>{postArray[id].comments} reacties - {postArray[id].shares} keer gedeeld</p>
                <p>Terug naar <NavLink to="/summary">overzicht</NavLink></p>
            </div>
        </>
    );
}

