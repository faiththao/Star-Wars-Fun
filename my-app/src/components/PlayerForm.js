import { useState } from "react"

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
                Character Name:
                <input
                    type="text"
                    name="name"
                    placeholder="Character name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                Image URL:
                <input
                    type="text"
                    name="image"
                    placeholder="Enter a character's image URL..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)} 
                />
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="Create Character"
                    className="submit"
                />
            </form>
        </div>
    )
}