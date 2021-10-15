import "./contact.scss";
import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import {
  Segment,
  Label,
  Form,
  TextArea,
  Button,
  FormInput,
} from "semantic-ui-react";
function Contact() {
  return (
    <div className="container">
      <div className="top-contact">
        <Navbar />
      </div>
      <div className="content-contact">
        <div className="form-contact">
          <b>Drop us a line</b>
          <p>
            Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat
            dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras
            sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum,
            venenatis malesuada felis quis, ultricies convallis neque.
            Pellentesque tristique fringilla tempus.
          </p>
          <Segment raised>
            <Label as="a" color="teal" ribbon>
              Thông tin khách hàng
            </Label>
            <Form className="info-form">
              <Form.Field>
                <label>Name:</label>
                <input />
              </Form.Field>
              <Form.Field>
                <label>Phone:</label>
                <FormInput />
              </Form.Field>
              <Form.Field>
                <label>Email:</label>
                <input type="Email" />
              </Form.Field>
              <Form.Field>
                <label>Message:</label>
                <TextArea className="mess" />
              </Form.Field>
              <Button className="btn">Send</Button>
            </Form>
          </Segment>
        </div>
        <div className="infomation">
          <img
            src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.6435-9/148862036_2731807687149499_7306548952366446257_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=b-fqqD9XvYEAX9-Mpks&_nc_ht=scontent.fdad1-1.fna&oh=1e45e1c91a391fb081e5f97cb90d1986&oe=619008F0"
            alt=""
          />
          <div className="form-inf">
            <div className="options">
              <div className="option">
                <h4>Address :</h4>
                <p>Avenue 234</p>
              </div>
              <div className="option">
                <h4>Phone :</h4>
                <p>0916786817</p>
              </div>
            </div>
            <div className="options">
              <div className="option">
                <h4>City :</h4>
                <p>New York - US</p>
              </div>
              <div className="option">
                <h4>Email :</h4>
                <p>letai97md@gmail.com</p>
              </div>
            </div>
            <div className="options">
              <div className="option">
                <h4>Check-In :</h4>
                <p>15:00 am</p>
              </div>
              <div className="option">
                <h4>Check-Out :</h4>
                <p>11:00 am</p>
              </div>
            </div>
          </div>
          <div className="tel">
            <p>AVAILABLE AT 10AM – 8PM</p>
            <a href="tel: +84916786817">+ 0916 786 817</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
