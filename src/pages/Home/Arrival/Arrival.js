import React from 'react';
import img from "../../../assets/images/arrival2.png"

const Arrival = () => {
    return (
        <section className="arrival">
            <div className="arrival__row">
                <div className="arrival__left">
                    <h2 className="arrival__title">
                        new
                        arrival
                    </h2>
                    <p className="arrival__desc">
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip
                    </p>
                    <a href="" className="arrival__link">
                        Смотреть коллекцию
                    </a>
                </div>
                <div className="arrival__right">
                    <div className="arrival__box">
                        <img src={img} alt="" className="arrival__img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Arrival;