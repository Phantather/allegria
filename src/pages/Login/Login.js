import React, {useContext} from 'react';
import {CustomContext} from "../../utils/Context";
import Form from '../../components/Form/Form'

const Login = () => {

    const {user} = useContext(CustomContext)


    console.log(user)


    return (
        <div className='block'>
            <Form  />
        </div>
    );
};

export default Login;
