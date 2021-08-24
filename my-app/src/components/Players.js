import RenderCard from "./RenderCard"

export default function Players({ characters }) {
    const characterInfo = characters.map((character) => (
        <RenderCard key={character.uid} character={character} />
    ))
    return (
        <div>
            <collection className='newContainer'>
                <h1>Character Cards</h1>
                {characterInfo}
            </collection>
        </div>
    )
}