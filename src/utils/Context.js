import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {use} from "i18next";


export const CustomContext = createContext()

export const Context = (props) => {

    const [user, setUser] = useState({
        email: ''
    })

    const [products, setProducts] = useState([]);

    const [favorites, setFavorites] = useState([])

    const [cart, setCart] = useState([])

    const [orders, setOrders] = useState([])


    const changeFavorites = (item) => {
        if (favorites.findIndex(el => el.id === item.id ) > -1) {
            setFavorites(favorites.filter(el => el.id !== item.id))
        } else {
            setFavorites([...favorites, item])
        }

    }

    const changeCart = (item) => {
        if (cart.findIndex(el => el.id === item.id) > - 1) {
            setCart(cart.filter(el => el.id !== item.id))
        } else {
            setCart([...cart, item])
        }
    }


    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }

        if (localStorage.getItem('favorites') !== null) {
            setFavorites(JSON.parse(localStorage.getItem('favorites')))
        }

    }, [])


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const navigate = useNavigate()



    const registerUser = (data) => {
        axios.post('http://localhost:8080/register', data)
            .then((res) => {
                setUser(res.data.user)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                navigate('/')
            } )
            .catch((err) => console.log(err))
    }


    const loginUser = (data) => {
        axios.post('http://localhost:8080/login', data)
            .then((res) => {
                setUser(res.data.user)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                navigate('/')
            } )
            .catch((err) => console.log(err))
    }

    const logOutUser = () => {
        localStorage.removeItem('user')
        setUser({
            email: ''
        })
        navigate('/')
    }

    const getAllProducts = () => {
        axios('http://localhost:8080/clothes')
            .then(({data}) => setProducts(data))
            .catch((erros) => console.log(erros))
    }

    const getAllOrders = () => {
        axios('http://localhost:8080/orders')
            .then(({data}) => setOrders(data))
            .catch((erros) => console.log(erros))
    }

    const value = {
        user,
        products, setProducts,
        getAllProducts,
        registerUser,
        logOutUser,
        loginUser,
        changeFavorites,
        favorites,
        cart,
        changeCart,
        setCart,
        orders,
        setOrders,
        getAllOrders
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}


