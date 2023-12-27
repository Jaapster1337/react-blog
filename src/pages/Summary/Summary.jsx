import './Summary.css'
import {Link} from "react-router-dom";

export function Summary({blogState}) {

    return (
        <>
            <h1>Dit is de overzichtspagina</h1>
            <p>Er zijn in totaal {blogState.length} posts</p>

            {Object.keys(blogState).length > 0 &&
                blogState?.map((blogState) => {
                return (
                    <section className="post-wrapper" key={blogState.id}>
                        <div className="truncated-post" >
                            <p><Link to={`/DetailPage/${blogState.id}`}> {blogState.title} ({blogState.author})</Link></p>
                            <p>{blogState["comments"]} reacties - {blogState["shares"]} keer gedeeld</p>
                        </div>
                    </section>
                );
            })}
        </>
    )
}
