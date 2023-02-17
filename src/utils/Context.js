import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'


export const CustomContext = createContext()

export const Context = (props) => {

    const [user, setUser] = useState({
        email: ''
    })

    const [products, setProducts] = useState([]);


    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }

    }, [])


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

    const value = {
        user,
        products, setProducts,
        getAllProducts,
        registerUser,
        logOutUser,
        loginUser
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}


