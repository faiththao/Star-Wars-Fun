export default function PlayerCard({ character, onClick }) {
    const { name, url } = character

    function handleClick() {
        onClick(character)
    }

    return (
        <div className="PlayerCard">
            <div 
            key={character.uid}
            onClick={handleClick}>
                <img src={url} alt={name} className="img" />
                <h2>Name: {name}</h2>
            </div>
        </div>
    )
}