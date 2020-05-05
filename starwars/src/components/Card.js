import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';



const RMCard = (props) => {
    return (
        <CardGroup style={row} >
          <Card style={BGcolor}>
            <CardBody style={BGcolor}>
              <CardTitle>Name: {props.name}</CardTitle>
              <CardText>Status: {props.status}</CardText>
              <CardText>Species: {props.species}</CardText>
              <CardText>Gender: {props.gender}</CardText>
              <img width="50%" src={props.image} />
            </CardBody>
          </Card>

        </CardGroup>
      );
    };


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

export default RMCard;


