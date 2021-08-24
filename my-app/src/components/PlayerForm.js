import { useState } from "react"

export default function PlayerForm() {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        const newCharacter = {
            name,
            image,
        };

    }

    return (
        <div className="container">
            <form className="character-form" onSubmit={onSubmit}>
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
                    value={image}
                    onChange={(e) => setImage(e.target.value)} 
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