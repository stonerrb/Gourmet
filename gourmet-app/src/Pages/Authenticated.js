import React from "react";
import "./CSS/Authenticated.css";
const Authenticated = () => {
  const auth = localStorage.getItem("auth");
  if (auth) {
    setTimeout(function () {
      window.location.href = "/login";
    }, 6000);

    var timeleft = 5;
    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Redirecting...";
      } else {
        document.getElementById("countdown").innerHTML =
          "You will be redirected to the home page in " + timeleft + "s...";
      }
      timeleft -= 1;
    }, 1000);
  }

  window.onunload = function () {
    this.localStorage.removeItem("auth");
  };

  return (
    <>
      <div className="authBox">
        <h1>Sign Up Successful!</h1>
        <h2 className="verified">Welcome to Gourmet.</h2>
        <h3 id="countdown">You will be redirected to the home page in 5s...</h3>
        <a href="/login">click here!</a>
      </div>
    </>
  );
};

export default Authenticated;
