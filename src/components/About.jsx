import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id='about'>
            <div className='about_container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>About Our Company</h2>
                        <p>Our company provides scooter rental services on the island of Bali. We are a reliable and
                            trusted provider of scooters for tourists and locals alike.</p>
                        <p>We have a large fleet of well-maintained scooters that are perfect for exploring Bali's
                            beautiful scenery and culture. Our team is made up of experienced professionals who are
                            dedicated to providing exceptional customer service and ensuring that our clients have an
                            enjoyable and safe experience on the road.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h3>Why Choose Us?</h3>
                    </div>
                    <div className='col-md-4'>
                            <h4>Convenient Locations</h4>
                            <p>We have multiple locations across Bali, making it easy for you to rent a scooter wherever
                                you are.</p>
                    </div>
                    <div className='col-md-4'>
                            <h4>Competitive Prices</h4>
                            <p>We offer some of the best prices for scooter rentals on Bali, without compromising on the
                                quality of our service.</p>
                    </div>
                    <div className='col-md-4'>
                            <h4>Top-Quality Scooters</h4>
                            <p>All of our scooters are regularly maintained and inspected to ensure that they are in top
                                condition.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h3>Our Fleet</h3>
                    </div>
                    <div className='col-md-6'>
                        <p>Our fleet of scooters includes models that are suitable for all types of riders, from
                            beginners to experienced riders. We offer automatic and manual scooters, as well as helmets
                            and other safety gear for your convenience.</p>
                    </div>
                </div>
            </div>
        </section>

);
};

export default About;