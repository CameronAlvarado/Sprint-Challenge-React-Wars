import React from "react"
import { Card, Grid } from "semantic-ui-react"

const CharacterCard = props => (

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
                    Hair: {props.hair}
                </Card.Meta>
                <Card.Meta>
                    Mass: {props.mass}kg.
                </Card.Meta>
                <Card.Description>
                    More Details: <a href={props.link}>{props.link}</a>
                </Card.Description>
            </Card.Content>
        </Card>
    </Grid.Column>
  );
  export default CharacterCard;
  