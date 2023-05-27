import React, {useState} from 'react';
import "./ContactPage.css";
import BookLink from "./partial/BookLink";

const ContactPage = () => {
    const [userName, setUserName] = useState('')
    const message = `Hello.  ${userName ? "I'm " + userName + '.': ''} Could you help me with scooter?`

    return (
        <div className="contact-page">
            <h2>Contact Us</h2>
            <div className="contact-info">
                <p>
                    Please feel free to reach out to, you can fill out the form below, and we will get back
                    to you as soon as possible:
                </p>
                <div className="submit-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name"
                               value={userName}
                               required
                            onChange={
                            (event)=>
                                setUserName(event.target.value)
                        }
                        />
                    </div>
                    <BookLink from={1} message={message}/>
                </div>
            </div>

            <div className="map">
                <h3>Location</h3>
                <p>We cover all of Bali Island:</p>
                <iframe
                    title="Bali Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.217954062018!2d115.17225181426636!3d-8.409518393971373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f62bb8f634d%3A0x39be6f3d5069e87d!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1622086886041!5m2!1sen!2sus"
                    max-width="600"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactPage;