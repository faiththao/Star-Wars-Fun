import { useState } from 'react'

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import PlayersCard from './PlayersCard';


export default function CreateCollection({ collection, onRemove }) {
    const [title, setTitle] = useState(''); 

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

            <h1>Create a New Character Collection! 
                <img className="bluelightsaber"
                src="https://www.vippng.com/png/full/5-52474_lightsaber-blade-png-light-saber-transparent-background.png" alt="lightsaber"/>
            </h1>
            <TextField
                variant="outlined"
                type="text"
                name="title"
                placeholder="Enter collection name..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button
            variant="outlined"
                color="secondary"
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