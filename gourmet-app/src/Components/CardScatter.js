import React from "react";
import "./CardScatter.css";

const CardScatter = () => {
  return (
    <div>
      <div className="card-swiper">
        <div className="card-groups">
          <div className="card-group" data-index="0" data-status="active">
            <div className="little-card scatterCard"></div>
            <div className="big-card scatterCard"></div>
            <div className="little-card scatterCard"></div>
            <div className="big-card scatterCard"></div>
            <div className="little-card scatterCard"></div>
            <div className="big-card scatterCard"></div>
            <div className="little-card scatterCard"></div>
            <div className="big-card scatterCard"></div>
          </div>
          <div className="card-group" data-index="1" data-status="unknown">
            <div className="little-card scatterCard"></div>
            <div className="big-card scatterCard"></div>
            <div className="little-card scatterCard"></div>
            <div className="big-card scatterCard"></div>
            <div className="little-card scatterCard"></div>
            <div className="big-card scatterCard"></div>
            <div className="little-card scatterCard"></div>
            <div className="big-card scatterCard"></div>
          </div>
          <div className="card-group" data-index="2" data-status="unknown">
            <div className="little-card scatterCard"></div>
            <div className="big-card scatterCard"></div>
            <div className="little-card scatterCard"></div>
            <div className="big-card scatterCard"></div>
            <div className="little-card scatterCard"></div>
            <div className="big-card scatterCard"></div>
            <div className="little-card scatterCard"></div>
            <div className="big-card scatterCard"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardScatter;
