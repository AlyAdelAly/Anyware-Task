import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../state/loginAcion';
import axios from 'axios';


const Login = () => {

    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const dispatchAction = useDispatch();
    const navigateToSearch = useNavigate();
    const navigateToRegister = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatchAction(loginAction());
        try {
            const url = "http://localhost:8080/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            navigateToSearch('/search');
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    const handleNavigateToRegister = () => {
        navigateToRegister('/register');
    }

    return (
        <div className='grid grid-cols-1 h-screen w-full'>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>Login</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Email</label>
                        <input
                            type="text"
                            name='email'
                            defaultValue={data.email}
                            onChange={handleChange}
                            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input
                            type="password"
                            name='password'
                            defaultValue={data.password}
                            onChange={handleChange}
                            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' />
                    </div>

                    <button className='w-full my-5 py-2 bg-blue-500 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/40 text-white font-semibold rounded-lg'>Login</button>
                    {error && <div className='w-80 p-2 mx-2 bg-red-600/70 text-white rounded-md text-center'>{error}</div>}
                    <div className='flex justify-center text-gray-400 py-2'>
                        <p className='flex items-center px-2'>Not a member?</p>
                        <button onClick={handleNavigateToRegister} className='my-5 py-2  shadow-blue-500/50 hover:text-blue-500/95 text-white font-semibold rounded-lg'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;