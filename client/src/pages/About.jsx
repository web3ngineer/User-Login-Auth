import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function About() {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const [gitData, setGitData] = useState({});

  const callAboutPage = async() => {
    try {
      const resData = await fetch('/user/api/current-user',{
        method: "GET",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify()
      });

      if(resData.status !== 201){
        navigate('/login')
        // window.location.href = '/login'
        // history.push('/login')
      }
      const {user, msg} = await resData.json()
      setUserData(user);
      // console.log(userData.username)
      // console.log("message : ", msg);
      
      const gitResponse = await fetch(`https://api.github.com/users/${user.username}`);
      const gitData = await gitResponse.json();
      setGitData(gitData);

    } catch (error) {
      console.log("Error while fetching current-user ",error)
    }
  }

  // const gitHub = async() => {
  //   try {
  //     const data = await fetch(`https://api.github.com/users/${userData.username}`)
  //     .then((res) => res.json());

  //     setGitData(data);

  //   } catch (error) {
  //     throw new Error("Error while fetching gitHub", error);
  //   }
  //  }
  // console.log(gitData)
  // console.log(userData)
   
  useEffect(() => {
   callAboutPage();
  //  gitHub();
  }, [])

  return (
    <section className='relative flex items-top justify-center min-h-[700px] sm:items-center sm:pt-0 '>
        <div className='mx-auto sm:px-6 lg:px-8 sm:text-xl max-w-screen-xl '>
            <div className='shadow grid grid-cols-1 md:grid-cols-2 p-6 gap-6 rounded-lg  bg-gray-50'>
                <div className='flex flex-col justify-center items-center border rounded-lg p-4 bg-white'>
                    <div className='flex justify-center items-center p-4 w-56 bg-gray-100 rounded-[50%]'>
                      <img className='rounded-[50%]' src={gitData.avatar_url} 
                      alt="Profile Picture" />
                    </div>
                    <p className='text-base pt-4'>
                      Hi, I am a software engineer specializing in building web applications with JavaScript and Node.js.
                    </p>
                </div>
                <div className='w-auto '>
                    <div className='flex flex-col gap-6'>
                      <div className='flex justify-between p-4 border rounded-lg bg-white'>
                        <div className='flex flex-col'>
                          <h3 className='flex item-start font-bold '>{userData.fullName}</h3>
                          <h6 className='flex item-start font-semibold text-orange-700 text-[1rem]'>{userData.work}</h6>
                          <p className='flex item-start font-semibold text-[1rem]'>Ranking :&nbsp;<span className=' text-orange-700'> 1/10 </span></p>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <button className=' text-base bg-gray-100 rounded-full px-2 border-2 hover:border-orange-700 '>
                              Edit Profile
                            </button>
                            <div className='flex gap-2 justify-end'>
                              <i class="zmdi zmdi-github-alt"></i>
                              <a href={gitData.html_url} target='_blank' className='text-sm hover:text-orange-700 hover:cursor-pointer'>gitHub <i class="zmdi zmdi-arrow-right"></i></a>
                            </div>
                        </div>
                      </div>
                      <div className=' text-base border rounded-lg bg-white'>
                          <div>
                            <a className='font-bold'>About</a>
                          </div>
                          <div className=' border-t py-4'>
                            <div className='flex px-6 justify-between'>
                              <div>
                                <label>User ID :</label>
                              </div>
                              <div className=' text-orange-700 text-start'>
                                <p>{userData._id}</p>
                              </div>
                            </div>
                            <div className='flex px-6 justify-between'>
                              <div>
                                <label>Name :</label>
                              </div>
                              <div className=' text-orange-700 text-start'>
                                <p>{userData.fullName}</p>
                              </div>
                            </div>
                            <div className='flex px-6 justify-between'>
                              <div>
                                <label>Email :</label>
                              </div>
                              <div className=' text-orange-700 text-start'>
                                <p>{userData.email}</p>
                              </div>
                            </div>
                            <div className='flex px-6 justify-between'>
                              <div>
                                <label>Phone :</label>
                              </div>
                              <div className=' text-orange-700 text-start'>
                                <p>{userData.phoneNumber}</p>
                              </div>
                            </div>
                            <div className='flex px-6 justify-between'>
                              <div>
                                <label>Profession :</label>
                              </div>
                              <div className=' text-orange-700 text-start'>
                                <p>{userData.work}</p>
                              </div>
                            </div>
                            <div className='flex px-6 justify-between'>
                              <div>
                                <label>gitHub :</label>
                              </div>
                              <div className=' text-orange-700 text-start'>
                                <p><a href={gitData.html_url} target="_blank" className='hover:cursor-pointer'>{userData.username}</a></p>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
