import { useState } from 'react'

import PlayersCard from './PlayersCard';


export default function CreateCollection({ collection, onRemove }) {
    const [title, setTitle] = useState('');


    const characterData = collection.map((character) => (
        <PlayersCard
            key={character.id}
            character={character}
            onClick={onRemove}
        // onClick={console.log(character)}
        />
    ))
    
    function onSubmit(e) {
        e.prevent.default();
        setTitle = ''
    }

    return (
        <div className="newCollection" onSubmit={onSubmit}>

            <h1>Create a New Character Collection!</h1>
            Collection Name:
            <input
                type="text"
                name="title"
                placeholder="Name your collection"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="submit"
                name="submit"
                value="Name Collection"
                className="submit"
            />
            <div className="newContainer">
                <div className="row">
                    {title}
                    {characterData}
                </div>
            </div>

        </div>)
}