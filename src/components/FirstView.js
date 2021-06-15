import React from "react";
import "./FirstView.css";
import Grid from "@material-ui/core/Grid";

const FirstView = () => {
  return (
    <div className="">
        <div className='dear'>
        <div  className='mainhead' >
        <Grid container spacing={0} className='main'>
          <Grid xs={12} md={4} lg={4}>
            <img
              src="https://static.wixstatic.com/media/4e13b1_f4554922bb644fdba661a6e604f4a5d3~mv2.png/v1/fill/w_130,h_38,al_c,q_85/4e13b1_f4554922bb644fdba661a6e604f4a5d3~mv2.webp"
              alt="hy"
              className='wix'
               />
          </Grid>
          <Grid xs={12} md={12} lg={12} className='secure'>
            <p>Free & Secure<br/> Web Hosting</p>
          </Grid>
          <Grid xs={12} md={12} lg={12} className='host'>
          <p>Free Hosting | Domain Registration | Easy-to-Use Website Builder</p>
          </Grid>
          <Grid xs={12} md={12} lg={12}>
<button  className='buttn'>Start Now</button>          </Grid>
        </Grid>
      </div>
        </div>
      
    </div>
  );
};

export default FirstView;
