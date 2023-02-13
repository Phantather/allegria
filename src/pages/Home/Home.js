import React from 'react';
import Begin from "./Begin/Begin";
import Arrival from "./Arrival/Arrival";
import Popular from "./Popular/Popular";

const Home = () => {
    return (
        <main>
            <Begin/>
            <Arrival/>
            <Popular/>
        </main>
    );
};

export default Home;