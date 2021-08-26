import { useState } from "react"

export default function ({ character, addComment }) {
    const {id, url, name} = character
    const [comment, setComment] = useState('');


    function handleComment(e) {
        e.prevent.default()
        addComment()
    }

    return (
        <div className="RenderCard" onSubmit={handleComment}>
            <img src={url} alt={name} className="img" />
            <h2>Name: {name}</h2>
            <form >
                {comment}
                <br />
                <input 
                type="text" 
                name="comment" 
                placeholder="Add comment..." 
                value={comment}
                onChange={(e) => setComment(e.target.value)} 
                />
                <input
                type="submit"
                name="submit"
                value="Post"
                className="Post"
                />
            </form>
        </div>
    )
}