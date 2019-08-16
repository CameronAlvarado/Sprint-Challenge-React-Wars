import React, { useEffect, useState }  from "react";
import axios from "axios";
import CharacterCard from './CharacterCard'
import { Container, Grid } from "semantic-ui-react";

function Characters() {
    const [characterData, setcharacterData] = useState([]);

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
            setcharacterData(response.data.results);
            console.log(response.data.results);
          })
      }, []);

    return (
        <Container text>
            <Grid relaxed columns={2} divided="vertically">
                <Grid.Row padded="vertically" columns={2}>
                    {characterData.map(character => {
                        return (
                        <CharacterCard
                            className="cards"
                            name={character.name}
                            height={character.height}
                            hair={character.hair_color}
                            id={character.id}
                            mass={character.mass}
                            link={character.url}
                        />
                        );
                    })}
            </Grid.Row>
          </Grid>
        </Container>
 )
}

export default Characters;