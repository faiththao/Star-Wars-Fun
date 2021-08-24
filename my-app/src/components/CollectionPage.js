import { useState } from "react";
import CreateCollection from "./CreateCollection";
import DefaultCollection from "./DefaultCollection";

export default function CollectionPage({ characters }) {
    const [characterCollection, setCharacterCollection] = useState([]);

    function handleAddCharacter(characterToAdd) {
        const inCollection = characterCollection.find(
            character => character.uid === characterToAdd.uid
        );
        if (!inCollection) {
            setCharacterCollection([...characterCollection, characterToAdd])
        }
    }

    function handleRemoveCharacter(characterToRemove) {
        setCharacterCollection((characterCollection) => 
        characterCollection.filter((character) => 
        character.uid !== characterToRemove.uid))
    }

    return (
        <div>
            <CreateCollection 
            characters={characters}
            collection={characterCollection}
            onRemove={handleRemoveCharacter} />
            <DefaultCollection 
            characters={characters} 
            onAdd={handleAddCharacter} />
        </div>
    )
}