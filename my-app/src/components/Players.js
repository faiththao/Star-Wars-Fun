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
                <h1>Character Cards</h1>
                {characterInfo}
            </div>
        </div>
    )
}