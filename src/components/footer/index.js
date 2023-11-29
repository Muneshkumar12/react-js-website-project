import React from "react";
import { Grid } from "@mui/material";
import '../../style/footer.css'
import footerRing from '../../images/image-860x1335.jpg'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <Grid container >
                    <Grid item lg={7} md={7} sm={12} xs={12} className="footer-form-sec">
                        <div className="footer-heading">
                            <p data-aos="fade-up">Contact <span>Us</span></p>
                            <span>Whether you have a request, a query, or want to work with us, use the form below to get in touch with our team. </span>
                        </div>
                        <div className="footer-form">
                            <label for="name" >Name:</label>
                            <input type="name" name="name" placeholder="Your name" className="input" />
                            <label for="lastname">Last Name:</label>
                            <input type="name" name="lastname" placeholder="YourLast Name" className="input" />
                            <label for="email">Email:</label>
                            <input type="name" name="email" placeholder="Your Email" className="input" />
                            <label for="message">Message:</label>
                            <textarea className="textarea" name="message" placeholder="Enter Your message"></textarea>
                            <button onClick={() => alert("submit data")}>submit</button>
                        </div>
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12} className="footer-ring">
                        <img src={footerRing} data-aos="fade-up"/>
                    </Grid>
                </Grid>
                <Grid container className="footer-last-sec">
                    <Grid item lg={6} md={6} sm={12} xs={12} className="tech">
                        <p data-aos="fade-up">Tech</p>
                    </Grid>
                    <Grid item lg={2} md={2} sm={12} xs={12} className="contact-details">
                        <p>Contact</p>
                        <span>+1234556677889</span><br />
                        <span>lilo@example.com</span>
                    </Grid>
                    <Grid item lg={2} md={2} sm={12} xs={12} className="contact-details">
                        <p>Location</p>
                        <span>3721 Single Street<br />
                            Quincy, MA 02169</span>
                    </Grid>
                    <Grid item lg={2} md={2} sm={12} xs={12} className="contact-details">
                        <p>Hours</p>
                        <span>I-V         9:00-18:00<br/>
                            VI - VII   Closed</span>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default Footer