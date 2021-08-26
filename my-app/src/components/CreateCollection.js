import { useState } from 'react'

import PlayerForm from "./PlayerForm";
import PlayersCard from './PlayersCard';


export default function CreateCollection({ collection, onRemove }) {
    const [title, setTitle] = useState(''); 

    console.log(onRemove)

    const characterData = collection.map((character) => (
        <PlayersCard
            key={character.id}
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
                {title}
                {characterData}
            </div>
            
        </div>)
}