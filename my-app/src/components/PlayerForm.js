import { useState } from "react"

export default function PlayerForm({addCharacter}) {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    // const [formData, setFormData] = useState({
    //     name: "",
    //     url: "",
    //   });

    //   function handleChange(event) {
    //     setFormData({
    //       ...formData,
    //       [event.target.name]: event.target.value,
    //     });
    //   }

    //   function handleSubmit(event) {
    //     event.preventDefault();
    
    //     const newCharacter = {
    //       ...formData
    //     };

    //     fetch("http://localhost:3001/results", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newCharacter),
    //         })
    //         .then((r) => r.json())
    //         .then(addCharacter);
    //     }
    function onSubmit(e) {
        e.preventDefault();

        const newCharacter = {
            name,
            url,
            uid: Math.random(),
        };

        addCharacter(newCharacter)
        // setUrl('')
        // setName('')

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