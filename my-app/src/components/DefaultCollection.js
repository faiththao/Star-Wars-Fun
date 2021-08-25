import PlayersCard from "./PlayersCard"
import { useState } from "react";
import MoreButton from "./MoreButton";
import PlayerForm from "./PlayerForm";

export default function DefaultCollection({ characters, onAdd, addCharacter }) {
    const [index, setIndex] = useState(0);

    const characterInfo = characters
        // .slice(index, index + 3)
        .map((character) => (
            <PlayersCard
                key={character.id}
                character={character}
                onClick={onAdd}
            />
        ))

    // function handleClickMore() {
    //     setIndex((index) => (index + 3) % characters.length)
    // }

    // function addCreatedCharacter(newCharacter) {
    //     setCharacters([...characters, newCharacter])
    // }


    return (
        <div>
            <div className="PlayerContainer">
                <PlayerForm 
                // addCharacter={addNewCharacter}
                addCharacter={addCharacter}
                />
                <h3>Default Collection</h3>
                <div>
                    {characterInfo}
                    {/* <MoreButton onClickMore={handleClickMore} /> */}
                </div>
            </div>
        </div>
    )
}