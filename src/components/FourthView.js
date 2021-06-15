import React from "react";
import "./FourthView.css";
import Grid from "@material-ui/core/Grid";

const FourthView = () => {
  return (
    <div>
      <div
        className="fourth"
        style={{
          alignItems: "center",
          textAlign: "center",
          marginTop: "10px",
          padding: "50px",
          fontSize: "15px",
          marginBottom: "12px",
        }}
      >
        <Grid container spacing={0}>
          <Grid xs={12} md={12} lg={12}>
            <p
              style={{
                fontSize: "40px",
                marginBottom: "10px",
                fontWeight: "100",
              }}
            >
              {" "}
              Choose a Free Stunning Template{" "}
            </p>
            <p>Explore 100s of templates designed for businesses like yours.</p>
            <button className="buttin" style={{ marginBottom: "40px" }}>
              Start Now
            </button>
          </Grid>
        </Grid>
        <div className="imgs" style={{textAlign:"center", }}>
          <div className="imags">
            <p>Event</p>
          </div>
          <div className="imagx">
            <p>Online Store</p>
          </div>
          <div className="imagh" xs={6} md={4} lg={4}>
            <p>Restaurant and Food</p>
          </div>
        </div>
        <div className="img2" style={{textAlign:"center", }}>
          <div className="imaged">
            <p>Business</p>{" "}
          </div>
          <div className="imged">
            <p>Music</p>{" "}
          </div>
          <div className="imagd">
            <p>Health and Wellness</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthView;
