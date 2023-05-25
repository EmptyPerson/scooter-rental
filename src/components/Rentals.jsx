import React from 'react';
import './Rentals.css';
import ScooterCard from './partial/ScooterCard';
import {ProductFactory} from "./util/ProductFactory";
import {nmaxImages, pcxImages, scoopyImages, varian125Images, varian160Images, xmaxImages} from "./util/productImg";

const Rentals = () => {

    const year = new Date().getFullYear()
    const prevYear = year - 1 //its little bit about marketing coz need new bikes

    const PCX = ProductFactory(
        'HONDA PCX',
        pcxImages,
        [year, prevYear],
        ['ABS', 'CBS']
    );

    const Scoopy = ProductFactory(
        'HONDA SCOOPY',
        scoopyImages,
        [year, prevYear],
        ['ABS', 'CBS']
    );
    const Varian125 = ProductFactory(
        'HONDA Varian 125',
        varian125Images,
        [year, prevYear],
        ['ABS', 'CBS']
    );
    const Varian160 = ProductFactory(
        'HONDA Varian 160',
        varian160Images,
        [year, prevYear],
        ['ABS', 'CBS']
    );

    const Nmax = ProductFactory(
        'YAMAHA NMAX',
        nmaxImages,
        [year, prevYear],
        ['ABS', 'CBS']
    );

    const Xmax = ProductFactory(
        'YAMAHA XMAX',
        xmaxImages,
        [year, prevYear],
        ['ABS', 'CBS']
    );

    return (
        <div className='product-container'>
            <div className="product-context">
                <h1>SCOOTER SELECTION</h1>
                <p>
                    Our rental process is simple and straightforward. Just choose the scooter that best fits your needs, provide us with your information and payment details, and you'll be on your way in no time. We offer flexible rental periods, so you can rent a scooter for a few hours or a few days depending on your plans.
                </p>
                <p>
                    All of our scooters are regularly maintained and kept in excellent condition. They come equipped with all the necessary safety features, including helmets and safety locks, to ensure your ride is both comfortable.
                </p>
            </div>
            <ScooterCard product={Nmax}/>
            <ScooterCard product={Xmax}/>
            <ScooterCard product={PCX}/>
            <ScooterCard product={Scoopy}/>
            <ScooterCard product={Varian125}/>
            <ScooterCard product={Varian160}/>
        </div>
    );
};

export default Rentals;