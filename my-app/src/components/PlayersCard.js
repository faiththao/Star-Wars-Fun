import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

import AddIcon from "@material-ui/icons/Add"
import DeleteIcon from "@material-ui/icons/DeleteOutline"

import { blue, red } from "@material-ui/core/colors"

import { makeStyles } from "@material-ui/core/styles"



const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, blue, red)',
        border: 5,
        borderRadius: 15,
        marginBottom: 15,
        color: 'white',
        padding: '5px 30px'
    }
})




export default function PlayerCard({ character, onClick }) {
    const { name, url, id } = character

    function handleClick(e) {
        onClick(character)
    }

    function StyledButton() {
        const classes = useStyles();
        return <Button className={classes.root} onClick={() => handleClick()}>Add/Remove</Button>
    }

    return (
        <div className="PlayerCard">
            <div
                key={id}
                >
                <img src={url} alt={name} className="img" />
                <h5>Name: {name}</h5>

                <StyledButton />

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