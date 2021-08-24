import PlayersCard from "./PlayersCard"

export default function Players({ characters, onAdd }) {
    const characterInfo = characters.map((character) => (
        <PlayersCard key={character.uid} character={character} onClick={onAdd} />
    ))
    return (
        <>
        <h1>Character Cards</h1>
        {characterInfo}
        </>
    )
}