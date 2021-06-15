import React from 'react'
import "./SixthView.css";
import Grid from "@material-ui/core/Grid";
const SixthView = () => {
    return (
        <div>
            <Grid container spacing={0} style={{padding:"20px"}}>
                <Grid xs={12} md={10}><p>Privacy policy | Terms of use</p></Grid>
                <Grid xs={12} md={2}><p>© 2006 - 2020 Wix.com, Inc</p></Grid>
            </Grid>
        </div>
    )
}

export default SixthView
