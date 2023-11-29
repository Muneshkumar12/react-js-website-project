import React from "react";
import { useNavigate } from 'react-router-dom';
import {HelpedSection, HappyClient} from "../../components";
import Layout from "../../layout";
import '../../style/home.css';
import consultImg from '../../images/Consulting.svg';
import Engineering from '../../images/Engineering.svg';
import Analytics from '../../images/Analytics.svg';
import Visualization from '../../images/Visualization.svg';
import approach from '../../images/approach.jpg';
import clientImg  from '../../images/client.svg';
import efficiencyImg from '../../images/efficiency.svg';
import automationImg from '../../images/automation.svg';
import innovationImg from '../../images/innovation.svg';
import costImg from '../../images/costs.svg';
import MarketImg from '../../images/Market .svg';
import { Grid } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Home = () => {
    const Nevigate = useNavigate();
    return (
        <>
        <Layout>
            <div className="main">
                <Grid container spacing={{ lg: 3 }}>
                    <Grid item lg={5} sm={10} md={8} xs={10} className="section-1-heading">
                        <p>Big data for big <span style={{ color: "#ED51C2" }}>success</span></p>
                        <span>We help companies comb through big data sets and realize otherwise hidden trends, opportunities and threats to their business. </span>
                    </Grid>
                </Grid>
            </div>
            <div id="section-2" data-aos="zoom-in">
                <Grid container >
                    <Grid item lg={3}></Grid>
                    <Grid item lg={6} className="section-2-data">
                        <p>What we’re <span style={{ color: " #ED51C2" }}>good</span> at?</p>
                        <span>We believe in your success and that big data can help you achieve the best results for your business, regardless of your field or target market. </span>
                    </Grid>
                    <Grid item lg={3}></Grid>
                </Grid>
            </div>
            <div id="section-3" >
                <Grid container >
                    <Grid item xs={12} sm={12} md={6} lg={6} className="section-3-data" data-aos="fade-up">
                        <img src={consultImg} />
                        <p>Big Data <br />
                            Consulting</p>
                        <span>Sometimes you need to look far to see close. Our experts help you make sense of big data.</span>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} className="section-3-data" data-aos="fade-up">
                        <img src={Engineering} />
                        <p>Data Infrastructure & <br /> Engineering </p>
                        <span>It's not enough to have data, you also need to have the right tools to manage it day-to-day.</span>
                    </Grid >
                    <Grid item xs={12} sm={12} md={6} lg={6} className="section-3-data" data-aos="fade-up">
                        <img src={Analytics} />
                        <p>Data Analytics</p>
                        <span>From in-house training to tailored service packages, we offer a wide range of data analysis services.</span>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} className="section-3-data" data-aos="fade-up">
                        <img src={Visualization} />
                        <p>Data Visualization</p>
                        <span>In order to make informed decisions, you need to understand your data. We can visualize yours for you.</span>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container >
                    <Grid item xs={12} sm={12} md={12} lg={12} className="contact-btn-section" data-aos="zoom-in">
                        <p>Let us help you</p>
                        <button onClick={() => Nevigate("/contact")}>Contact us</button>
                    </Grid>
                </Grid>
            </div>
            <div className="section-4">
                <Grid container >
                    <Grid item lg={6} md={6} sm={12} xs={12} className="section-4-img" >
                        <img src={approach} data-aos="fade-up" />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} className="approach-section" data-aos="fade-up">
                        <h1>Our <span style={{ color: " #ED51C2" }}>Approach</span></h1>
                        <div className="approaches" data-aos="fade-up">
                            <span>1</span>
                            <div>
                                <p>Business Challenge Review</p>
                                <span>We help you realize the biggest challenges you're facing.  </span>
                            </div>
                        </div>
                        <div className="approaches" data-aos="fade-up">
                            <span>2</span>
                            <div>
                                <p>Data Collection and Preparation</p>
                                <span>Together, we'll collect and format all the relevant data.  </span>
                            </div>
                        </div>
                        <div className="approaches" data-aos="fade-up">
                            <span>3</span>
                            <div>
                                <p>Data Analysis</p>
                                <span>We dive deep into the data, and aim to understand the underlying why. </span>
                            </div>
                        </div>
                        <div className="approaches" data-aos="fade-up">
                            <span>4</span>
                            <div>
                                <p>Business Implementation</p>
                                <span>Implementation often happens in phases paired with vigorous testing. </span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="section-5">
                <Grid container>
                    <Grid item lg={3} md={12} sm={12} xs={12}></Grid>
                    <Grid item lg={6} md={12} sm={12} xs={12} className="section-5-data" >
                        <p data-aos="fade-up">How will you <span style={{ color: " #ED51C2" }}>benefit?</span></p>
                        <span data-aos="fade-up">Understanding the overarching trends of your business and overall market saves you time, money and energy in the long run, and can help you dominate your market. </span>
                    </Grid>
                    <Grid item lg={3} md={12} sm={12} xs={12}></Grid>
                </Grid>
            </div>
            <div className="section-6">
                <Grid container>
                    <Grid item lg={1} md={12} sm={12} xs={12}></Grid>
                    <Grid item lg={10} md={12} sm={12} xs={12}>
                        <Grid container>
                            <Grid lg={4} md={4} sm={6} xs={12} className="section-6-card">
                                <img src={clientImg} data-aos="fade-up"/>
                                <p>Client insights</p>
                            </Grid>
                            <Grid lg={4} md={4} sm={6} xs={12} className="section-6-card">
                                <img src={efficiencyImg} data-aos="fade-up"/>
                                <p>Increased efficiency</p>
                            </Grid>
                            <Grid lg={4} md={4} sm={6} xs={12} className="section-6-card">
                                <img src={automationImg} data-aos="fade-up"/>
                                <p>Process automation</p>
                            </Grid>
                            <Grid lg={4} md={4} sm={6} xs={12} className="section-6-card">
                                <img src={innovationImg} data-aos="fade-up"/>
                                <p>Data-driven innovation</p>
                            </Grid>
                            <Grid lg={4} md={4} sm={6} xs={12} className="section-6-card">
                                <img src={costImg} data-aos="fade-up"/>
                                <p>Reduced costs</p>
                            </Grid>
                            <Grid lg={4} md={4} sm={6} xs={12} className="section-6-card">
                                <img src={MarketImg} data-aos="fade-up"/>
                                <p>Market insights</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={1} md={12} sm={12} xs={12}></Grid>
                </Grid>
            </div>
            <HelpedSection/>
            <HappyClient/>
            </Layout>
        </>
    )
}
export default Home