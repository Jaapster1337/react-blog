import React, {useState} from "react";
import './NewPost.css'
import {calcReadTime} from '../../helpers/calcReadTime.jsx'



export function NewPost() {
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

    function submitForm(e) {
        e.preventDefault()
        formState.readTime = calcReadTime(formState.content)
        const date = new Date()
        formState.created = date.toISOString()
        console.log(formState)
    }

    return (
        <>
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