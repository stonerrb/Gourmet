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
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60"
        draggable="false"
        alt="something of home"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60"
        draggable="false"
        alt="something of home"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        draggable="false"
        alt="something of home"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        draggable="false"
        alt="something of home"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        draggable="false"
        alt="something of home"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        draggable="false"
        alt="something of home"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        draggable="false"
        alt="something of home"
      />
    </div>
  );
};

export default DragImage;
