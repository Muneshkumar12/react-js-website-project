import React from "react";
import Layout from "../../layout";
import { Grid } from "@mui/material";
import '../../style/contact.css'
const Contact = () => {
    return (
        <>
            <Layout>
                <div className="contact-heading-sec">
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="contact-heading">
                            <p >Let’s get<br />  <span>in touch</span></p>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}></Grid>
                    </Grid>
                </div>
                <div className="contact-section-2">
                    <Grid container>
                        <Grid item lg={5} md={5} sm={12} xs={12} className="contact-sec-2-data">
                            <h1 data-aos="fade-up">Location</h1>
                            <p>Set up a meeting with our consultants, or simply stop by if you're in the neighborhood.</p>
                            <p>123 your street name, <br />
                                City name, Country, 123456</p>
                            <div>
                                <Grid container>
                                    <Grid item lg={6} md={6} sm={12} xs={12} className="other-contact-data">
                                        <p>Hours</p>
                                        <span>I-V 9:00-18:00</span>
                                        <span>VI - VII Closed</span>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12} className="other-contact-data">
                                        <p>Contacts</p>
                                        <span>+1234556677889</span> 
                                        <span>Tech@example.com</span>
                                    </Grid>
                                </Grid >
                            </div>
                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12} className="contact-sec-2-data">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-aos="fade-up"></iframe>
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        </>
    )
}
export default Contact