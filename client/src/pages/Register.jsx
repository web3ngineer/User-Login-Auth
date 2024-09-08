import { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance';
import { LoaderCircle } from 'lucide-react';
import { UserContext } from '../App';



function Register() {
    const navigate = useNavigate()
const {state} = useContext(UserContext);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber:'',
        work:'',
        username:'',
    })
    const [loading, setLoading] = useState(false)

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setFormData({...formData, [name]:value})
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {fullName, email, password, confirmPassword, phoneNumber, work, username} = formData;
        // console.log(formData)
        if(!fullName || !email || !password || !confirmPassword || !phoneNumber || work || !username){
            alert("Please fill all the fields")
            return null;
        }

        if(password !== confirmPassword){
            alert("Passwords do not match")
        }
        else{
            try {
                setLoading(true)
                const resData = await axiosInstance.post('/user/api/register', formData)
                // const resData = await fetch(`/user/api/register`,
                //     {method: "POST",
                //         headers:{
                //             "Content-Type": "application/json"
                //             },
                //         body: JSON.stringify({fullName, email, phoneNumber, work, password, confirmPassword, username})
                //     }
                // )
                // .then((res)=> res.json())
                // .catch((error)=>{console.log(error)})
                // console.log(resData);
                setLoading(false)
                if(resData.status == 401){
                    // console.log("User already exists")
                    alert("User already exists")
                }
                else if(resData.status == 402){
                    alert('Please fill all the fields')
                }
                else if(resData.status == 500){
                    // console.log("Something went wrong while registering new user")
                    alert("Something went wrong while registering new user")
                }
                else if(resData.status == 201){
                    console.log("Registration Successful")
                    alert("Registration Successful")
                    window.location.replace("/login");
                }
            } catch (error) {
                console.log(`Something went wrong while registering!! ${error}`)
            }
        }
    }

    useEffect(()=> {
        if(state.userSession){
            navigate('/')
        }
    },[])

  return (
    <section className='relative flex items-top justify-center min-h-[700px] bg-gray-50 sm:items-center sm:pt-0'>
        <div className='max-w-6xl mx-auto sm:px-6 lg:px-8 sm:text-xl'>
            <div className='grid grid-cols-1 gap-6 p-6 bg-white rounded-lg shadow md:grid-cols-2'>
                <form method='POST' className="flex flex-col justify-center p-6 border rounded-lg ">
                    <div className='flex items-start pb-4 ml-6 text-2xl font-extrabold '>
                      <h1>Sign up</h1>
                    </div>
                    <div className="flex gap-2 gap">
                        <div className='flex items-center justify-center w-4 text-2xl'>
                            <i className="zmdi zmdi-account zmdi-hc-1x"></i>
                        </div>
                        <div className='flex flex-col w-full'>
                          <label htmlFor="name" className="hidden">
                              Full Name
                          </label>
                          <input
                              type="fullName"
                              name="fullName"
                              id="name"
                              value = {formData.fullName}
                              onChange={handleInputs}
                              placeholder="Full Name"
                              className="w-100 mt-2 py-2 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold text-[.8rem] focus:border-orange-500 focus:outline-none"
                          />
                        </div>
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
                              value = {formData.email}
                              onChange = {handleInputs}
                              placeholder="Your Email"
                              className="w-100 mt-2 py-2 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold text-[.8rem] focus:border-orange-500 focus:outline-none"
                          />
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex items-center justify-center w-4 text-2xl'>
                            <i className="zmdi zmdi-phone-in-talk zmdi-hc-1x"></i>
                        </div>
                      <div className="flex flex-col w-full">
                        <label htmlFor="phoneNumber" className="hidden">
                            Number
                        </label>
                        <input
                            type="number"
                            name="phoneNumber" 
                            id="phoneNumber"
                            value = {formData.phoneNumber}
                            onChange={handleInputs}
                            placeholder="Mobile Number"
                            className="w-100 mt-2 py-2 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold text-[.8rem] focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    
                    <div className='flex gap-2'>
                        <div className='flex items-center justify-center w-4 text-2xl'>
                            <i className="zmdi zmdi-assignment zmdi-hc-1x"></i>
                        </div>
                      <div className="flex flex-col w-full">
                        <label htmlFor="work" className="hidden">
                            Work
                        </label>
                        <input
                            type="work"
                            name="work"
                            id="work"
                            value = {formData.work}
                            onChange={handleInputs}
                            placeholder="Your Profession"
                            className="w-100 mt-2 py-2 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold text-[.8rem] focus:border-orange-500 focus:outline-none"
                        />
                    </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex items-center justify-center w-4 text-2xl'>
                        <i className="zmdi zmdi-github-alt"></i>
                        </div>
                      <div className="flex flex-col w-full">
                        <label htmlFor="username" className="hidden">
                            gitHub Username
                        </label>
                        <input
                            type="username"
                            name="username" 
                            id="username"
                            value = {formData.username}
                            onChange={handleInputs}
                            placeholder="gitHub Username"
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
                            value = {formData.password}
                            onChange={handleInputs}
                            placeholder="Password"
                            className="w-100 mt-2 py-2 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold text-[.8rem] focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    
                    <div className='flex gap-2'>
                        <div className='flex items-center justify-center w-4 text-2xl'>
                            <i className="zmdi zmdi-lock zmdi-hc-1x"></i>
                        </div>
                      <div className="flex flex-col w-full">
                        <label htmlFor="confirmPassword" className="hidden">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            value = {formData.confirmPassword}
                            onChange={handleInputs}
                            placeholder="Comfirm Password"
                            className="w-100 mt-2 py-2 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold text-[.8rem] focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    

                    <button
                        type="submit"
                        onClick={PostData}
                        disabled={loading}
                        className="flex justify-center items-center ml-6 md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-1.5 px-4 rounded-lg mt-6 text-[1rem] hover:bg-orange-600 transition ease-in-out duration-300"
                    >
                        {loading? <LoaderCircle className="animate-spin"/> : "Submit"}
                    </button>
                    {loading && (
                        <p className="mt-4 text-sm text-center text-gray-500">Backend is deployed on free server & spin down with inactivity, which can delay requests by 50 seconds or more.</p>
                    )}
                </form>
                <div className="h-auto p-6 bg-gray-100 rounded-lg ">
                    <div className= "flex flex-col items-center justify-center w-full h-full gap-6">
                        <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                        <div className='flex p-6 text-[1rem]'>
                            <p>Already registered?&nbsp;</p>
                            <Link
                            to={'/login'}
                            className='font-semibold hover:text-black hover:underline'
                            >
                              Login here
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register 