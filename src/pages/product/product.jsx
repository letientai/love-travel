import "./product.scss";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import MainData from "../../asset/data/mainData";
import Footer from "../../components/footer/footer";
import { useLocation } from "react-router-dom";
import {
  Input,
  Button,
  Modal,
  Image,
  Rating,
  Comment,
  Icon,
  Form,
  FormInput,
  TextArea,
  Header
} from "semantic-ui-react";
import Map from "../../components/map/map";
import DataComment from "../../asset/data/dataComment";
import CardItem from "../../components/cardItem/cardItem";

function Product() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurame] = useState("");
  const [guest, setGuest] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const id = location.pathname?.split("product/")[1];
  const key = "AIzaSyC_OIsbQc7McILuw7HzAqnJY5DbTv0SLQg";
  // const key = "'AIzaSyDPm_QnYeqX-zFJ-4AusURyOwuLxhzMtjA";
  const [open, setOpen] = React.useState(false);

  useEffect(async () => {
    await window.scrollTo(0, 0);
    await fetchDatas();
    var product = MainData[parseInt(id) - 1].add;
    await setData2(
      MainData.filter((item) =>
        item?.add
          ?.toLocaleLowerCase()
          ?.includes(product?.toLocaleLowerCase())
      )
    );
  }, [location]);
  const fetchDatas = async () => {
    await setData(MainData[parseInt(id) - 1]);
    await setImage(MainData[parseInt(id) - 1].image);
  };
  const onChangeImage = (field) => {
    setImage(field);
  };
  const onChangeQuantity = (method) => {
    if (method === "plus") {
      setQuantity(quantity + 1);
    } else if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };
  const onChange = (e, field) => {
    const value = e.target.value;
    switch (field) {
      case "name":
        setName(value);
        break;
      case "surname":
        setSurame(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "guest":
        setGuest(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
      // code block
    }
  };
  let checkInfo = true;
  !name || !surname || !phone || !guest || !email
    ? (checkInfo = true)
    : (checkInfo = false);
  return (
    <div className="container">
      <div className="top2">
        <Navbar />
      </div>
      <div className="content">
        <div className="content-product">
          <div className="content-img">
            <img src={image} alt="" />
            <div className="item">
              <img
                src={data.item1}
                alt=""
                onClick={() => onChangeImage(data.item1)}
              />
              <img
                src={data.item2}
                alt=""
                onClick={() => onChangeImage(data.item2)}
              />
              <img
                src={data.item3}
                alt=""
                onClick={() => onChangeImage(data.item3)}
              />
              <img
                src={data.item4}
                alt=""
                onClick={() => onChangeImage(data.item4)}
              />
            </div>
          </div>
          <div className="infomation">
            <b>{data.name}</b>
            <div className="icon">
              {/* <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" /> */}
              <Rating icon="star" defaultRating={4} maxRating={5} />
            </div>
            <h2>{data.price} $</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at felis laoreet massa cursus pulvinar. Donec non
              eleifend augue, id tristique nisi. Nunc in leo augue. Cras sapien
              quam, dictum et.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at felis laoreet massa cursus pulvinar. Donec non
              eleifend augue, id tristique nisi. Nunc in leo augue. Cras sapien
              quam, dictum et.
            </p>
            <div className="quantity">
              <Button icon="minus" onClick={() => onChangeQuantity("minus")} />
              <Input className="inp-quantity" value={quantity} />
              <Button icon="plus" onClick={() => onChangeQuantity("plus")} />
            </div>
            <Button className="btn-add">ADD TO CARD</Button>
          </div>
        </div>
        <div className="form">
          <div className="map">
            <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div
                  style={{
                    height: `100%`,
                    margin: `auto`,
                    border: "2px solid black",
                    width: "100%",
                  }}
                />
              }
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
          <div className="form-register">
            <div className="header">
              <p>{data.price * quantity} $</p>
            </div>
            <div className="content-form">
              <Input
                placeholder="Name"
                className="input"
                value={name}
                onChange={(e) => onChange(e, "name")}
              />
              <Input
                placeholder="Surname"
                className="input"
                value={surname}
                onChange={(e) => onChange(e, "surname")}
              />
            </div>
            <div className="content-form">
              <Input
                placeholder="Email"
                className="input"
                type="email"
                value={email}
                onChange={(e) => onChange(e, "email")}
              />
              <Input
                placeholder="Guest"
                className="input"
                value={guest}
                onChange={(e) => onChange(e, "guest")}
              />
            </div>
            <div className="content-form">
              <Input
                placeholder="Phone"
                className="input ip1"
                type="number"
                value={phone}
                onChange={(e) => onChange(e, "phone")}
              />
            </div>
            <div className="content-form">
              <Input
                placeholder="Message"
                className="input ip1"
                value={message}
                onChange={(e) => onChange(e, "message")}
              />
            </div>
            <div className="content-form">
              {/* <Button className="btn" disabled={checkInfo}>
                Send
              </Button> */}
              <Modal
                className="modal1"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                  <Button className="btn" disabled={checkInfo}>
                    Send
                  </Button>
                }
              >
                <Modal.Header>Is your information correct?</Modal.Header>
                <Modal.Content image>
                  <Image size="medium" src={data.image} wrapped />
                  <Modal.Description>
                    <p>Name: {name}</p>
                    <p>Surname: {surname}</p>
                    <p>Email: {email}</p>
                    <p>Guest: {guest}</p>
                    <p>Phone: {phone}</p>
                    <p>Message: {message}</p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={() => setOpen(false)}>Cancel</Button>
                  <Button onClick={() => setOpen(false)} positive>
                    Ok
                  </Button>
                </Modal.Actions>
              </Modal>
            </div>
          </div>
        </div>
        <div className="form-comment">
          <p>Comment</p>
          <hr />
          {DataComment.map((item) => (
            <Comment.Group key={item.id} className="comment">
              <Comment>
                <Comment.Avatar as="a" src={item.image} />
                <Comment.Content>
                  <Comment.Author>{item.name}</Comment.Author>
                  <Comment.Text>{item.text}</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                    <Comment.Action>Save</Comment.Action>
                    <Comment.Action>Hide</Comment.Action>
                    <Comment.Action>
                      <Icon name="expand" />
                      Full-screen
                    </Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          ))}
          <div className="form-send">
            <Form className="comment1">
              <Form.Field>
                <label>Phone:</label>
                <FormInput
                  type="number"
                />
              </Form.Field>
              <Form.Field>
                <label>Email:</label>
                <input />
              </Form.Field>
              <Form.Field>
                <label>Message:</label>
                <TextArea
                  className="mess"
                />
              </Form.Field>
              <Button className="btn">Send</Button>
            </Form>
          </div>
        <hr />
        </div>
        <div className="related-product">
          {data2.map((item) => (
           <CardItem product={item} key ={item.id}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Product;
