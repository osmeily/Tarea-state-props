import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'


const Styledcardtext = styled.text`
color: black;
font-weight: bold
`

export default class Cards extends Component {
    render() {

        const {image, name, species, } =this.props.per;

        return (
            <div>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={image}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Styledcardtext>
                        {species}
                        </Styledcardtext>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}
