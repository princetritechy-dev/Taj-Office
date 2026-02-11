"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
type FAQ = { q: string; a: string };
import Header from "../components/header";
import Footer from "../components/footer";
import "../globals.css";
export default function About() {
    return (
        <main>
            <Header />
            <section className="first commonsec">
                <div className="row">
                    <div className="container">
                        <h2>MORE THAN JUST AN ADDRESS</h2>
                        <p>Anywhere is a virtual office provider for businesses that want a reliable UK address and a service that is properly looked after</p>
                        <h1>About Us</h1>
                        <p>Scroll to explore</p>
                    </div>
                </div>
            </section>
            <section className="second commonsec">
                <div className="row">
                    <div className="container-left">
                        <h2>Quality over <span className="green-color">Quantity</span></h2>
                        <p>OUR CORE PHILOSOPHY</p>
                    </div>
                    <div className="container-right">
                        <p className="bold-heading">We don't run a large network of offices. We work with a small number of locations that we know well and manage carefully.</p>
                        <p>This means you aren't sharing your business address with an unlimited number of companies, and we have a clear understanding of who is using each address.</p>
                        <div className="lowerbox">
                            <h3>Real Experience</h3>
                            <p className="bold-heading">We operate our own virtual office from Albemarle Street in Mayfair, so we understand how the service works in practice.</p>
                            <p>We deal with post arriving every day, client requests, compliance checks, and the practical details that matter when you are using a virtual office as part of a real business.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="third commonsec">
                <div className="third-inner">
                <div className="standard">
                    <div className="heading"><h2>The standards that define us.</h2></div>
                <div className="discover"><p> Scroll to discover </p></div>
                </div> 
                <div className="third-main-inner">  
                    <div className="left">
                        <div className="handled">
                        <h3>Compliance handled in house</h3>
                        <p>Using a business address comes with legal responsibilities. All AML and KYC checks are carried out by our own team and are reviewed properly.</p>
                        </div>
                    <div className="our-promise">
                        <h5>OUR PROMISE</h5>
                        <p>We don't outsource compliance or rush approvals. This protects the reputation of everyone involved.</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right-top">
                            
                            <div className="right-top-left">
                                     <div className="right-top-left-content">
                                <h3>Clear Pricing</h3>
                                <p>We believe virtual office services should be fairly priced and easy to understand. Our fair price promise means you won't be charged inflated fees or unexpected extras.</p>
                                <div className="clear-pricing">
                                <p className="fst common">Sensible</p>
                                <p className="scnd common">Consitsent</p>
                                  </div>
                                    <div className="right-top-left-image">
                                      </div>

                             </div>
                            </div>
                            <div className="right-top-right">

                            </div>
                            <div className="right-bottom">
                                <div className="right bottom left">
                                    <h3>Approachable Team</h3>
                                    <p>We are a small team by choice. That allows us to stay responsive and deal with queries quickly.Support feels personal, not informal.</p>
                                    <p>Meet the team</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>  
            </div>
            </section>
            <section className="fourth commonsec">
                <div className="left">
                    <h2>Our <span className="green-color">Services</span></h2>
                    <p>Registered office and business address services suitable for Companies House, HMRC, and everyday business use.</p>

                    <div className="left-one">
                        <p>Mail Collection</p>
                    </div>
                    <div className="left-two">
                        Forwarding
                    </div>
                    <div className="left-three">
                        Scan and Email
                    </div>
                </div>
                <div className="right">
                    <h3>Meeting Rooms</h3>
                    <p>At selected locations, meeting rooms are available to book when you need a physical space for client meetings or internal sessions.</p>
                    <button>View Locations</button>
                </div>
            </section>
            <Footer />
        </main>
    )
}

