import { useState } from "react"

export default function ({ character }) {
    const {id, url, name} = character
    const [comment, setComment] = useState('');

    // function addComment(comment, uid) {
    //     fetch(`http://localhost:3001/results/${uid}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(comment),
    //     })
    //         .then((res) => res.json())
    //         .then((json) => console.log(json));
    //   }

    function handleComment(e) {
        e.prevent.default()
        // addComment()
    }

    return (
        <div className="RenderCard" onSubmit={handleComment}>
            <img src={url} alt={name} className="img" />
            <h2>Name: {name}</h2>
            <br />
            <p>
                {comment}
            </p>
            <form >
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