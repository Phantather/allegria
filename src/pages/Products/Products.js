import React, {useEffect, useState} from 'react';
import axios from "axios";

const Products = () => {

    const [products, setProducts] = useState([]);

    const getAllProducts = () => {
        axios('http://localhost:8080/clothes')
            .then(({data}) => setProducts(data))
            .catch((erros) => console.log(erros))
    }

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
                                    <img src={item.images[0]} alt="" className="products__card-img"/>
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