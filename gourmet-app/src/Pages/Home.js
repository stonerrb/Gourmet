import React from "react";
import DragImage from "../Components/DragImage";
import "./CSS/Home.css";
import AnimatedTextWord from "../Components/AnimatedText";

const Home = () => {
  return (
    <div style={{ overflow: "auto", height: "inherit", display: "block" }}>
      <h1 className="home-title">Gourmet.</h1>
      <div id="homeBanner" className="homeBanner">
        <img
          className="home-image"
          src="https://i.imgur.com/j1qEIdQ.png"
          draggable="false"
          alt="Gourmet <3"
        ></img>
        <AnimatedTextWord
          key={1}
          text="Experience the 
          CONVENIENCE 
          of gourmet meals        
          on-the-go with 
          GOURMET TAKEAWAY"
          className="quote"
        />
        {/* <div className="home-text">
          <h1 className="quote">
            Experience the convenience of gourmet meals on-the-go with Gourmet
            takeaway
          </h1>
        </div> */}
      </div>
      <DragImage />
    </div>
  );
};

export default Home;
