import PlayerForm from "./PlayerForm";
import PlayersCard from "./PlayersCard";

export default function CreateCollection({ characters, onAddCharacter }) {
    const characterInfo = characters.map((character) => (
        <PlayersCard
            key={character.uid}
            character={character}
            onClick={onAddCharacter} />
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
            <PlayerForm />
            <collection className="container">
                <h3>Default Collection</h3>
                <div>
                    {characterInfo}
                </div>
            </collection>
        </div>)
}