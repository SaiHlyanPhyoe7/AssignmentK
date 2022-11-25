import React from "react";
import Lottie from "lottie-react";
import animation from "../loading.json";
import "./loadingComponent.css";

const LoadingComponent = () => {
  return (
    <div className="loadingFlex">
      <div className="loadingWidth">
        <Lottie
          className="loading"
          animationData={animation}
          loop={true}
          autoPlay={true}
        />
      </div>
    </div>
  );
};

export default LoadingComponent;
