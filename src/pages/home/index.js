import React, { useCallback, useEffect, useState } from 'react';
import Segment from "../../components/Segment";
import { Col, Row } from 'reactstrap';
import Card from "../../components/Card";
import Input from "../../components/Input";
import SelectBox from "../../components/Selectox";
import Button from "../../components/Button";
import { fetchApi } from '../../config/sevices';
import gengar from '../../assets/img/gengar.jpeg'
import Type from '../../components/Type';
import axios from 'axios';

const pokemonType = [{
    value: 'water',
    label: 'water'
},{
    value: 'grass',
    label: 'grass'
},{
    value: 'fire',
    label: 'fire'
}]


const Search = (props) => {

    const [pokeData, setPokeData]=useState([]);
    const [url, setUrl]=useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl]=useState();
    const [prevUrl, setPrevUrl]=useState();

    const pokeSearch = async() => {
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokeData(res.data.results)
    }


    const getPokeData=async(respon) => {
        respon.map(async(pokemon) => {
            const result=await axios.get(pokemon.url)
            setPokeData(state=>{
                state=[...state,result.data]
                // state.sort ((a,b) => a.id - b.id)
                return state;
            })
        })
    }
    const pokeDataAsc = [...pokeData].sort((a,b) => a.id-b.id);
    console.log(pokeData)
    
    useEffect(() => {
        pokeSearch();
    },[]) 

    return(
        <>
        <Segment className="pokemon-search">
            <Segment className="container search-container">
                <Card>
                    <Row>
                        <Col md={5}>
                            <Input 
                                name='name'
                                title='name'
                                label='Name'>
                                
                            </Input>
                        </Col>
                        <Col md={5}>
                            <SelectBox
                                // onChange={handleChange}
                                name='Type'
                                title='Pokemon Type'
                                label='Type'
                                data={pokemonType}>
                            </SelectBox>
                        </Col>
                        <Col md={2} className='d-flex align-items-end'>
                            <Button className='btn btn-success btn-form-item d-flex align-items-center justify-content-center'>
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Segment >
        </Segment>
        <Segment className='container mt-4'>
            <Row>
                {
                    pokeDataAsc.map((pokemon) => {
                        return (
                            <Col md={4} className="pb-4">
                                <Card className="d-flex flex-column">
                                    <Segment className="pokemon-image-placeholder px-4 py-3">
                                        <img className="card-pokemon-image" src={pokemon.sprites.front_default} alt="pict-pokemon" />
                                    </Segment>
                                    <Segment className='content-card px-4 pb-2'>
                                        <Segment className='card-title'>
                                            <h6 className='card-pokemon-name'>{pokemon.id}</h6>
                                            <h6 className='card-pokemon-name'>. {pokemon.name}</h6>
                                        </Segment>
                                        <Row className='card-pokemon-type'>
                                            <Col md={12}>
                                                <Type className='anu'>
                                                    {
                                                        pokemon.types.map(pokemonType=>{
                                                            return(
                                                                <p className='pokemon-type'>{pokemonType.type.name}</p>
                                                            )
                                                        })
                                                    }
                                                </Type>
                                            </Col>
                                        </Row>
                                        <p className='card-pokemon-description'>
                                            Lorem ipsum dolor card-car-imagesit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <Button className='btn btn-success btn-form-item d-flex align-items-center justify-content-center'>
                                            Detail
                                        </Button>
                                    </Segment>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Segment>
        </>
    )
}

export default Search;