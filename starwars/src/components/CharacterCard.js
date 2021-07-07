import React, { useEffect, useState } from "react"
import axios from "axios";
import { Card, Grid } from "semantic-ui-react"

function CharacterCard(props) {

    const [link, setlink] = useState([]);

    console.log(props.films)

    // const newData = props.films.forEach( data => {
    //     setlink(data)
    // })

    // useEffect(() => {
    //     axios
    //     .get(`${newData}`)
    //     .then(response => {
    //         console.log(response.data.title);
    //       })
    //   }, [newData]);


      return(
    <Grid.Column>
        <Card className='cards'>
            <Card.Content>
                <Card.Header>
                    {props.name}
                </Card.Header>
                <Card.Meta>
                    Height: {props.height}cm.
                </Card.Meta>
                <Card.Meta>
                    Hair Color: {props.hair}
                </Card.Meta>
                <Card.Meta>
                    Mass: {props.mass}kg.
                </Card.Meta>
                <Card.Description>
                    More Details: <a href={props.link}>{props.link}</a>
                </Card.Description>
                <Card.Description>
                    Films: {}
                </Card.Description>
            </Card.Content>
        </Card>
    </Grid.Column>
    )
}

export default CharacterCard