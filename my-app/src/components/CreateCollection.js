import { useState } from 'react'

import PlayerForm from "./PlayerForm";
import PlayersCard from './PlayersCard';


export default function CreateCollection({ collection, onRemove, collectionSetter }) {

    const [title, setTitle] = useState('');

    function addCreatedCharacter(newCharacter) {
        collectionSetter([...collection, newCharacter])
    }

    const characterData = collection.map((character) => (
        <PlayersCard
            key={character.uid}
            character={character}
            onClick={onRemove}
        />
    ))

    return (
        <div className="newCollection">
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
                {characterData}
            </div>
            <PlayerForm addCharacter={addCreatedCharacter} />
        </div>)
}