import React from 'react';

const BookLink = ({ message = '', from  } ) => {
    const phoneNumber = '6287762046614';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const handleButtonClick = () => {
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button className={from? "btn bg-color": "btn"}  onClick={handleButtonClick}>
            {from? 'Contact us' :'Book Now' }
        </button>
    );
};

export default BookLink;