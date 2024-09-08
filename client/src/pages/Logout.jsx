import { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../App';
import axiosInstance from '../utils/axiosInstance';
import { LoaderCircle } from 'lucide-react';

export default function Logout() {

    const { state, dispatch } = useContext(UserContext);

    const navigate = useNavigate()
    // console.log(state.userSession)

    useEffect(() => {
        if (state.userSession) {
            axiosInstance.post('/user/api/logout')
                .then((res) => {
                    dispatch({ type: "USER", payload: false })
                    navigate('/login')
                    // window.location.href="/login";
                    // history.push('/login')
                    if (res.status !== 201) {
                        throw new Error("Error while fetching logout", res.error)
                    }
                }).catch((err) => {
                    console.log(err)
                });
        } else {
            navigate('/')
        }
    },[])

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] bg-white">
            <LoaderCircle strokeWidth={2} size={50} className='text-gray-500 animate-spin' />
            <div className="max-w-6xl mx-auto">
                <h1 className='max-w-5xl font-medium text-gray-500 t dark:text-gray-400'>Logging Out...</h1>
            </div>
        </div>
    )
}

