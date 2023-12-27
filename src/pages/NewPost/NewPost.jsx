import React, {useState} from "react";
import './NewPost.css'
import {calcReadTime} from '../../helpers/calcReadTime.jsx'
import axios from "axios";
import {Link, NavLink, redirect, useNavigate} from "react-router-dom";



export function NewPost({blogState, error, setError}) {
    let posted = false;
    const [succesState, setSuccesState] = useState(false)
    const [formState, setFormState] = useState({
        title: "",
        subtitle: "",
        author: "",
        content: "",
        created: "",
        readTime: "",
        comments: 0,
        shares: 0,
    })

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.value;
        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    async function submitForm(e) {
        e.preventDefault()
        formState.readTime = calcReadTime(formState.content)
        const date = new Date()
        formState.created = date.toISOString()
        try{
            const response = await axios.post('http://localhost:3000/posts',
                {
                    "title": formState.title,
                    "subtitle": formState.subtitle,
                    "content": formState.content,
                    "author": formState.author,
                    "created": formState.created,
                    "readTime": formState.readTime,
                    "comments": formState.comments,
                    "shares": formState.shares,
                })
            setSuccesState(true)
        } catch (e){
            console.error(e)
        }
    }

    return (
        <>
            {(succesState === true) &&
                <div className="succesful-submit-message">
                    <p>De blogpost is succesvol toegevoegd. Je kunt deze hier <NavLink to={`/DetailPage/${Object.keys(blogState).length}`}>link</NavLink> bekijken.</p>
                </div>}
            <section className="outer-container">
                <div className="form-container">
                    <form className="form">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" required={true} onChange={handleChange}/>
                        <label htmlFor="subtitle">Subtitle</label>
                        <input type="text" name="subtitle" id="subtitle" required={true} onChange={handleChange}/>
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" id="author" required={true} onChange={handleChange}/>
                        <label htmlFor="content">Content</label>
                        <textarea name="content" id="content" rows="10" cols="33" minLength="300" maxLength="2000"
                                  placeholder="content of the blog" required={true} onChange={handleChange}/>
                        <button type="submit" onClick={submitForm}>Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}