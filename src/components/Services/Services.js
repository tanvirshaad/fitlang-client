import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Country from '../Country/Country';
import './Services.css';

const Services = () => {
    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);
    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    };

    return (
        <div>
            <h2 className="text-center my-5 fw-bold fs-1">
                Our <span className="feauterd-text">Services</span>
            </h2>
            <div className="d-flex">
                <div className="grid-layout">
                    {countries.map((country) => (
                        <Country
                            handleAddCourse={handleAddCourse}
                            key={country.id}
                            country={country}
                        ></Country>
                    ))}
                </div>

                <div className="cart-container col-lg-3 text-center">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Services;
