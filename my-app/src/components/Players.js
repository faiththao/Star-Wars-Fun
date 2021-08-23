import PlayersCard from "./PlayersCard"

export default function Players({ characters }) {
    const characterInfo = characters.map((character) => (
        <PlayersCard key={character.uid} character={character} />
    ))
    return (
        <>
        <h1>Player Cards</h1>
        {characterInfo}
        </>
    )
}