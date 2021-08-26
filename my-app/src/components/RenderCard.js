import { useState } from "react"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Save from "@material-ui/icons/Save";
import { withStyles } from "@material-ui/core";

export default function ({ character }) {
    const { uid, url, name } = character
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
            <h6>Name: {name}</h6>
            {/* <br /> */}
            <p>
                {comment}
            </p>
            <form >

                <TextField
                    variant="outlined"
                    className="commentInput"
                    type="text"
                    label="Add comment..."
                    color="secondary"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />

                {/* <input
                type="text" 
                name="comment" 
                placeholder="Add comment..." 
                value={comment}
                onChange={(e) => setComment(e.target.value)} 
                /> */}

                <Button
                    startIcon={<Save />}
                    variant="contained"
                    color="primary"
                    type="submit"
                    name="submit"
                    value="Post"
                >
                    Post
                </Button>

                {/* <input
                type="submit"
                name="submit"
                value="Post"
                className="Post"
                /> */}
            </form>
        </div>
    )
}