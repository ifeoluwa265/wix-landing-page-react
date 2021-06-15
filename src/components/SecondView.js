import React from "react";
import "./SecondView.css";
import Grid from "@material-ui/core/Grid";

const Secondview = () => {
  return (
    <div>
      <div>
        <Grid container spacing={0} className="con">
          <Grid xs={12} md={12} lg={12} className="second">
            <p>All You Need. And More.</p>
          </Grid>
          <Grid xs={6} md={3} lg={6} className="icontext">
            <img
              src="https://static.wixstatic.com/media/9ab0d1_0b3231225446428b9b3498a8db9d3855.png/v1/fill/w_88,h_53,al_c,q_85/9ab0d1_0b3231225446428b9b3498a8db9d3855.webp"
              alt="ga"
              style={{
                width: "88px",
                height: "53px",
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
            <p>
              Enjoy Free &<br />
              Secure Hosting
            </p>
          </Grid>
          <Grid xs={6} md={3} lg={3} className="icontext">
            <img
              src="https://static.wixstatic.com/media/9ab0d1_5dc6152dc8fb4adebc5f1623c8a2c1a3.png/v1/fill/w_76,h_61,al_c,q_85/9ab0d1_5dc6152dc8fb4adebc5f1623c8a2c1a3.webp"
              alt="img"
            />{" "}
            <p>
              Enjoy Free &<br />
              Secure Hosting
            </p>
          </Grid>
          <Grid xs={6} md={3} lg={3} className="icontext">
            <img
              src="https://static.wixstatic.com/media/4e13b1_69b2281037dc43f880efbf9a30c22530~mv2.png/v1/fill/w_90,h_70,al_c,q_85/4e13b1_69b2281037dc43f880efbf9a30c22530~mv2.webp"
              alt=""
            />{" "}
            <p>
              <p>
                Choose from 100s <br />
                of Templates
              </p>
            </p>
          </Grid>
          <Grid xs={6} md={3} lg={3} className="icontext">
            <img
              src="https://static.wixstatic.com/media/4e13b1_a8ad0afaf151449eb0024c4b994dafc9~mv2.png/v1/fill/w_70,h_70,al_c,q_85/4e13b1_a8ad0afaf151449eb0024c4b994dafc9~mv2.webp"
              alt=""
            />{" "}
            <p>
              Rank Higher on <br /> Google with Wix SEO
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Secondview;
