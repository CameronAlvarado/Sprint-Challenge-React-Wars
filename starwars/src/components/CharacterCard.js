import React from "react"
import { Card, Grid } from "semantic-ui-react"

const CharacterCard = props => (

    <Grid.Column padded key={props.id}>
        <Card className='cards'>
            <Card.Content>
                <Card.Header>
                    {props.name}
                </Card.Header>
                <Card.Meta>
                    Height: {props.height}
                </Card.Meta>
                <Card.Meta>
                    Hair: {props.hair}
                </Card.Meta>
                <Card.Meta>
                    Mass: {props.mass}
                </Card.Meta>
                <Card.Description>
                    More Details: <a href={props.link}>{props.link}</a>
                </Card.Description>
            </Card.Content>
        </Card>
    </Grid.Column>
  );
  export default CharacterCard;
  