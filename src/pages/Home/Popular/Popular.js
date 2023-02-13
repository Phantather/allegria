import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"
import { Navigation } from "swiper";
import {SlArrowRight, SlArrowLeft} from "react-icons/sl"

const Popular = () => {
    return (
        <section className="popular">
            <div className="container">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={40}
                    navigation={{
                        nextEl: ".popular-next",
                        prevEl: ".popular-prev"
                    }}
                    loop={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="products__card">
                            <img src="https://static.zara.net/photos///2023/V/0/1/p/6840/052/400/2/w/271/6840052400_1_1_1.jpg?ts=1675335018457" alt="" className="products__card-img"/>
                            <h3 className="products__card-title">
                                REPlay
                            </h3>
                            <p className="products__card-category">
                                Classic shoes
                            </p>
                            <p className="products__card-price">
380
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src="https://static.zara.net/photos///2023/V/0/1/p/6840/052/400/2/w/271/6840052400_1_1_1.jpg?ts=1675335018457" alt="" className="products__card-img"/>
                            <h3 className="products__card-title">
                                REPlay
                            </h3>
                            <p className="products__card-category">
                                Classic shoes
                            </p>
                            <p className="products__card-price">
                                380
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src="https://static.zara.net/photos///2023/V/0/1/p/6840/052/400/2/w/271/6840052400_1_1_1.jpg?ts=1675335018457" alt="" className="products__card-img"/>
                            <h3 className="products__card-title">
                                REPlay
                            </h3>
                            <p className="products__card-category">
                                Classic shoes
                            </p>
                            <p className="products__card-price">
                                380
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src="https://static.zara.net/photos///2023/V/0/1/p/6840/052/400/2/w/271/6840052400_1_1_1.jpg?ts=1675335018457" alt="" className="products__card-img"/>
                            <h3 className="products__card-title">
                                REPlay
                            </h3>
                            <p className="products__card-category">
                                Classic shoes
                            </p>
                            <p className="products__card-price">
                                380
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src="https://static.zara.net/photos///2023/V/0/1/p/6840/052/400/2/w/271/6840052400_1_1_1.jpg?ts=1675335018457" alt="" className="products__card-img"/>
                            <h3 className="products__card-title">
                                REPlay
                            </h3>
                            <p className="products__card-category">
                                Classic shoes
                            </p>
                            <p className="products__card-price">
                                380
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src="https://static.zara.net/photos///2023/V/0/1/p/6840/052/400/2/w/271/6840052400_1_1_1.jpg?ts=1675335018457" alt="" className="products__card-img"/>
                            <h3 className="products__card-title">
                                REPlay
                            </h3>
                            <p className="products__card-category">
                                Classic shoes
                            </p>
                            <p className="products__card-price">
                                380
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="products__card">
                            <img src="https://static.zara.net/photos///2023/V/0/1/p/6840/052/400/2/w/271/6840052400_1_1_1.jpg?ts=1675335018457" alt="" className="products__card-img"/>
                            <h3 className="products__card-title">
                                REPlay
                            </h3>
                            <p className="products__card-category">
                                Classic shoes
                            </p>
                            <p className="products__card-price">
                                380
                            </p>
                        </div>
                    </SwiperSlide>
                    <button className="popular-btn popular-prev">
                        <SlArrowLeft/>
                    </button>
                    <button className="popular-btn popular-next">
                        <SlArrowRight/>
                    </button>
                </Swiper>
            </div>
        </section>
    );
};

export default Popular;