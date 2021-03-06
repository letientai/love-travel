import "./navbar.scss";
import React, { useEffect } from "react";
import logo from "../../asset/image/logo.png";
import { Button, Header, Icon } from "semantic-ui-react";
import InfoData from "../../asset/data/infoData";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
    history.push("/love-travel");
  };
  const moveToDetail = (field) => {
    history.push(`/product/${field}`);
  };
  const moveToShop = () => {
    history.push("/shop");
  };
  const moveToNew = () => {
    history.push("/new");
  };
  const moveToPackage = () => {
    history.push("/package");
  };
  const moveToContact = () => {
    history.push("/contact");
  };
  const moveToAboutUs = () => {
    history.push("/aboutUs");
  };
  return (
    <div className="navbar">
      <div className="logo" onClick={moveTohome}>
        <img src={logo} alt="" />
      </div>
      <div className="options">
        <Link to="/love-travel" className="option">
          <span>HOME</span>
        </Link>
        <Link to="/package" className="option">
          <span>PACKAGES</span>
        </Link>
        <Link to="/shop" className="option">
          <span>SHOP</span>
        </Link>
        <Link to="/aboutUs" className="option">
          <span>ABOUT US</span>
        </Link>
        <Link to="/" className="option">
          <span>PAGES</span>
        </Link>
        <Link to="/new" className="option">
          <span>NEW</span>
        </Link>
        <Link to="/contact" className="option">
          <span>CONTACT</span>
        </Link>
      </div>
      <div className="btn">
        <Button color="green" className="btn-bookRom" onClick={moveToShop}>
          BOOK NOW
        </Button>
      </div>
      <div className="menuRight">
        <div className="menu" id="menu">
          <div className="close">
            <p>Best</p>
            <div className="btn-close" onClick={close}>
              <Icon name="x" className="close" />
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
                <div
                  className="inf"
                  style={{ marginLeft: 15 }}
                  onClick={() => moveToDetail(item.id)}
                >
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
          <div className="menu-hide">
            <div className="option" onClick={moveTohome}>
              <Link to="/love-travel" className="option1">
                <span>HOME</span>
              </Link>
            </div>
            <div className="option" onClick={moveToPackage}>
              <Link to="/package" className="option1">
                <span>PACKAGES</span>
              </Link>
            </div>
            <div className="option" onClick={moveToShop}>
              <Link to="/shop" className="option1">
                <span>SHOP</span>
              </Link>
            </div>
            <div className="option" onClick={moveToAboutUs}>
              <Link to="/aboutUs" className="option1" >
                <span>ABOUT US</span>
              </Link>
            </div>
            <div className="option">
              <Link to="/" className="option1">
                <span>PAGES</span>
              </Link>
            </div>
            <div className="option" onClick={moveToNew}>
              <Link to="/new" className="option1">
                <span>NEW</span>
              </Link>
            </div>

            <div className="option" onClick={moveToContact}>
              <Link to="/contact" className="option1">
                <span>CONTACT</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="logoMenu" onClick={open}>
          {/* <img
                src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/error.png"

            // src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/menu.png"
            alt="" 
          /> */}
          <Icon name="align justify" className="open" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
