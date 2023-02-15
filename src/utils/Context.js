import {createContext, useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'


export const CustomContext = createContext()

export const Context = (props) => {

    const [user, setUser] = useState({
        email: ''
    })

    const navigate = useNavigate()

    const registerUser = (data) => {
        axios.post('http://localhost:8080/register', data)
            .then((res) => {
                setUser(res.data.user)
                navigate('/')
            } )
            .catch((err) => console.log(err))
    }

    const value = {
        user,
        registerUser
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}


