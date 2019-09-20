import React, { useEffect, useState } from "react";
import axios from 'axios'
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, 
} from 'reactstrap';

export default function CharacterList() {
  const [ characters, setCharacter ] = useState([]);
  useEffect(() => {
    const getCharacter = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacter(response.data.results);
          console.log(response.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getCharacter();
  }, []);
 

  return (
    <section className="character-list">
      {characters.map(character =>(
        <CharacterDetails key={character.id} character={character}/>
      ))}
    </section>
  );
}

function CharacterDetails({ character }){
  const { name, image, species, status } = character;
  return(
      <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>Species: {species}</CardSubtitle>
          <CardSubtitle>Status: {status}</CardSubtitle>
        </CardBody>
      </Card>
  )
}

 // TODO: Add useState to track data from useEffect
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!