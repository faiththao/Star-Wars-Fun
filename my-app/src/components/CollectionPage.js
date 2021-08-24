import { useState } from "react";
import CreateCollection from "./CreateCollection";
import DefaultCollection from "./DefaultCollection";

export default function CollectionPage({ characters, setCharacters }) {
    const [characterCollection, setCharacterCollection] = useState([...characters]);

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
    // function handleAddCharacter(uid) {
    //     setCharacters(
    //         characters.map(character => (character.uid === uid ? {...character, added: true } : character))
    //     )
    // }

    // function handleRemoveCharacter(uid) {
    //     setCharacters(
    //         characters.map(character => (character.uid === uid ? {...character, added: false } : character))
    //     )
    // }

    return (
        <div>
            <CreateCollection 
            // collection={characterCollection}
            collection={characterCollection}
            onRemove={handleRemoveCharacter} />
            <DefaultCollection 
            characters={characters} 
            onAdd={handleAddCharacter} />
        </div>
    )
}