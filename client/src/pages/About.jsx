import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance';

function About() {

  const [userData, setUserData] = useState({});
  const [gitData, setGitData] = useState({});

  const callAboutPage = async() => {
    try {
      const resData = await axiosInstance.get('/user/api/current-user')
      // console.log(resData);
      
      if(resData.status !== 201){
        alert("Error while fetching current-user")
      }

      const { user } = resData.data
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

   
  useEffect(() => {
   callAboutPage();
  }, [])

  return (
    <section className='relative flex items-top justify-center min-h-[700px] sm:items-center sm:pt-0 '>
        <div className='max-w-screen-xl mx-auto sm:px-6 lg:px-8 sm:text-xl '>
            <div className='grid grid-cols-1 gap-6 p-6 rounded-lg shadow md:grid-cols-2 bg-gray-50'>
                <div className='flex flex-col items-center justify-center p-4 bg-white border rounded-lg'>
                    <div className='flex justify-center items-center p-4 w-56 bg-gray-100 rounded-[50%]'>
                      <img className='rounded-[50%]' src={gitData.avatar_url} 
                      alt="Profile Picture" />
                    </div>
                    <p className='pt-4 text-base'>
                      Hi, I am a software engineer specializing in building web applications with JavaScript and Node.js.
                    </p>
                </div>
                <div className='w-auto '>
                    <div className='flex flex-col gap-6'>
                      <div className='flex justify-between p-4 bg-white border rounded-lg'>
                        <div className='flex flex-col'>
                          <h3 className='flex font-bold item-start '>{userData.fullName}</h3>
                          <h6 className='flex item-start font-semibold text-orange-700 text-[1rem]'>{userData.work}</h6>
                          <p className='flex item-start font-semibold text-[1rem]'>Ranking :&nbsp;<span className='text-orange-700 '> 1/10 </span></p>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <button className='px-2 text-base bg-gray-100 border-2 rounded-full hover:border-orange-700'>
                              Edit Profile
                            </button>
                            <div className='flex justify-end gap-2'>
                              <i className="zmdi zmdi-github-alt"></i>
                              <a href={gitData.html_url} target='_blank' rel='noopener noreferrer'  className='text-sm hover:text-orange-700 hover:cursor-pointer'>gitHub <i className="zmdi zmdi-arrow-right"></i></a>
                            </div>
                        </div>
                      </div>
                      <div className='text-base bg-white border rounded-lg '>
                          <div>
                            <a className='font-bold'>About</a>
                          </div>
                          <div className='py-4 border-t '>
                            <div className='flex justify-between px-6'>
                              <div>
                                <label>User ID :</label>
                              </div>
                              <div className='text-orange-700 text-start'>
                                <p>{userData._id}</p>
                              </div>
                            </div>
                            <div className='flex justify-between px-6'>
                              <div>
                                <label>Name :</label>
                              </div>
                              <div className='text-orange-700 text-start'>
                                <p>{userData.fullName}</p>
                              </div>
                            </div>
                            <div className='flex justify-between px-6'>
                              <div>
                                <label>Email :</label>
                              </div>
                              <div className='text-orange-700 text-start'>
                                <p>{userData.email}</p>
                              </div>
                            </div>
                            <div className='flex justify-between px-6'>
                              <div>
                                <label>Phone :</label>
                              </div>
                              <div className='text-orange-700 text-start'>
                                <p>{userData.phoneNumber}</p>
                              </div>
                            </div>
                            <div className='flex justify-between px-6'>
                              <div>
                                <label>Profession :</label>
                              </div>
                              <div className='text-orange-700 text-start'>
                                <p>{userData.work}</p>
                              </div>
                            </div>
                            <div className='flex justify-between px-6'>
                              <div>
                                <label>gitHub :</label>
                              </div>
                              <div className='text-orange-700 text-start'>
                                <p><a href={gitData.html_url} target="_blank" rel='noopener noreferrer'  className='hover:cursor-pointer'>{userData.username}</a></p>
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
