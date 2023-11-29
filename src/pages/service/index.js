import React from "react";
import Layout from "../../layout";
import '../../style/service.css'
import { Grid } from "@mui/material";
import serviceHeadingImg from '../../images/serviceHeaderimg.jpg'
import dataConsultImg from '../../images/blBig data consulting.jpg'
import DataInfrastructureImg from '../../images/Data Infrastructure.jpg'
import dataAnylistImg from '../../images/Data Analytics.jpg'
import { HelpedSection,HappyClient } from "../../components";
const Service = () => {
    return (
        <>
            <Layout>
                <div className="Service-heading-sec">
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="Service-heading">
                            <p >Our<br /> <span>services</span></p>
                            <span>We believe in your success and that big data can help you achieve the best results for your business, regardless of your field or target market. </span>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="service-heading-img">
                            <img src={serviceHeadingImg} />
                        </Grid>
                    </Grid>
                </div>
                <div className="service-sec-2">
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="service-sec-2-img">
                            <img src={dataConsultImg} data-aos="fade-up"/>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="service-sec-2-data">
                            <p data-aos="fade-up">Big data<br /> <span>consulting</span></p>
                            <span>With big data, businesses can gain a truly competitive edge to their day-to-day operations. Our big data consulting services focus on offering our clients the technologies, tools and strategies they need to shift through large quantities of market- and company-based data. Our consultants will help you move into new markets, save money and make processes all the more effective and efficient. </span>
                        </Grid>
                    </Grid>
                </div>
                <div className="service-sec-3">
                    <Grid container>
                        <Grid item lg={3} md={3} sm={12} xs={12} className="service-sec-3-data">
                            <h1 data-aos="fade-up">5</h1>
                            <p>Professional consultants</p>
                            <span>All of our consultants have specialist experience in the field.</span>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12} className="service-sec-3-data">
                            <h1 data-aos="fade-up">34</h1>
                            <p>In-house tools available</p>
                            <span>All of our consulting packages come with our in-house tools.</span>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="service-sec-3-data">
                            <h1 data-aos="fade-up">~150</h1>
                            <p>Consultations made</p>
                            <span>Last year, our team was able to help over 100 clients. </span>
                        </Grid>
                    </Grid>
                </div>
                <div className="service-sec-4">
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="service-sec-4-data">
                            <p data-aos="fade-up">Data Infrastructure <br /> <span>& Engineering</span></p>
                            <span>You might have the best product or service in the world, but if you can't effectively organize your data and other information technology infrastructures, you could be missing out on opportunities. Our data engineers help you understand and implement the right infrastructure solution for your brand and business, ensuring all teams have the knowledge to operate the right databases.  </span>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="service-sec-4-img">
                            <img src={DataInfrastructureImg} data-aos="fade-up"/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={3} md={3} sm={12} xs={12} className="service-sec-4-data-2">
                            <h1 data-aos="fade-up">4</h1>
                            <p>Data Engineers</p>
                            <span>All of our data engineers are Boston University graduates.</span>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12} className="service-sec-4-data-2">
                            <h1 data-aos="fade-up">23</h1>
                            <p>Systems engineered</p>
                            <span>We've worked with clients from all walks of life, from tech to agriculture. </span>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="service-sec-4-data-2">
                            <h1 data-aos="fade-up">16</h1>
                            <p>Ongoing projects</p>
                            <span>We keep in touch with our clients and offer ongoing support.  </span>
                        </Grid>
                    </Grid>
                </div>
                {/* section 5 and section 2 styling same that cause i use same classname */}
                <div className="service-sec-5">
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="service-sec-2-img">
                            <img src={dataAnylistImg} data-aos="fade-up"/>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="service-sec-2-data">
                            <p data-aos="fade-up">Data <br /> <span>Analytics</span></p>
                            <span>Effective data analysis helps businesses of all sizes to save money, see the bigger market trends and streamline internal processes. Our team helps you identify the data streams you should be tracking and following, and sets up processes and visualization tools to help you make sense of the data. From one-off consultation to ongoing partnerships, our data analysts are available on short notice to help you steer your business to the right direction. </span>
                        </Grid>
                    </Grid>
                </div>
                {/* section 3 and section 6 styling same that's caus i use same classname */}
                <div className="servive-sec-6">
                    <Grid container>
                        <Grid item lg={3} md={3} sm={12} xs={12} className="service-sec-3-data">
                            <h1 data-aos="fade-up">5</h1>
                            <p>Data<br /> Analysts</p>
                            <span>Our in-house data analysts have a hands-on approach to data. </span>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12} className="service-sec-3-data">
                            <h1 data-aos="fade-up">45</h1>
                            <p>Companies<br /> analyzed</p>
                            <span>Last year, we were able to help nearly 50 companies. </span>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="service-sec-3-data">
                            <h1 data-aos="fade-up">130k</h1>
                            <p>Dollars <br />saved in a day </p>
                            <span>Our consultants were able to save our client $130k in a day.</span>
                        </Grid>
                    </Grid>
                </div>
                <div className="service-sec-7">
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="service-sec-4-data">
                            <p data-aos="fade-up">Data <br/> <span> Visualization</span></p>
                            <span>You've got the data, but struggle in visualizing the market changes and consumer behavior? We've got your back. Our in-house team of UI/UX designers ensure that all data, no matter how complex, can be displayed through visualization tools in ways that actually make sense to shareholders at a glance. </span>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="service-sec-4-img">
                            <img src={DataInfrastructureImg} data-aos="fade-up" />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={3} md={3} sm={12} xs={12} className="service-sec-4-data-2">
                            <h1 data-aos="fade-up">4</h1>
                            <p>Data Engineers</p>
                            <span>All of our data engineers are Boston University graduates.</span>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12} className="service-sec-4-data-2">
                            <h1 data-aos="fade-up">23</h1>
                            <p>Systems engineered</p>
                            <span>We've worked with clients from all walks of life, from tech to agriculture. </span>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="service-sec-4-data-2">
                            <h1 data-aos="fade-up">16</h1>
                            <p>Ongoing projects</p>
                            <span>We keep in touch with our clients and offer ongoing support.  </span>
                        </Grid>
                    </Grid>
                </div>
                <HelpedSection/>
                <HappyClient/>
            </Layout>
        </>
    )
}
export default Service