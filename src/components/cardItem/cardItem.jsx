import "./cardItem.scss";
import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const CardItem = (props) => {
  const history = useHistory();
  const item = props.product;
  const moveToDetail = () =>{
    history.push(`/product/${item.id}`)
    console.log("item", item.id);
  }
  return (
    <div>
      <div className="carditem-container" key={item.id} onClick={moveToDetail}>
        <img src={item.image} alt="" />
        <div className="infomation">
          <b>{item.name}</b>
          <div className="icon">
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
          </div>
          <p>{item.price} $</p>
          <Button content='See more' basic className='btn-seemore' />
        </div>
      </div>
    </div>
  );
};
export default CardItem;
