import React from 'react'
import "./ThirdView.css";
import Grid from "@material-ui/core/Grid";
const ThirdView = () => {
    return (
        <div>
            <div className='third' style={{backgroundColor:'#EDF1F5'}}>
                <Grid container spacing={0}>
                    <Grid xs={12} md={6} lg={6} >
                    <img src='https://static.wixstatic.com/media/467b46_10982eda12474299880e15f052a5f640~mv2.png/v1/fill/w_707,h_593,al_c,q_90,usm_0.66_1.00_0.01/467b46_10982eda12474299880e15f052a5f640~mv2.webp' alt='' className='lady'/>
                    
                    </Grid>
                    <Grid xs={12} md={6} lg={6} className='two'>
         <p>Everything You Need.<br/>Get Online Today.</p>
         <button className='butn'>Start Now</button>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default ThirdView
