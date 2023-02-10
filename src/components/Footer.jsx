import oceanicaLogo from "../assets/logos/OceanicaLogo.svg";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="Footer">
            <section className="BusinessDetails">
                <img src={ oceanicaLogo }></img>
                <div className="BusinessAddress">
                    <p>1 The Marina</p>
                    <p>Lakeside</p>
                    <p>Oceanville</p>
                    <p>WP</p>
                    <p>000-000</p>x
                </div>
            </section>
            <section className="FooterMenu">
                <ul className="FooterMenu-1">
                    <li id="FooterMenuTitle" className="FooterMenuItem">About Support</li>
                    <li className="FooterMenuItem">Home</li>
                    <li className="FooterMenuItem">Tours</li>
                    <li className="FooterMenuItem">Pricing</li>
                    <li className="FooterMenuItem">Contact &#38; Support</li>
                    <li className="FooterMenuItem">FAQs</li>
                </ul>
                <ul className="FooterMenu-2">
                    <li id="FooterMenuTitle" className="FooterMenuItem">Packages &#38; Deals</li>
                    <li className="FooterMenuItem">Travel Blog</li>
                    <li className="FooterMenuItem">Subscriptions</li>
                    <li className="FooterMenuItem">Popular Destinations</li>
                    <li className="FooterMenuItem">Last Minute Packages</li>
                    <li className="FooterMenuItem">FAQs</li>
                </ul>
                <ul className="FooterMenu-3">
                    <li id="FooterMenuTitle" className="FooterMenuItem">Legal</li>
                    <li className="FooterMenuItem">Terms &#38; Conditions</li>
                    <li className="FooterMenuItem">Privacy Statement</li>
                    <li className="FooterMenuItem">Cookie Policy</li>
                    <li className="FooterMenuItem">Disclaimer</li>
                    <li className="FooterMenuItem">Payment Options</li>
                </ul>
            </section>
            <section className="NewsletterSignUpSection">
                <p>Sign Up to receive 10&#37; off your first package deal&#42;</p>
                <div className="NewsletterSignUpForm">
                    <input className="NewsletterSignUpFormInput" placeholder="Email address"></input>
                    <button className="NewsletterSignUpSubmitButton">Submit</button>
                </div>
                <div className="NewsletterGDPRSection">
                    <input type="checkbox" id="NewsletterGDPRCheckbox" className="NewsletterGDPRCheckbox"></input>
                    <label for="NewsletterGDPRCheckbox" id="GDPRCheckbox">GDPR CHECKBOX</label>
                </div>
                <p className="NewsletterOfferDisclaimer">&#42;Offer valid for a certain period and only on particular packages. T&Cs apply.</p>
            </section>
            <section className="SocialIcons">
                <BsTwitter />
                <BsFacebook />
                <BsInstagram />
                <BsYoutube />
                <FaPinterestP />
            </section>
        </footer>
    )
};

export default Footer;