import PlayersCard from "./PlayersCard"
import { useState } from "react";
import MoreButton from "./MoreButton";

export default function DefaultCollection({ characters, onAdd }) {
    const [index, setIndex] = useState(0);

    const characterInfo = characters
    .slice(index, index + 3)
    .map((character) => (
        <PlayersCard
            key={character.uid}
            character={character}
            onClick={onAdd}
        />
    ))

    function handleClickMore() {
        setIndex((index) => (index + 3) % characters.length)
    }

    return (
        <div>
            <div className="PlayerContainer">
                <h3>Default Collection</h3>
                <div>
                    {characterInfo}
                    <MoreButton onClickMore={handleClickMore}/>
                </div>
            </div>
        </div>
    )
}