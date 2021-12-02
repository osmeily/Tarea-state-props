import React, { Component } from 'react'
import Cards from './Cards';
import styled from 'styled-components';

const Styledbg = styled.div`
    background-color: #22142b;
    display: grid;
    grid-template-column: 1fr 1fr 1fr;
    color: white;
`


export default class Component1 extends Component {

    constructor(){
        super();
        this.state = {
            personajes: []
        }
    }

    async componentDidMount(){
        const url = "https://rickandmortyapi.com/api/character/"
        const resp = await fetch(url)
        const data = await resp.json()
        const {results} = data;
        this.setState({personajes:results})
        
        
    }

    render() {
        return (
            <Styledbg>
                <h1> RICK AND MORTY </h1> 
                <h5> Personajes </h5>
                {
                    this.state.personajes.map((personaje, index) => (
                        <div>
                            {personaje.name}
                            <Cards key={index} per={personaje}/>
                        </div>
                    ))
                }
            </Styledbg>
        )
    }
}
