import Navbar from "../../components/navbar/navbar";
import "./home.scss";
import { Header, Dropdown, Icon, Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import InfoData from "../../asset/data/infoData";
import Card from "../../components/card/card";
import ImgsTopData from "../../asset/data/imgsTopData";
import { Carousel } from "react-carousel-minimal";
import Footer from "../../components/footer/footer";
import {useHistory} from 'react-router-dom'

function Home() {
  const [image, setImage] = useState(
    "https://img4.thuthuatphanmem.vn/uploads/2019/12/16/anh-nen-thien-nhien-4k_024350402.jpg"
  );
  const [minutes, setMinutes] = useState(`0${0}`);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(12);
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var id = setInterval(frame, 1000);
    let pos = true;
    let se = 0;
    let minu = 0;
    let ho = 0;
    function frame() {
      if (pos === false) {
        clearInterval(id);
      } else {
        se++;
        if (se < 10) {
          setSeconds(`0${se}`);
        } else {
          setSeconds(se);
          if (se === 60) {
            minu++;
            se = 0;
            if (minu < 10) {
              setMinutes(`0${minu}`);
            } else {
              setMinutes(minu);
              if (minu === 59) {
                ho++;
                setHours(ho);
                minu = 0;
              }
            }
          }
        }
      }
    }
  };
  const moveToShop = () =>{
    history.push('/shop');
  }
  const onChangBackground = (field) => {
    setImage(field);
    let animation = document.getElementById("top");
    animation.style.transition = 700 + "ms";
    // var id = setInterval(frame, 1000);
    // var pos = -111;
    // function frame() {
    //   if (pos == 0) {
    //     clearInterval(id);
    //   } else {
    //     pos++;
    //     animation.style.translateX = pos + 'px';
    //   }
    // }
  };
  const friendOptions = [
    {
      key: "Choose your Destination",
      text: "Choose your Destination...",
      value: "Choose your Destination...",
    },
    {
      key: "Europo",
      text: "Europo",
      value: "Europo",
    },
    {
      key: "Italy",
      text: "Italy",
      value: "Italy",
    },
    {
      key: "Netherlands",
      text: "Netherlands",
      value: "Netherlands",
    },
    {
      key: "Asia",
      text: "Asia",
      value: "Asia",
    },
    {
      key: "Thailandia",
      text: "Thailandia",
      value: "Thailandia",
    },
    {
      key: "United State",
      text: "United State",
      value: "United State",
    },
    {
      key: "Oceania",
      text: "Oceania",
      value: "Oceania",
    },
  ];
  // data cua carousel
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco",
    },

    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
    },
  ];
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="container">
      <div
        className="top"
        id="top"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Navbar />
        <div className="content">
          <Header as="h1" className="title">
            Search your next <span>Holiday</span>
          </Header>
          <Header as="h2" className="title">
            CHECK OUR BEST PROMOTIONS
          </Header>
          <div className="search">
            <Dropdown
              className="sear"
              placeholder="Choose your Destination..."
              fluid
              selection
              options={friendOptions}
            />
            <Button className="btn">
              {" "}
              <Icon name="search" className="icon" />
            </Button>
          </div>
          <div className="options">
            {ImgsTopData.map((item) => (
              <div
                key={item.id}
                className="option"
                onClick={() => onChangBackground(item.image)}
              >
                <img src={item.logo} alt="" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="content-list">
        <div className="title">
          <Header as="h5">
            OUR PROPOSALS<span>Holiday</span>
          </Header>
          <Header as="h2">
            OUR <span>DESTINATIONS</span>{" "}
          </Header>
        </div>
        <div className="content-products">
          <div className="card">
            {InfoData.map((item) => (
              <Card product={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="introduct">
        <div className="title">
          <Header as="h1" className="title1">
            Your <br /> Next <span>Holiday</span>
          </Header>
        </div>
      </div>
      <div className="picture" style={{ textAlign: "center" }}>
        <div className="depiction">
          <p>NORTH AMERICA</p>
          <Header as="h1" className="title1">
            Your Next <span>Holiday</span>
          </Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin
            rhoncus urna dictum neque molestie ultricies mauris ac.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin
            rhoncus urna dictum neque molestie ultricies mauris ac.
          </p>
          <div className="btn">
            <Button color="green" className="btn-bookRom" onClick={moveToShop}>
              BOOK NOW
            </Button>
          </div>
        </div>
        <div className="carousel">
          <div className="header">
            <div className="date">
              <div className="option">
                <h1>139</h1>
                <p>DAYS</p>
              </div>
              <div className="option">
                <h1>{hours}</h1>
                <p>HOURS</p>
              </div>
              <div className="option">
                <h1>{minutes}</h1>
                <p>MINUTES</p>
              </div>
              <div className="option">
                <h1>{seconds}</h1>
                <p>SECONDS</p>
              </div>
            </div>
          </div>
          <Carousel
            data={data}
            time={5000}
            width="700px"
            height="350px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="105px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}

export default Home;
