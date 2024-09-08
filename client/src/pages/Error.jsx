
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[550px] bg-white">
        <div className="max-w-6xl mx-auto">
            <h1 className='max-w-5xl mt-3 text-6xl font-medium text-gray-500 dark:text-gray-400'>404</h1>
        </div>
        <h2 className='"mt-3 max-w-5xl text-lg font-medium text-gray-500 dark:text-gray-400'>we are sorry, page not found!</h2>
        <p className="max-w-5xl mt-3">The Page you are looking for might have been removed had its name changed or its temporarily unavailable.</p>
        <NavLink
        to="/"
        className='px-2 mt-4 bg-gray-100 border-2 rounded-full hover:border-orange-700 '
        >
           Back to HomePage
        </NavLink>
    </div>
  )
}

export default Error;