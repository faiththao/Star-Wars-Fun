import { useState } from 'react'

import PlayersCard from './PlayersCard';

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default function CreateCollection({ collection, onRemove }) {
    const [title, setTitle] = useState(''); 

    console.log(onRemove)

    const characterData = collection.map((character) => (
        <PlayersCard
            key={character.id}
            character={character}
            onClick={onRemove}
        // onClick={console.log(character)}
        />
    ))
    
    function onSubmit(e) {
        e.prevent.default();
        setTitle = ''
    }

    return (
        <div className="newCollection" onSubmit={onSubmit}>

            <h1>Create a New Character Collection!</h1>
            <TextField
                variant="standard"
                color="secondary"
                type="text"
                name="title"
                placeholder="Enter collection name"
                //label="Name your collection"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                name="submit"
                value="Name Collection"
                className="submit">
                    Name Collection
                </Button>
            <div className="newContainer">
                <div className="row">
                    {title}
                    {characterData}
                </div>
            </div>

        </div>)
}