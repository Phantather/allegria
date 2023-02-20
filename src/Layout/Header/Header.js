import React, {useContext} from 'react';
import {NavLink} from "react-router-dom"
import {useTranslation} from "react-i18next"
import "../../i18n"

//media
import logo from '../../assets/images/logo.png'
import {BiUser} from "react-icons/bi"
import {GrFavorite} from "react-icons/gr"
import {BsBag} from "react-icons/bs"
import {CustomContext} from "../../utils/Context";

const Header = () => {

    const {t, i18n} = useTranslation()
    const {user, logOutUser} = useContext(CustomContext)

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    console.log(user)

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
                            {t("header.link1")}
                        </NavLink>
                        <NavLink to={'/products'} className="header__menu-link">
                            {t("header.link2")}
                        </NavLink>
                        <div className="header__search">
                            <p className="header__search-text">
                                {t("header.search")}
                            </p>
                            <input type="search" className="header__search-input"/>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__langs">
                            <p className="header__lang"
                               style={{color: i18n.language === 'ru' ? 'red' : ''}}
                               onClick={() => changeLanguage('ru')}>RU</p>
                            <p className="header__lang"
                               style={{color: i18n.language === 'en' ? 'red' : ''}}
                               onClick={() => changeLanguage('en')}>EN</p>
                        </div>
                        <div className="header__pages">

                            {
                                user.email.length ?   <span onClick={logOutUser} className="header__pages-link">
                                   Выйти
                                </span> :
                                    <NavLink to={'/register'} className="header__pages-link">
                                        <BiUser/>
                                    </NavLink>
                            }

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