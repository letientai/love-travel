import "./shop.scss";
import React from "react";
import Navbar from "../../components/navbar/navbar";
import MainData from "../../asset/data/mainData";
import CardItem from "../../components/cardItem/cardItem";
import Footer from "../../components/footer/footer";

function Shop() {
  
  return (
    <div className="container">
      <div className="top1">
        <Navbar />
      </div>
      <div className="content">
        <div className="content-products">
          <div className="card">
            {MainData.map((item) => (
              <CardItem product={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Shop;
