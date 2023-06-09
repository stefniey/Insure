import React from "react";
import Banner from '../../component/banner/banner';
import Hero from '../../component/hero/hero';
import Info from '../../component/info/info';


const Home = () => {
    return (
        <div>
            <Hero />
        <section className="section3">
        <Info />
        </section>
        <section className="section3">
        <Banner />
        </section>
        </div>
    );
};

export default Home;