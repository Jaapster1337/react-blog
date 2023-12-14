import React, {useState} from "react";
import './NewPost.css'


export function NewPost() {
    const [formState, setFormState] = useState({
        title: "",
        subtitle: "",
        author: "",
        content: "",
    })

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            changedFieldName,
        });
    }

    function submitForm(e) {
        e.preventDefault()
        console.log(formState)
    }

    return (
        <>
            <section className="outer-container">
                <div className="form-container">
                    <form className="form" onSubmit="submitForm">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" required="true" onChange={handleChange}/>
                        <label htmlFor="subtitle">Subtitle</label>
                        <input type="text" name="subtitle" id="subtitle" required="true" onChange={handleChange}/>
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" id="author" required="true" onChange={handleChange}/>
                        <label htmlFor="content">Content</label>
                        <textarea name="content" id="content" rows="10" cols="33" minLength="300" maxLength="2000"
                                  placeholder="content of the blog" required="true" onChange={handleChange}/>
                        <button type="submit" onSubmit={submitForm}>Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}