import { useState } from "react";
import CreateCollection from "./CreateCollection";
import DefaultCollection from "./DefaultCollection";

export default function CollectionPage({ characters, setCharacters, addCharacter }) {
    // const [characterCollection, setCharacterCollection] = useState([...characters]);

    const [characterCollection, setCharacterCollection] = useState([])

    function handleAddCharacter(characterToAdd) {
        const inCollection = characterCollection.find(
            character => character.id === characterToAdd.id
        );
        if (!inCollection) {
            setCharacterCollection([...characterCollection, characterToAdd])
        }
    }

    function handleRemoveCharacter(characterToRemove) {
    setCharacterCollection((characterCollection) =>
        characterCollection.filter((character) =>
            character.id !== characterToRemove.uid))
    }

return (
    <div>
        <CreateCollection
            //
            collectionSetter={setCharacterCollection}
            characters={characters}
            //
            collection={characterCollection}
            onRemove={handleRemoveCharacter} />
        <DefaultCollection
            characters={characters}
            setCharacters={setCharacters}
            onAdd={handleAddCharacter} 
            addCharacter={addCharacter} />
    </div>
)
}