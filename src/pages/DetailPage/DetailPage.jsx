import {NavLink, useParams} from "react-router-dom";
import {dateFormat} from "../../helpers/dateFormat.jsx";

export function DetailPage({blogState, error, setError}) {
    const {id} = useParams();

    return (
        <>
            {Object.keys(blogState).length > 0 &&
            <div className="content">
                <h1>{blogState[id].title}({blogState[id].readTime} minuten)</h1>
                <h3>{blogState[id].subtitle}</h3>
                <p>Geschreven door {blogState[id].author} op {dateFormat(blogState[id].created)}</p>
                <p>{blogState[id].content}</p>
                <p>{blogState[id].comments} reacties - {blogState[id].shares} keer gedeeld</p>
                <p>Terug naar <NavLink to="/summary">overzicht</NavLink></p>
            </div>}
            {Object.keys(blogState).length = 0 &&
            <div className="warning">
                {setError("Data ophalen mislukt")}
                <p>{serror}</p>
            </div>
            }
        </>
    );
}

