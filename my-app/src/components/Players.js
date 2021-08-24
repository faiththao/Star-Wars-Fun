import PlayersCard from "./PlayersCard"

export default function Players({ characters, onAddCharacter}) {
    const characterInfo = characters.map((character) => (
        <PlayersCard key={character.uid} character={character} onAddCharacter={onAddCharacter} />
    ))
    return (
        <>
        <h1>Character Cards</h1>
        {characterInfo}
        </>
    )
}