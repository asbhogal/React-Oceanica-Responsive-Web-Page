import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="Footer">
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