import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation, useParams} from "react-router-dom";

const OneProduct = () => {

    const [product, setProduct] = useState({})

    const params = useParams()

    useEffect(() => {
        axios(`http://localhost:8080/clothes/${params.id}`)
            .then((res) => setProduct(res.data) )
            .catch((err) => console.log(err))

    },[])

    if (JSON.stringify(product) === '{}') {
        return <h2>...Loading</h2>
    }


    return (
        <section className="product">
            <div className="container-small">
                <div className="product__row">
                    <div className="product__images">
                        <img src={`.${product.img[0]}`} alt=""/>
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