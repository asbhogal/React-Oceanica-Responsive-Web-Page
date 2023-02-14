import Header from "./Header";
import ActivityCard from "./ActivityCard";
import TestimonialCard from "./TestimonialCard";

import headerAndHeroImg from "../assets/images/BackgroundHeroImg.jpg";
import activitySectionAccent from "../assets/images/historic-destinations-accent.svg";
import testimonialSectionAccent from "../assets/images/rejuvenation-accent.svg";

const Container = () => {
    return (
        <main className="ContainerBody">
            <div className="HeaderAndHeroSection">
                <img className="HeaderAndHeroImg" src={ headerAndHeroImg }></img>
                <Header />
                <section className="HeroSection">
                    <div className="HeroSectionContent">
                        <div className="LeftSideContent">
                            <h1 className="HeroTitle">Discover the water</h1>
                            <h2 className="HeroSubTitle">From pristine waters to majestic forests...we have it all</h2>
                            <div className="SideBottomLine"></div>
                            <div className="CTAHeroSection">
                                <i className="Arrow"></i>
                                <p>Start Your Journey Today</p>
                            </div>
                        </div>
                        <div className="RightSideContent">
                            <div className="CurrentTours">
                                <ul className="CurrentToursList">
                                    <li className="CurrentToursListItem">
                                        <h3>Saltwater Fishing</h3>
                                        <p>Love fishing? With some of the best spots available year-round, from coastline to the deep sea, you won’t be short for choice.</p>
                                    </li>
                                    <li className="CurrentToursListItem">
                                        <h3>Saltwater Fishing</h3>
                                        <p>Love fishing? With some of the best spots available year-round, from coastline to the deep sea, you won’t be short for choice.</p>
                                    </li>
                                    <li className="CurrentToursListItem">
                                        <h3>Saltwater Fishing</h3>
                                        <p>Love fishing? With some of the best spots available year-round, from coastline to the deep sea, you won’t be short for choice.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="ActivitiesSection">
                <img className="ActivityCardAccent" src={ activitySectionAccent }></img>
                <ActivityCard />
            </section>
            <section className="TestimonialsSection">
                <img className="TestimonialCardAccent" src={ testimonialSectionAccent }></img>
                <h2 className="TestimonialHeader">Our Testimonials</h2>
                <div className="TestimonialSlider">
                    <TestimonialCard />
                </div>
            </section>

        </main>
    )
};

export default Container;