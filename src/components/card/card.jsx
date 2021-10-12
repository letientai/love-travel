import './card.scss'
import React from 'react'
import { Header, Button } from 'semantic-ui-react'

const Card = (props) =>{
    
    return(
        <div>
            <div className="card-container" key={props.product.id} style={{backgroundImage:`url(${props.product.image})`}}>
                <div className="inf">
                    <h2>PACKAGE</h2>
                    <Header as='h3' className='text'>{props.product.text}</Header>
                    <Button animated='fade' className='btn'>
                        <Button.Content visible >VIEW DESTINATION</Button.Content>
                        <Button.Content hidden>BOOK ROOM</Button.Content>
                    </Button>
                </div>
                <div className="add">
                    <h2>{props.product.add}</h2>
                    <p>PACKAGE</p>
                </div>

            </div>
        </div>
    )
}
export default Card