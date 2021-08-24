import {useState} from 'react'

import PlayerForm from "./PlayerForm";
import PlayersCard from "./PlayersCard";

export default function CreateCollection({ collection }) {

    const [collectionArray, setCollectionArray] = useState([...collection])
    
    function addCreatedCharacter(newCharacter) {
        
        setCollectionArray([...collectionArray, newCharacter])

        console.log(collectionArray)
    }

    const characterInfo = collectionArray.map((character) => (
        <PlayersCard
            key={character.uid}
            character={character}
        // onClick={onAddCharacter}
        />
    ))
    return (
        <div>
            <h1>Create a New Character Collection!</h1>
            Collection Name:
            <input
                type="text"
                name="title"
                placeholder="Name your collection"
            />
            <PlayerForm addCharacter={addCreatedCharacter}/>
            <collection className="container">
                <h3>Default Collection</h3>
                <div>
                    {characterInfo}
                </div>
            </collection>
        </div>)
}