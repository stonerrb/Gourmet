import React from "react";
import { useEffect } from "react";
import "./DragImage.css";

const DragImage = () => {
  useEffect(() => {
    const track = document.getElementById("image-track");
    const text = document.getElementById("scrollinfo");
    const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -100
        );

      track.dataset.percentage = nextPercentage;

      var rect = track.getBoundingClientRect();
      text.removeAttribute("close");
      if (rect.left < 100) {
        text.removeAttribute("open");
        text.setAttribute("close", "true");
      } else if (rect.left >= 100) {
        text.removeAttribute("close");
        text.setAttribute("open", "true");
      }

      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    };

    window.onmousedown = (e) => handleOnDown(e);

    window.ontouchstart = (e) => handleOnDown(e.touches[0]);

    window.onmouseup = (e) => handleOnUp(e);

    window.ontouchend = (e) => handleOnUp(e.touches[0]);

    window.onmousemove = (e) => handleOnMove(e);

    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
  });

  return (
    <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
      <div id="scrollinfo" className="scrollinfo">
        <p id="infotext" className="boxedText">
          Drag<br></br> for a<br></br> Glance<br></br> {"<"}
          {"<"}
        </p>
      </div>
      <img
        className="image"
        src="https://images.unsplash.com/photo-1672636402078-4b957a572e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGFydWFudCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        draggable="false"
        alt="something of home"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        draggable="false"
        alt="something of home"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        draggable="false"
        alt="something of home"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
        draggable="false"
        alt="something of home"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80"
        draggable="false"
        alt="something of home"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
        draggable="false"
        alt="something of home"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        draggable="false"
        alt="something of home"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        draggable="false"
        alt="something of home"
      />
    </div>
  );
};

export default DragImage;
