import React from 'react';
import "./Home.css"
import myWallpaper from '../assets/img/wallpaper.png';

const Home = () => {
    return (
            <div className="home_container"
                 style={{
                     backgroundImage: `url(${myWallpaper})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                 }}
            >
                <div className="home_hero_section">
                    <h1>Ride with style</h1>
                    <p>
                        Discover Bali in style on our sleek and reliable scooters! Our wide selection of scooters offers you the freedom and adventure to explore the island your way. With easy booking, affordable rates, and dependable quality, renting a scooter has never been easier. So, book now and ride with style!
                    </p>
                </div>
            </div>
    );
};

export default Home;