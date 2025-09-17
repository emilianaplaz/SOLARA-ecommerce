import React from 'react';
import Header from '../components/Header'; 

export default function LandingPage () {
    return (
        <div
            className="main-section"
            // style={{
            //     backgroundImage: `url(${background})`, // Dynamically inserts the URL Webpack/Vite provides
            // }}
        >
            <Header />
            <h1>Created for skin</h1>
            <p>Your journey begins here</p>
        </div>
    );
};

