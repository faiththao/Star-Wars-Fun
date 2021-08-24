import PlayersCard from "./PlayersCard"

export default function DefaultCollection({ characters, onAdd }) {
    const characterInfo = characters.map((character) => (
        <PlayersCard
            key={character.uid}
            character={character}
            onClick={onAdd}
        />
    ))
    return (
        <div>
            <collection className="container">
                <h3>Default Collection</h3>
                <div>
                    {characterInfo}
                </div>
            </collection>
        </div>
    )
}