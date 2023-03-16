import React, { useCallback, useEffect, useState } from 'react';
import Segment from "../../components/Segment";
import { Col, Row } from 'reactstrap';
import Card from "../../components/Card";
import Input from "../../components/Input";
import SelectBox from "../../components/Selectox";
import Button from "../../components/Button";
import { fetchApi } from '../../config/sevices';
import gengar from '../../assets/img/gengar.jpeg'

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
    const [data, setData] = useState([])
    const [value, setValue] = useState({
        pokemonName: "",
        kapasitas: "",
        harga: "",
        status: ""
    })
    const fetchingCar = useCallback((params = null) => {
        // setloader('fetching')
        fetchApi('https://pokeapi.co/api/v2/pokemon', params).then(result => {
            setData(result.data.pokemon)
            // setloader('resolve')
        }).catch(e => {
            // setloader('reject')
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchingCar({
            name: value.carName,
            catgory: value.kapasitas,
            isRented: value.status,
            minPrice: value.harga,
            maxPrice: value.harga
        })
        // setBackDrop(false)
    }

    useEffect ( () => {
        fetchingCar()
    }, [fetchingCar])
    

    return(
        <>
        <Segment className="pokemon-search">
            <Segment className="container search-container">
                <Card onSubmit={handleSubmit}>
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
                <Col md={4} className="pb-4">
                    <Card className="d-flex flex-column">
                        <Segment className="pokemon-image-placeholder px-4 py-3">
                            <img className="card-pokemon-image" src={gengar} alt="pict-pokemon" />
                        </Segment>
                        <Segment className="content-card px-4 pb-4">
                            <h6 className='card-pokemon-name'>Gengar</h6>
                            <Row>
                                <Col>
                                    <p className='card-pokemon-type'>Ghost</p>
                                </Col>
                                <Col>
                                    <p className='card-pokemon-type'>Poison</p>
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
            </Row>
        </Segment>
        </>
    )
}

export default Search;