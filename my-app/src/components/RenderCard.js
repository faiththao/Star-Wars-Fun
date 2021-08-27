import { useState } from "react"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Save from "@material-ui/icons/Save";
import { withStyles } from "@material-ui/core";


export default function ({ character }) {

    const { id, url, name } = character

    const [comment, setComment] = useState('');
    const [inCommentBox, setInCommentBox] = useState([]);
    // const commentList = [];
    


    function handleComment(e) {
        e.preventDefault();
        
        setInCommentBox(comment)
    }
    

    return (
        <div className="RenderCard" key={id} >
            <img src={url} alt={name} className="img" />
            <h6 className="name">Name: {name}</h6>
            {/* <br /> */}
            <p>{inCommentBox}</p>
            <form onSubmit={handleComment} className="commentForm">

                <TextField
                    variant="outlined"
                    className="commentInput"
                    type="text"
                    label="Add comment..."
                    // placeholder="Add Comment..."
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