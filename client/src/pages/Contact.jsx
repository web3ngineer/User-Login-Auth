import {useEffect, useState, useContext} from 'react'
import axiosInstance from '../utils/axiosInstance';
import { UserContext } from '../App';

export default function Contact() {

    const {state} = useContext(UserContext);
    // console.log(state)
    const [userData, setUserData] = useState({
        fullName:'',
        email:'', 
        phoneNumber:'', 
        message:'',
    });

    const callContactPage = async() => {
        try {
            const resData = await axiosInstance.get('/user/api/contact-data', userData)
            const { user }= resData.data
            // console.log(user)
            setUserData({...userData, fullName:user.fullName, email:user.email, phoneNumber:user.phoneNumber});

        } catch (error) {
          console.log("Error while fetching current-user ",error)
        }
    }

    useEffect(() => {
        if(state.userSession){
            callContactPage();
        }
    }, [])

//************ Handle inputs *************/

    const handleInputs = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setUserData({...userData, [name]:value})
    }

//*************** Post Data to database ******************/
    const submitForm = async()=> {

        const {fullName, email, phoneNumber, message} = userData;
        try {
            const resData = await axiosInstance.post('/user/api/contact-post', {fullName, email, phoneNumber, message})
                
            // const resData = await fetch('/user/api/contact-post',
            //     {method: "POST",
            //         headers:{
            //             "Content-Type": "application/json"
            //             },
            //         body: JSON.stringify({fullName, email, phoneNumber, message})
            //     }
            // );

            if(resData.status == 201){
                alert('Your Message has been sent successfully!');
                setUserData({...userData, message:""})
            }
            else if(resData.status == 402){
                alert("Please Fill All the Fields")
            }
            else if(resData.status == 401){
                alert("Please Try again")
            }
            else{
                alert("Something went wrong")
            }
                    
        } catch (error) {
            console.log("Error while sending contact details", error)
        }
    }
    

    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0 ">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 p-6 border rounded-lg md:grid-cols-2">
                        <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">
                                Get in touch: 
                            </h1>
                            <p className="mt-2 text-lg font-medium text-gray-600 text-normal sm:text-xl">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                                    Acme Inc, Street, State, Postal Code
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                                    +44 1234567890
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                                    info@acme.org
                                </div>
                            </div>
                        </div>
                        <form className="p-6 flex flex-col justify-center text-[.9rem]"
                            action="https://formspree.io/f/mvoeoyye"
                            method = "POST"
                        >
                            <div className="flex flex-col">
                                <label htmlFor="fullName" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="fullName"
                                    name="fullName"
                                    id="fullName"
                                    value={userData?.fullName || ""}
                                    onChange = {handleInputs}
                                    placeholder="Full Name"
                                    className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={userData?.email || ""}
                                    onChange = {handleInputs}
                                    placeholder="Email"
                                    className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="phoneNumber" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="number"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    value={userData?.phoneNumber || ""}
                                    onChange = {handleInputs}
                                    placeholder="Mobile Number"
                                    className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="message" className="hidden">
                                    Message
                                </label>
                                <textarea
                                    type="text"
                                    name="message"
                                    id="message"
                                    value={userData?.message || ""}
                                    onChange = {handleInputs}
                                    placeholder="Message"
                                    className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={submitForm}
                                className="px-6 py-3 mt-3 font-bold text-white transition duration-300 ease-in-out bg-orange-700 rounded-lg md:w-32 hover:bg-blue-dark hover:bg-orange-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}