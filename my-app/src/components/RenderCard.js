export default function ({ character }) {

    const {uid, url, name} = character

    return (
        <div className="RenderCard">
            <img src={url} alt={name} className="img" />
            <h2>Name: {name}</h2>
        </div>
    )
}