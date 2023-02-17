import { useState } from "react";
import oceanicaLogo from "../assets/logos/OceanicaLogo.svg";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {

    const [consent, setConsent] = useState(false);

    const handleChange = (event) => {
        setConsent(event.target.checked);
    }

    return (
        <footer className="Footer">
        <section className="TopSection">
            <div className="BusinessDetails">
                <img src={ oceanicaLogo }></img>
                <div className="BusinessAddress">
                    <p>1 The Marina</p>
                    <p>Lakeside</p>
                    <p>Oceanville</p>
                    <p>WP</p>
                    <p>000-000-000</p>
                </div>
            </div>
            <div className="FooterMenu">
                <ul className="FooterMenu-1">
                    <li id="FooterMenuTitle">About Support</li>
                    <li className="FooterMenuItem-1">Home</li>
                    <li className="FooterMenuItem-2">Tours</li>
                    <li className="FooterMenuItem-3">Pricing</li>
                    <li className="FooterMenuItem-4">Contact &#38; Support</li>
                    <li className="FooterMenuItem-5">FAQs</li>
                </ul>
                <ul className="FooterMenu-2">
                    <li id="FooterMenuTitle">Packages &#38; Deals</li>
                    <li className="FooterMenuItem-1">Travel Blog</li>
                    <li className="FooterMenuItem-2">Subscriptions</li>
                    <li className="FooterMenuItem-3">Popular Destinations</li>
                    <li className="FooterMenuItem-4">Last Minute Packages</li>
                    <li className="FooterMenuItem-5">FAQs</li>
                </ul>
                <ul className="FooterMenu-3">
                    <li id="FooterMenuTitle">Legal</li>
                    <li className="FooterMenuItem-1">Terms &#38; Conditions</li>
                    <li className="FooterMenuItem-2">Privacy Statement</li>
                    <li className="FooterMenuItem-3">Cookie Policy</li>
                    <li className="FooterMenuItem-4">Disclaimer</li>
                    <li className="FooterMenuItem-5">Payment Options</li>
                </ul>
            </div>
        </section>
        <section className="MiddleSection">
            <div className="NewsletterSignUpSection">
                <p>Sign Up to receive 10&#37; off your first package deal&#42;</p>
                <div className="NewsletterSignUpForm">
                    <input className="NewsletterSignUpFormInput" placeholder="Email address"></input>
                    <button className="NewsletterSignUpSubmitButton" disabled={ !consent }>Submit</button>
                </div>
                <div className="NewsletterGDPRSection">
                    <input type="checkbox" id="NewsletterGDPRCheckbox" name="consent" className="NewsletterGDPRCheckbox" onChange={ handleChange }></input>
                    <label htmlFor="NewsletterGDPRCheckbox consent" id="GDPRCheckbox">GDPR STATEMENT</label>
                </div>
                <p className="NewsletterOfferDisclaimer">&#42;Offer valid for a certain period and only on particular packages. T&Cs apply.</p>
            </div>
        </section>
        <section className="BottomSection">
            <div className="SocialIcons">
                <BsTwitter />
                <BsFacebook />
                <BsInstagram />
                <BsYoutube />
                <FaPinterestP />
            </div>
        </section>
        </footer>
    )
};

export default Footer;