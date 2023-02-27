import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AiOutlineUser} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {BsBag} from "react-icons/bs"
import {RiLockPasswordLine} from 'react-icons/ri'
import {CiLogout} from 'react-icons/ci'
import {CustomContext} from "../../utils/Context";
import {use} from "i18next";
const Profile = () => {

    const {user, logOutUser} = useContext(CustomContext)

    return (
        <section className="profile">
            <div className="container-small">
                <h2 className="profile__title">
                    Мой акаунт
                </h2>
                <div className="profile__row">
                    <ul className="profile__list">
                        <li className="profile__item">
                            <Link to={''} className="profile__link">
                                <AiOutlineUser/>
                                Личная информация
                            </Link>
                        </li>
                        <li className="profile__item">
                            <Link to={''} className="profile__link">
                                <FiMapPin/>
                                Адрес
                            </Link>
                        </li>
                        <li className="profile__item">
                            <Link to={'/favorites'} className="profile__link">
                                <MdOutlineFavoriteBorder/>
                                Лист пожеланий
                            </Link>
                        </li>
                        <li className="profile__item">
                            <Link to={'/orders'} className="profile__link">
                                <BsBag/>
                                История покупок
                            </Link>
                        </li>
                        <li className="profile__item">
                            <Link to={''} className="profile__link">
                                <RiLockPasswordLine/>
                                Изменить пароль
                            </Link>
                        </li>
                        <li className="profile__item">
                            <p className="profile__link" onClick={ logOutUser}>
                                <CiLogout/>
                                Выйти
                            </p>
                        </li>
                    </ul>
                    <div className="profile__info">
                        <p className="profile__info-text">
                            ID:
                            <span>
                              {user.id}
                            </span>

                        </p>
                        <p className="profile__info-text">
                            EMAIL:
                            <span>
                                  {user.email}
                            </span>

                        </p>
                        <p className="profile__info-text">
                            LOGIN:
                            <span>
                                {user.login}
                            </span>

                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;