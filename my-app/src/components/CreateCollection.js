import { useState } from 'react'

import PlayerForm from "./PlayerForm";
import PlayersCard from './PlayersCard';


export default function CreateCollection({ characters, collection, onRemove }) {

    const [collectionArray, setCollectionArray] = useState([...collection])
    const [title, setTitle] = useState('');


    function addCreatedCharacter(newCharacter) {
        setCollectionArray([...collectionArray, newCharacter])

        console.log(collectionArray)
    }

    // const characterList = characters.map((character) => (
    //     <PlayersCard
    //         key={character.uid}
    //         character={character}
    //          />
    // ))

    const characterInfo = collectionArray.map((character) => (
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
                {characterInfo}
            </div>
            <PlayerForm addCharacter={addCreatedCharacter} />
        </div>)
}