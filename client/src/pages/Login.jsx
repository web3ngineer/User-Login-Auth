import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../App';
import axiosInstance from '../utils/axiosInstance';
import { LoaderCircle } from 'lucide-react';


function Login() {

    const {state, dispatch } = useContext(UserContext);

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const loginUser = async (e) => {
        e.preventDefault();
        try {

            if (!email || !password) {
                alert("Please fill all the fields")
                return null;
            }

            setLoading(true)
            const resData = await axiosInstance.post('/user/api/login', { email, password })
            // const resData = await fetch(`/user/api/login`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({ email, password })
            // })

            // .then((res) => res.json())
            // if (!resData.success) throw new Error(resData.message);

            setLoading(false)

            if (resData.status == 401) {
                alert("Invalid Email or Password")
            }
            else if (resData.status == 402) {
                alert('Please fill all the fields')
            }
            else if (resData.status == 201) {
                console.log(resData)
                const data = { userSession: true, username: resData.data.user.username, fullName: resData.data.user.fullName }
                dispatch({ type: "USER", payload: data })
                alert('User LoggedIn Successfully')
                navigate('/')
                // window.location.replace("/");
                // history.push('/')
            } else {
                alert('Something went wrong!')
            }

        } catch (error) {
            console.log("Something went wrong during login")
        }
    }

    useEffect(()=>{
        if(state.userSession){
            navigate('/');
        }
    })

    return (
        <section className='relative flex items-top justify-center min-h-[700px] bg-gray-50 sm:items-center sm:pt-0'>
            <div className='max-w-6xl mx-auto sm:px-6 lg:px-8 sm:text-xl '>
                <div className='grid max-w-screen-xl grid-cols-1 gap-6 p-6 bg-white rounded-lg shadow md:grid-cols-2'>
                    <div className="h-auto p-6 bg-gray-100 rounded-lg ">
                        <div className="flex flex-col items-center justify-center w-full h-full gap-6">
                            <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                        </div>
                    </div>
                    <form method='POST' className="flex flex-col justify-center p-6 border rounded-lg ">
                        <div className='flex items-start pb-4 ml-6 text-2xl font-extrabold '>
                            <h1>Log in</h1>
                        </div>
                        <div className="flex gap-2">
                            <div className='flex items-center justify-center w-4 text-2xl'>
                                <i className="zmdi zmdi-email zmdi-hc-1x"></i>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Email"
                                    className="w-100 mt-2 py-2 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold text-[.8rem] focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex items-center justify-center w-4 text-2xl'>
                                <i className="zmdi zmdi-lock zmdi-hc-1x"></i>
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="password" className="hidden">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    className="w-100 mt-2 py-2 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold text-[.8rem] focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            onClick={loginUser}
                            disabled={loading}
                            className="flex justify-center items-center ml-6 md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-1.5 px-4 rounded-lg mt-6 text-[1rem] hover:bg-orange-600 transition ease-in-out duration-300"
                        >
                            {loading ? <LoaderCircle className="animate-spin" /> : "Login"}
                        </button>
                        {loading && (
                            <p className="mt-4 text-sm text-center text-gray-500">Backend is deployed on free server & spin down with inactivity, which can delay requests by 50 seconds or more.</p>
                        )}
                        <div className='flex pl-6 text-[1rem] mt-4'>
                            <p>Not registered?&nbsp;</p>
                            <Link
                                to={'/register'}
                                className='font-semibold hover:text-black hover:underline'
                            >
                                Register here
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login