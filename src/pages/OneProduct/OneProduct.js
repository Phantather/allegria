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

    console.log(product)

    return (
        <div>
            One product
           <h2>{product.title}</h2>
        </div>
    );
};

export default OneProduct;