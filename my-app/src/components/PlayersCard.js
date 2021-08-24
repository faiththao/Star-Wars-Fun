// import Button from "@material-ui/core/Button"
// import ButtonGroup from "@material-ui/core/ButtonGroup"

// import AddIcon from "@material-ui/icons/Add"
// import DeleteIcon from "@material-ui/icons/DeleteOutline"


export default function PlayerCard({ character, onClick }) {
    const { name, url, uid } = character

    function handleClick() {
        onClick(character)
    }

    return (
        <div className="PlayerCard">
            <div 
            key={uid}
            onClick={() => handleClick()}>
                <img src={url} alt={name} className="img" />
                <h2>Name: {name}</h2>
                {/* <ButtonGroup variant="contained" > */}
                    {/* <Button
                        // startIcon={<AddIcon />}
                        color="primary">
                        Save
                    </Button>

                    <Button
                        // endIcon={<DeleteIcon />}
                        color="secondary">
                        Delete
                    </Button> */}
                {/* </ButtonGroup> */}
            </div>
        </div>
    )
}