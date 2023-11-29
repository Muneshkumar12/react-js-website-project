import React from "react";
import Layout from "../../layout";
import '../../style/blog.css'
import ecommerceImg from '../../images/ecommerceIcon.svg'
import marketingImg from '../../images/marketing.svg'
import wellnessImg from '../../images/Health & Wellness.svg'
import agricultreImg from '../../images/Agriculture.svg'
import retailCardImg from '../../images/Retail-card.jpg'
import agricultreCardImg from '../../images/agriculture-card.jpg'
import customerImg from '../../images/customer.jpg'
import cookingImg from '../../images/cooking.jpg'
import dataIntegrationImg from '../../images/Data integration .jpg'
import technologyImg from '../../images/Technology.jpg'
import { HelpedSection, HappyClient } from "../../components";
import { Grid } from "@mui/material";
const Blog = () => {
    const card = [
        {
            img: retailCardImg,
            cardHeading: "Retail turn around",
            description: "In this case study, we compare three overarching sets of data and figure out how a medium-sized eCommerce business can turn its business around with data.",
            from: "Tech",
            Date: "28/11/2023"

        },
        {
            img: agricultreCardImg,
            cardHeading: "Success in agriculture",
            description: "Many don't recognize how much data the average agricultural business generates, processes and uses.",
            from: "Tech",
            Date: "27/11/2023"

        },
        {
            img: customerImg,
            cardHeading: "Understanding customer experience",
            description: "If you want to deliver top-notch customer service and create experiences, you need data.",
            from: "Tech",
            Date: "26/11/2023"
        },
        {
            img: cookingImg,
            cardHeading: "Scaling up a cooking app",
            description: "The app economy extends beyond simple service transactions. We show how to scale up any app with data",
            from: "Tech",
            Date: "25/11/2023"
        },
        {
            img: dataIntegrationImg,
            cardHeading: "Data integration use cases",
            description: "Too many companies have piles of data but have no idea how to integrate it into their processes and everyday business.",
            from: "Tech",
            Date: "24/11/2023"
        },
        {
            img: technologyImg,
            cardHeading: "Technology trends in 2023",
            description: "Spoiler alert – big data and the related data analysis techniques are going to make waves in 2023.",
            from: "Tech",
            Date: "23/11/2023"
        },
    ]
    return (
        <>
            <Layout>
                <div className="blog-heading-sec">
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="blog-heading">
                            <p >The more you <span>know</span></p>
                            <span>We help companies comb through big data sets and realize otherwise hidden trends, opportunities and threats to their business. </span>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}></Grid>
                    </Grid>
                </div>
                <div className="blog-section-2">
                    <Grid container>
                        <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
                        <Grid item lg={8} md={8} sm={12} xs={12} className="blog-sec-2-heading">
                            <h1 data-aos="fade-up">How will you <span>benefit?</span></h1>
                            <span>Understanding the overarching trends of your business and overall market saves you time, money and energy in the long run, and can help you dominate your market. </span>
                        </Grid>
                        <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={3} md={3} sm={12} xs={12} className="blog-sec-2-card">
                            <img src={ecommerceImg} data-aos="fade-up"/>
                            <p>eCommerce</p>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12} className="blog-sec-2-card">
                            <img src={marketingImg} data-aos="fade-up"/>
                            <p>Marketing</p>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12} className="blog-sec-2-card">
                            <img src={wellnessImg} data-aos="fade-up"/>
                            <p>Health & Wellness</p>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12} className="blog-sec-2-card">
                            <img src={agricultreImg} data-aos="fade-up"/>
                            <p>Agriculture</p>
                        </Grid>
                    </Grid>
                </div>
                <div className="blog-section-3">
                    <p data-aos="fade-up">The more you <span>know</span></p>
                    <Grid container className="blog-sec-3-data" >
                        {
                            card.map((item, index) => {
                                return (
                                    <Grid item lg={6} md={6} sm={12} xs={12} className="blog-sec-3-card" key={index}>
                                        <img src={item.img} data-aos="fade-up"/>
                                        <h1>{item.cardHeading}</h1>
                                        <span>{item.description}</span><br />
                                        <span>{item.from}</span> <br />
                                        <span>{item.Date}</span><br />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </div>
                <HelpedSection />
                <HappyClient />
            </Layout >
        </>
    )
}
export default Blog