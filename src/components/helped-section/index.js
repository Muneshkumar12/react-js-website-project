import React from "react";
import '../../style/helped-section.css'
import kirroImg from '../../images/kirro.svg'
import easeCardImg from '../../images/easeCard.svg'
import sannoImg from '../../images/sanno.svg'
import healtImg from '../../images/health.svg'
import { Grid } from "@mui/material";
const HelpedSection = () => {
    return (
        <>
            <div className="helped-sec">
                <Grid container>
                    <Grid item lg={2} md={12} sm={12} xs={12}></Grid>
                    <Grid item lg={8} md={12} sm={12} xs={12} className="helped-sec-data">
                        <p data-aos="fade-up">We’ve <span>helped</span> them</p>
                        <span>We've partnered with many household brand names to deliver insights and <br />solutions to their problems with big data. </span>
                    </Grid>
                    <Grid item lg={2} md={12} sm={12} xs={12}></Grid>

                </Grid>
                <Grid container>
                    <Grid item lg={3} md={3} sm={6} xs={12} className="helped-sec-card">
                        <img src={kirroImg} data-aos="fade-up"/>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12} className="helped-sec-card">
                        <img src={easeCardImg} data-aos="fade-up"/>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12} className="helped-sec-card">
                        <img src={sannoImg} data-aos="fade-up"/>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12} className="helped-sec-card">
                        <img src={healtImg} data-aos="fade-up"/>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default HelpedSection