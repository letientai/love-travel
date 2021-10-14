import './card.scss'
import React from 'react'
import { Header, Button } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";

const Card = (props) =>{
    const history = useHistory();
    const item = props.product;
    const moveToDetail = () =>{
      history.push(`/product/${item.id}`)
      console.log("item", item.id);
    }
    return(
        <div>
            <div className="card-container" key={item.id} style={{backgroundImage:`url(${item.image})`}} onClick={moveToDetail}>
                <div className="inf">
                    <h2>PACKAGE</h2>
                    <Header as='h3' className='text'>{item.text}</Header>
                    <div className="btn">
                        <Button color="green" className="btn-bookRom">
                            See more
                        </Button>
                    </div>
                </div>
                <div className="add">
                    <h2>{item.add}</h2>
                    <p>PACKAGE</p>
                </div>

            </div>
        </div>
    )
}
export default Card