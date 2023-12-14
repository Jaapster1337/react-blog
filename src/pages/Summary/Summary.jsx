import posts from './../../constants/data.json';
import './Summary.css'
import {Link, NavLink} from "react-router-dom";

export function Summary() {
    let postArray = posts
    return (
        <>
            <h1>Dit is de overzichtspagina</h1>
            <p>Er zijn in totaal {posts.length} posts</p>

            {postArray = postArray.map((post) => {
                return (
                    <section className="post-wrapper">
                        <div className="truncated-post" key={post.id}>
                            <p><Link to={`/DetailPage/${post.id}`}> {post.title} ({post.author})</Link></p>
                            <p>{post["comments"]} reacties - {post["shares"]} keer gedeeld</p>
                        </div>
                    </section>
                );
            })}
        </>
    )
}