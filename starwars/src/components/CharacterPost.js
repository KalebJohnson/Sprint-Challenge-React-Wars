import React, { useState , useEffect } from 'react';
import axios from 'axios';
import RMCard from './Card'




const CharacterPost = props => {

    const [info , setInfo] =useState([])

    useEffect(() => {
        axios
        .get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16")
        .then(response => {
            setInfo(response.data);
        });

    }, []);


useEffect(() => {
    console.log("RICK!", info);
}, [info])


return (

<div>
    <ul>
        {info.map(item =>{
            return    <RMCard
            id = {item.id}
            name = {item.name}
            status = {item.status}
            species = {item.species}
            image = {item.image}
            />
            
        })}
 
    </ul>
    
</div>
);
};

export default CharacterPost;