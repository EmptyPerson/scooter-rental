import React, { useState } from 'react';
import './FAQ.css';

function FAQPage() {
    const [answer1Visible, setAnswer1Visible] = useState(false);
    const [answer2Visible, setAnswer2Visible] = useState(false);
    const [answer3Visible, setAnswer3Visible] = useState(false);
    const [answer4Visible, setAnswer4Visible] = useState(false);
    const [answer5Visible, setAnswer5Visible] = useState(false);

    function toggleAnswer(answerNumber) {
        switch (answerNumber) {
            case 1:
                setAnswer1Visible(!answer1Visible);
                break;
            case 2:
                setAnswer2Visible(!answer2Visible);
                break;
            case 3:
                setAnswer3Visible(!answer3Visible);
                break;
            case 4:
                setAnswer4Visible(!answer4Visible);
                break;
            case 5:
                setAnswer5Visible(!answer5Visible);
                break;
            default:
                break;
        }
    }

    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <div className="faq">
                <div className="question" onClick={() => toggleAnswer(1)}>How do I rent a scooter?</div>
                <div className={`answer ${answer1Visible ? 'visible' : ''}`}>
                    <p>To rent a scooter, you can either make a reservation online or visit one of our rental locations. Our staff will help you select the right scooter for your needs and provide instructions on how to operate it safely. You will need to provide a valid driver's license and a deposit to rent a scooter.</p>
                </div>

                <div className="question" onClick={() => toggleAnswer(2)}>What kind of scooters do you rent?</div>
                <div className={`answer ${answer2Visible ? 'visible' : ''}`}>
                    <p>We have a variety of scooters available for rent, including automatic and manual models. Our scooters range from 50cc to 150cc and can accommodate one or two riders depending on the model.</p>
                </div>

                <div className="question" onClick={() => toggleAnswer(4)}>Do I need a license to rent a scooter?</div>
                <div className={`answer ${answer4Visible ? 'visible' : ''}`}>
                    <p>Yes, you need a valid driver's license to rent a scooter from us.</p>
                </div>

                <div className="question" onClick={() => toggleAnswer(3)}>How much does it cost to rent a scooter?</div>
                <div className={`answer ${answer3Visible ? 'visible' : ''}`}>
                    <p>The cost of renting a scooter depends on the model and rental duration. Please visit our website or rental location for specific pricing information.</p>
                </div>

                <div className="question" onClick={() => toggleAnswer(5)}>What safety precautions should I take while riding a scooter?</div>
                <div className={`answer ${answer5Visible ? 'visible' : ''}`}>
                    <p>Wear a helmet at all times while riding the scooter. Follow traffic rules and signals, and be cautious of other vehicles on the road. Always keep a safe distance from other vehicles and avoid reckless driving.</p>
                </div>
            </div>
        </div>
    );
}

export default FAQPage;
