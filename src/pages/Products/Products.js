import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import {CustomContext} from "../../utils/Context";
import {Icon} from "@chakra-ui/react";
import {BsFillHeartFill} from 'react-icons/bs'

const Products = () => {

    const {products, getAllProducts, changeFavorites,favorites} = useContext(CustomContext)

    useEffect(() => {
        getAllProducts()
    },[])


    return (
        <main>
            <section className="products">
                <div className="container">
                    <div className="products__row">
                        {
                            products.map((item) => (
                                <div className="products__card" key={item.id}>

                                    <div className='products__card-heart' onClick={() => changeFavorites(item)}>
                                        <Icon color={favorites.findIndex(el => el.id === item.id ) > -1 ? 'red' : 'black'} as={BsFillHeartFill}></Icon>
                                    </div>


                                    <Link to={`/product/${item.id}`}>
                                        <img src={item.img[0]} alt="" className="products__card-img"/>
                                    </Link>

                                    <h2 className="products__card-title">
                                        {item.title}
                                    </h2>
                                    <p className="products__card-category">
                                        {item.category}
                                    </p>
                                    <p className="products__card-price">
                                        {item.price} $
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Products;