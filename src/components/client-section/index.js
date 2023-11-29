import React from "react";
import '../../style/client-section.css'
import { Grid } from "@mui/material";
import johnImg from '../../images/john.jpg'
import annaImg from '../../images/Anna .jpg'
const HappyClient = () => {
    return (
        <>
            <div className="client-sec">
                <Grid container>
                    <Grid item xs={1} sm={2} md={2} lg={2}></Grid>
                    <Grid item xs={10} sm={8} md={8} lg={8}>
                        <div className="client-sec-heading">
                            <p data-aos="fade-up"><span>Happy</span> clients</p>
                            <span>
                                Don't just take our word for it – our clients frequently stay in touch with us and work with us on future projects that require big data insights.
                            </span>
                        </div>
                        <div className="client-card" data-aos="fade-up">
                            <img src={johnImg}/>
                            <div className="client-data">
                                <p>John Bjerrand</p>
                                <span>I work in agricultural consulting, meaning that we often need to use big and complex datasets to justify expensive investments for our clients. Lilo's consultants helped us see the big picture with their visualization tools and expertise.</span>
                            </div>
                        </div>
                        <div className="client-card" data-aos="fade-up">
                            <img src={annaImg}/>
                            <div className="client-data">
                                <p>Anna Claudio</p>
                                <span>As the in-house supplier manager, it's sometimes had to understand which manufacturers work best for our needs. Lilo's data analysis helped us identify where we could save and which manufacturers worked the best for us in the long term. </span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={1} sm={2} md={2} lg={2}></Grid>
                </Grid>
            </div>
        </>
    )
}
export default HappyClient