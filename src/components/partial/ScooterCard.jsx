import React, { useState } from 'react';
import './ScooterCard.css';
import BookLink from "./BookLink";

const ScooterCard = ({ product }) => {
    const [selectedYear, setSelectedYear] = useState(product.year[0]);
    const [selectedColor, setSelectedColor] = useState(Object.keys(product.colorImageMap)[0]);
    const [selectedBrakeSystem, setSelectedBrakeSystem] = useState(product.brakeSystem[0]);
    let message = `
        Hello! I would like to rent your scooter with the following parameters:
        ${'Modal name: '+ product.productName}, 
        ${'Modal year: '+ selectedYear},
        ${'Color: '+ selectedColor},
        ${'Brake system: '+ selectedBrakeSystem}
    `
    const handleSelectChange = (event, setState) => {
        setState(event.target.value);
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.colorImageMap[selectedColor]} alt={product.productName} />
            </div>
            <div className="product-info">
                <h2>{product.productName}</h2>
                <div className="select-content">
                    {product.year.length > 0 && (
                        <div className="select-container">
                            <p>Modal year:</p>
                            <select
                                className="custom-select"
                                value={selectedYear}
                                onChange={(event) => {
                                    handleSelectChange(event, setSelectedYear);
                                }}
                            >
                                {product.year.map((value) => (
                                    <option className="custom-option" key={value} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {product.brakeSystem.length > 0 && (
                        <div className="select-container">
                            <p>Brake System:</p>
                            <select
                                className="custom-select"
                                value={selectedBrakeSystem}
                                onChange={(event) => {
                                    handleSelectChange(event, setSelectedBrakeSystem);
                                }}
                            >
                                {product.brakeSystem.map((value) => (
                                    <option className="custom-option" key={value} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>

                    )}
                {Object.keys(product.colorImageMap).length > 0 && (
                    <div className="select-container">
                        <p>Color:</p>
                        <select
                            className="custom-select"
                            value={selectedColor}
                            onChange={(event) => {
                                handleSelectChange(event, setSelectedColor);
                            }}
                        >
                            {Object.keys(product.colorImageMap).map((key) => (
                                <option className="custom-option" key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                    <div className="select-container">
                        <p>Website: </p>
                        <a href='https://powersports.honda.com/motorcycle/scooter/' target="_blank"  rel="noreferrer">More</a>
                    </div>
                </div>
            </div>
            <BookLink message={message}/>
        </div>
    );
};

export default ScooterCard;
