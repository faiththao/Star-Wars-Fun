import RenderCard from "./RenderCard"

export default function Players({ characters, addComment, inCommentBox }) {
    const characterInfo = characters.map((character) => (
        <RenderCard key={character.id} character={character} 
        addComment={addComment} 
        inCommentBox={inCommentBox}
        />
    ))
    return (
        <div>
            <div className='PlayerContainer'>
                <h1>Character Cards
                    <img className="lightsaber"
                    src="https://www.seekpng.com/png/full/301-3019753_star-wars-would-you-want-snoke-to-own.png" alt="lightsaber" />
                </h1>
                {characterInfo}
            </div>
        </div>
    )
}