import React from 'react';
import {BsArrowRight} from 'react-icons/bs'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <h2 className="footer__title">
                    Будьте в курсе событий
                </h2>
                <div className="footer__search">
                    <input type="text" className="footer__search-input"/>
                    <button className="footer__search-btn">
                        <BsArrowRight/>
                    </button>
                </div>
                <div className="footer__links">
                    <Link to={'/about'} className='footer__link'>
                        О нас
                    </Link>
                    <Link to={'/questions'} className='footer__link'>
                        Распространенные вопросы
                    </Link>
                    <Link to={'/brands'} className='footer__link'>
                        Бренды
                    </Link>
                </div>
            </nav>
            <div className="footer__bottom">

                    <p className="footer__bottom-text">
                        Все права защищены  © 2020 Allegria.com
                    </p>
                    <p className="footer__bottom-text">
                        Дизайн и разработка:
                    </p>


            </div>
        </footer>
    );
};

export default Footer;