import "./navbar.scss";
import logo from "../../asset/image/logo.png";
import { Button, Header, Icon } from "semantic-ui-react";
import InfoData from "../../asset/data/infoData";
import { Link, useHistory } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();
  const open = () => {
    let animation = document.getElementById("menu");
    animation.style.transition = `ease-out 0.05s`;
    var id = setInterval(frame, 0.1);
    var pos = 100;
    function frame() {
      if (pos === 0) {
        clearInterval(id);
      } else {
        pos--;
        animation.style.transform = `translateX(${pos}%)`;
      }
    }
  };
  const close = () => {
    let animation = document.getElementById("menu");
    animation.style.transition = `ease-out 0.05s`;
    var id = setInterval(frame, 0.1);
    var pos = 0;
    function frame() {
      if (pos === 100) {
        clearInterval(id);
      } else {
        pos++;
        animation.style.transform = `translateX(${pos}%)`;
      }
    }
  };
  const moveTohome = () => {
    history.push("/love_travel");
  };
  return (
    <div className="navbar">
      <div className="logo" onClick={moveTohome}>
        <img src={logo} alt="" />
      </div>
      <div className="options">
        <Link to="/love_travel" className="option">
          <span>HOME</span>
        </Link>
        <Link to="/" className="option">
          <span>PACKAGES</span>
        </Link>
        <Link to="/shop" className="option">
          <span>SHOP</span>
        </Link>
        <Link to="/" className="option">
          <span>ABOUT US</span>
        </Link>
        <Link to="/" className="option">
          <span>PAGES</span>
        </Link>
        <Link to="/" className="option">
          <span>NEW</span>
        </Link>
        <Link to="/" className="option">
          <span>CONTACT</span>
        </Link>
      </div>
      <div className="btn">
        <Button color="green" className="btn-bookRom">
          BOOK NOW
        </Button>
      </div>
      <div className="menuRight">
        <div className="menu" id="menu">
          <div className="close">
            <p>Best</p>
            <div className="btn-close" onClick={close}>
            <Icon name='x' className='close'/>
              {/* <img
                src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/menu.png"
                // src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/error.png"
                alt=""
              /> */}
            </div>
          </div>
          <Header as="h1" className="header">
            PACKAGES
          </Header>
          <div className="card">
            {InfoData.map((item) => (
              <div className="image" key={item.id}>
                <img src={item.image} alt="" />
                <div className="inf" style={{ marginLeft: 15 }}>
                  <h3 className="header">{item.text}</h3>
                  <div className="add">
                    <Icon
                      disabled
                      name="map marker alternate"
                      className="icon"
                    />
                    <h4>{item.add}</h4>
                  </div>
                  <Button color="green" className="btn-price">
                    From: {item.price}
                    <Icon disabled name="dollar" className="icon" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="logoMenu" onClick={open}>
          {/* <img
                src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/error.png"

            // src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/menu.png"
            alt=""
          /> */}
          <Icon name='align justify' className='open'/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
