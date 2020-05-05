import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';

const row = {
    width:'50%',
    margin:'auto',
    borderRadius:'1rem'
}

const BGcolor ={
    backgroundColor:'green',
    marginBottom:'1rem',
    borderRadius:'1rem'
}

const RMCard = (props) => {
    return (
        <CardGroup style={row} >
          <Card style={BGcolor}>
            <CardBody style={BGcolor}>
              <CardTitle>Name: {props.name}</CardTitle>
              <CardText>Status: {props.status}, Species: {props.species}</CardText>
              <img src={props.image} />
            </CardBody>
          </Card>

        </CardGroup>
      );
    };


export default RMCard;


