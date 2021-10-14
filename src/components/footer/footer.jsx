import React from "react";
import './footer.scss';
import { Icon, Button, Input } from "semantic-ui-react";
import logo from '../../asset/image/logo1.png'


const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="send-mail">
          <div className="title">
            <p>KEEP IN TOUCH</p>
            <h1>Travel with Us</h1>
          </div>
          <div className="search-mail">
            <Input iconPosition="left" placeholder="Email" className="search">
              <Icon name="at" />
              <input />
            </Input>
            <Button color="blue" className="btn-send">
              Send
            </Button>
          </div>
        </div>
        <div className="infomation">
          <div className="wvp_row1">
            <div className="column1">
              <img
                 src={logo}
                // src='http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/logo-color.png'
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ut diam et nibh condimentum venenatis eu ac magnasin.
                Quisque interdum est mauris, eget ullamcorper.
              </p>
              <div className="icon">
                <Icon name="twitter" className="icon1" />
                <Icon name="youtube" className="icon1" />
                <Icon name="facebook" className="icon1" />
                <Icon name="instagram" className="icon1" />
              </div>
            </div>
            <div className="column2">
              <div className="option">
                <p>OUR AGENCY</p>
                <ul>
                  <li>
                    {" "}
                    <Icon name="angle right" className='angleRight'/>
                    Services
                  </li>
                  <li>
                    {" "}
                    <Icon name="angle right" className='angleRight'/>
                    Insurancee
                  </li>
                  <li>
                    {" "}
                    <Icon name="angle right" className='angleRight'/>
                    Agency
                  </li>
                  <li>
                    <Icon name="angle right" className='angleRight'/>
                    Tourism
                  </li>
                  <li>
                    {" "}
                    <Icon name="angle right" className='angleRight'/>
                    Payment
                  </li>
                </ul>
              </div>
              <div className="option">
                <p>PARTNERS</p>
                <ul>
                  <li>
                    <Icon name="angle right" className='angleRight'/>
                    Booking
                  </li>
                  <li>
                    <Icon name="angle right" className='angleRight'/>
                    RentalCar
                  </li>
                  <li>
                    <Icon name="angle right" className='angleRight'/>
                    HostelWorld
                  </li>
                  <li>
                    <Icon name="angle right" className='angleRight'/>
                    Trivago
                  </li>
                  <li>
                    <Icon name="angle right" className='angleRight'/>
                    TripAdvisor
                  </li>
                </ul>
              </div>
              <div className="option">
                <p>LAST MINUTE</p>
                <ul>
                  <li>
                    <Icon name="angle right" className='angleRight'/>
                    London
                  </li>
                  <li>
                    {" "}
                    <Icon name="angle right" className='angleRight'/>
                    California
                  </li>
                  <li>
                    {" "}
                    <Icon name="angle right" className='angleRight'/>
                    Indonesia
                  </li>
                  <li>
                    {" "}
                    <Icon name="angle right" className='angleRight'/>
                    Europe
                  </li>
                  <li>
                    {" "}
                    <Icon name="angle right" className='angleRight'/>
                    Oceania
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="wvp_row2">
            <p>THE BEST WORDPRESS TRAVEL THEME</p>
            <p>COPYRIGHT NICDARK THEMES 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
