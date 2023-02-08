import React from 'react';
import {NavLink} from "react-router-dom"

//media
import logo from '../../assets/images/logo.png'
import {BiUser} from "react-icons/bi"
import {GrFavorite} from "react-icons/gr"
import {BsBag} from "react-icons/bs"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <NavLink to={'/'}>
                        <h1 className="header__title">
                            <img src={logo} alt="" className="header__title-logo"/>
                        </h1>
                    </NavLink>
                    <div className="header__menu">
                        <NavLink to={'/'} className="header__menu-link">
                            Женщины
                        </NavLink>
                        <NavLink to={'/'} className="header__menu-link">
                            Мужчины
                        </NavLink>
                        <div className="header__search">
                            <p className="header__search-text">
                                Поиск
                            </p>
                            <input type="search" className="header__search-input"/>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__langs">
                            <p className="header__lang">RU</p>
                            <p className="header__lang">EN</p>
                        </div>
                        <div className="header__pages">
                            <NavLink to={'/register'} className="header__pages-link">
                                <BiUser/>
                            </NavLink>
                            <NavLink to={'/favorites'} className="header__pages-link">
                                <GrFavorite/>
                            </NavLink>
                            <NavLink to={'/cart'} className="header__pages-link">
                                <BsBag/>
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;