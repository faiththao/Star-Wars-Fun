import { useState } from "react"

export default function ({ character }) {
    const {uid, url, name} = character
    const [comment, setComment] = useState('');

    return (
        <div className="RenderCard">
            <img src={url} alt={name} className="img" />
            <h2>Name: {name}</h2>
            <br />
            <form>
                <input 
                type="text" 
                name="comment" 
                placeholder="Add comment..." 
                value={comment}
                onChange={(e) => setComment(e.target.value)} />
            </form>
        </div>
    )
}