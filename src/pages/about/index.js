import React from "react";
// import { Navbar } from "../../components";
import aboutHeader from '../../images/about section.jpg'
import founderImg from '../../images/founder.jpg'
import employOne from '../../images/employees1.jpg'
import employTwo from '../../images/employees2.jpg'
import employThree from '../../images/employees3x.jpg'
import globalImg from '../../images/global.svg'
import valueImg from '../../images/valueImg.svg'
import favorableImg from '../../images/Favorable terms.svg'
import standardImg from '../../images/standards.svg'
import Layout from "../../layout";
import '../../style/about.css'
import { HappyClient } from "../../components";
import { Grid } from "@mui/material";
const About = () => {
    return (
        <>
            {/* <Navbar/> */}
            <Layout>
                <div className="about-header">
                    <Grid container>
                        <Grid item lg={5} md={5} sm={12} xs={12} className="mission-heading">
                            <p><span>Our</span> mission</p>
                            <span>We help companies comb through big data sets and realize otherwise hidden trends, opportunities and threats to their business. </span>
                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12} className="mission-image">
                            <img src={aboutHeader} data-aos="flip-left" />
                        </Grid>
                    </Grid>
                </div>
                <div className="about-section-2">
                    <Grid container>
                        <Grid item lg={3} md={2} sm={1} xs={12} ></Grid>
                        <Grid item lg={6} md={8} sm={10} xs={12} className="about-tech" >
                            <p data-aos="fade-up">About <span>Tech</span></p>
                            <span>We believe in your success and that big data can help you achieve the best results for your business, regardless of your field or target market. </span>
                        </Grid>
                        <Grid item lg={3} md={2} sm={1} xs={12}></Grid>
                    </Grid>
                    <Grid container className="about-section-3">
                        <Grid lg={6} md={6} sm={12} xs={12} className="founder-img">
                            <img src={founderImg} data-aos="fade-up" />
                        </Grid>
                        <Grid lg={6} md={6} sm={12} xs={12} className="founder-data">
                            <div>
                                <p data-aos="fade-up">Our founder</p>
                                <span>Tech Maximillan realized that the world of data analysis was a hot mess while working for a big international corporation as an intern. Seeking to make it easier for companies worldwide to make sense of data, she set on a mission to change the world of data herself. </span>
                            </div>
                            <div>
                                <p data-aos="fade-up">Our story</p>
                                <span>Tech was initially just one woman with a laptop and a desire to make people understand data better, and make more informed choices in their daily life. Quickly, what was meant to be a side project grew into a viable business with a handful of employees. At first, Tech's main focus was data analysis and visualization, but slowly the team grew and was able to focus more on projects requiring big data expertize.
                                    Now, Tech is working together with esteemed brand names to make sense of the mountains of data available to us in the digital sphere. </span>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="about-section-4">
                    <Grid container >
                        <Grid item lg={4} md={4} sm={12} xs={12} className="about-sec-4-data">
                            <h1 data-aos="fade-up">22</h1>
                            <p>Qualified employees</p>
                            <span>Not only is our team full of professionals – we're a fun bunch, too.</span>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12} className="about-sec-4-data">
                            <h1 data-aos="fade-up">117</h1>
                            <p>Projects delivered</p>
                            <span>Last year, we successfully completed over 100 individual projects worldwide.</span>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12} className="about-sec-4-data">
                            <h1 data-aos="fade-up">4</h1>
                            <p>Key industries</p>
                            <span>We have specialist experience in a handful of industries.</span>
                        </Grid>
                    </Grid>
                </div>
                <div className="about-section-5">
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="employ-data">
                            <h1 data-aos="fade-up">Who are <span>we</span></h1>
                            <div>
                                <p data-aos="fade-up">Data Analysts</p>
                                <span>Our in-house data analysts have a hands-on approach to data, with heavy emphasis on clear communication with the client. </span>
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="employ-img" >
                            <img src={employOne} data-aos="fade-up" />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="employ-data">
                            <div>
                                <p data-aos="fade-up">Data Engineers</p>
                                <span>All of our data engineers are Boston University graduates, and undergo our in-house developed training program upon joining the team.</span>
                            </div>
                            <div>
                                <p data-aos="fade-up">Designers</p>
                                <span>Our designers have an extensive background in data analysis, and often work together with our other specialists on various projects. </span>
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="employ-img">
                            <img src={employTwo} data-aos="fade-up" />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="employ-data">
                            <div>
                                <p data-aos="fade-up">Consultants</p>
                                <span>All of our consultants have specialist experience in the field of data science, and aim to understand the data needs of your business. </span>
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="employ-img">
                            <img src={employThree} data-aos="fade-up" />
                        </Grid>
                    </Grid>
                </div>
                <div className="about-section-6">
                    <Grid container>
                        <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
                        <Grid item lg={8} md={8} sm={12} xs={12}>
                            <div>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className="about-sec-6-heading">
                                        <h1 data-aos="fade-up">Why <span>choose</span> us?</h1>
                                        <span>We believe in your success and that big data can help you achieve the best results for your business, regardless of your field or target market. </span>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12} className="about-sec-6-card">
                                        <img src={globalImg} data-aos="fade-up" />
                                        <p>Global experience</p>
                                        <span>We have worked with multinational companies, as well as smaller businesses from all continents. </span>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12} className="about-sec-6-card">
                                        <img src={valueImg} data-aos="fade-up" />
                                        <p>Quality for value</p>
                                        <span>Our motto is to provide only the highest quality to our clients, no matter the circumstances.</span>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12} className="about-sec-6-card">
                                        <img src={favorableImg} data-aos="fade-up" />
                                        <p>Favorable terms</p>
                                        <span>Each project we work on is tailored to the particular client's exact needs, not the other way around.</span>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12} className="about-sec-6-card">
                                        <img src={standardImg} data-aos="fade-up" />
                                        <p>High standards</p>
                                        <span>We take data seriously, meaning that we only deliver work that we can be proud of.</span>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
                    </Grid>
                </div>
                <HappyClient />
            </Layout>
        </>
    )
}
export default About