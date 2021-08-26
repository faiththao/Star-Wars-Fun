import { useState } from "react"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function PlayerForm({ addCharacter }) {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        const newCharacter = {
            name,
            url,
        };

        addCharacter(newCharacter)
        setUrl('')
        setName('')

    }

    return (
        <div className="container">
            <form className="character-form" onSubmit={onSubmit}>
                <h2>Create Character to Put in Default Collection</h2>
                <TextField
                    variant="outlined"
                    color="primary"
                    type="text"
                    name="name"
                    placeholder="Character name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <TextField
                    size="large"
                    variant="outlined"
                    color="primary"
                    type="text"
                    name="image"
                    placeholder="Enter an image URL..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <br />
                <Button
                    variant="outlined"
                    type="submit"
                    name="submit"
                    color="secondary"
                    value="Create Character"
                    className="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}