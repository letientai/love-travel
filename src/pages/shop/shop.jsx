import "./shop.scss";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import MainData from "../../asset/data/mainData";
import CardItem from "../../components/cardItem/cardItem";
import Footer from "../../components/footer/footer";

function Shop() {
  const [data, setData] = useState([]);
  const [address, setAddress] = useState("");

  const fetchData = () => {
    setData(MainData);
  };
  const onSearchAdd = async (e) => {
    await setAddress(e.target.value)
    await setData(
      MainData.filter((item) =>
        item?.add?.toLocaleLowerCase()?.includes(e.target.value?.toLocaleLowerCase())
      )
    );
  };
  useEffect(() => {
    fetchData();
  },[]);
  return (
    <div className="container">
      <div className="top1">
        <Navbar />
      </div>
      <div className="content">
        <div className="menuShop">
          <div className="searchShop">
            <div className="selectForm">
              <p>Continents</p>
              <select className="selectBox" value={address} onChange={onSearchAdd} >
                <option selected value=""> All </option>
                <option value="Europe">Europe</option>
                <option value="Thailandia">Thailandia</option>
                <option value="United States">United States</option>
                <option value="Netherlands">Netherlands</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content-products">
          <div className="card">
            {data.map((item) => (
              <CardItem product={item} key ={item.id}/>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Shop;
