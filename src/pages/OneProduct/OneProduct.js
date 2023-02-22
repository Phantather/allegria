import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useLocation, useParams} from "react-router-dom";
import {Icon} from "@chakra-ui/react";
import {BsFillHeartFill} from "react-icons/bs";
import {CustomContext} from "../../utils/Context";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";


const OneProduct = () => {

    const [product, setProduct] = useState({})

    const params = useParams()


    const {changeFavorites, favorites}= useContext(CustomContext)

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        axios(`http://localhost:8080/clothes/${params.id}`)
            .then((res) => setProduct(res.data) )
            .catch((err) => console.log(err))

    },[])

    if (JSON.stringify(product) === '{}') {
        return <h2>...Loading</h2>
    }

    console.log(product.colors)

    return (
        <section className="product">
            <div className="container-small">
                <div className="product__row">
                    <div className="product__slides">
                        <Swiper
                            spaceBetween={10}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                               <div className="product__images">
                                   <img   data-fancybox="gallery"
                                          data-src={`.${product.img[0]}`}
                                          className="button button--secondary" src={`.${product.img[0]}`} alt=""/>
                                   <div className='product__heart' onClick={() => changeFavorites(product)}>
                                       <Icon color={favorites.findIndex(el => el.id === product.id ) > -1 ? 'red' : 'black'} as={BsFillHeartFill}></Icon>
                                   </div>
                               </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product__images">
                                    <img
                                        data-fancybox="gallery"
                                        data-src={`.${product.img[1]}`}
                                        className="button button--secondary"
                                        src={`.${product.img[1]}`} alt=""/>
                                    <div className='product__heart' onClick={() => changeFavorites(product)}>
                                        <Icon color={favorites.findIndex(el => el.id === product.id ) > -1 ? 'red' : 'black'} as={BsFillHeartFill}></Icon>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product__images">
                                    <img
                                        data-fancybox="gallery"
                                        data-src={`.${product.img[2]}`}
                                        className="button button--secondary"
                                        src={`.${product.img[2]}`} alt=""/>
                                    <div className='product__heart' onClick={() => changeFavorites(product)}>
                                        <Icon color={favorites.findIndex(el => el.id === product.id ) > -1 ? 'red' : 'black'} as={BsFillHeartFill}></Icon>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="product__slide">
                                    <img src={`.${product.img[0]}`} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product__slide">
                                    <img src={`.${product.img[1]}`} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product__slide">
                                    <img src={`.${product.img[2]}`} alt=""/>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <div className="product__info">
                        <h2 className="product__title">
                            {product.title}
                        </h2>
                        <p className="product__category">
                            {product.category}
                        </p>
                        <p className="product__price">
                            {product.price} $
                        </p>
                        <div className="product__sizes">
                            Размеры
                            <ul className="product__sizes-list">
                                {
                                    product.sizes.map((item) => (
                                        <li className="product__sizes-item" key={item.id}>
                                            {item.size}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="product__colors">
                            <ul className="product__colors-list">
                                {
                                    product.colors.map((item) => (
                                        <li className="product__colors-item" style={{background: item.color}}/>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="product__btns">
                            <button className="product__btn">
                                добавить в корзину
                            </button>
                            <button className="product__btn">
                                купить в один клик
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OneProduct;