import { useState, useContext } from "react";
import { NavLink, Link } from 'react-router-dom';
import { UserContext } from '../../App';


function Header() {

    const { state } = useContext(UserContext);

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 shadow-md ">
            <nav className="flex items-center justify-between max-w-screen-xl p-4 mx-auto bg-white lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-12 mr-3"
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                        <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open main menu'}</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col flex-wrap mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 
                              ${isActive ? "text-orange-700" : "text-gray-700"}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        {state.userSession && (
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        ` block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 
                              ${isActive ? "text-orange-700" : "text-gray-700"}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink
                                to="/Contact"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 
                              ${isActive ? "text-orange-700" : "text-gray-700"}`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        {!state.userSession && (
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive, }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 
                                ${isActive ? "text-orange-700" : "text-gray-700"}`
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </ul>
                    {!state.userSession && (
                        <ul className={`flex flex-wrap flex-col pl-8 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0`}>
                            <Link
                                to="/register"
                                className={` block text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none`}
                            >
                                Register <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </ul>
                    )}
                    {state.userSession && (
                        <ul className={`flex flex-wrap flex-col pl-8 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0`}>
                            <Link
                                to="/logout"
                                className={` text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none`}
                            >
                                Logout <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </ul>
                    )}
                </div>
            </nav>
            <aside className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-10"></div>
                <div className="fixed inset-y-0 right-0 z-10 w-full px-4 py-4 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center" onClick={toggleMenu}>
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="h-12 mr-3"
                                alt="Logo"
                            />
                        </Link>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                            <span className="sr-only">Close menu</span>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flow-root mt-6">
                        <div className="-my-6 divide-y divide-gray-200">
                            <ul className="space-y-2 py4">
                                <li>
                                    <NavLink
                                        to="/"
                                        onClick={toggleMenu}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200  rounded-lg text-base font-semibold leading-7 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 
                                            ${isActive ? "text-orange-700" : "text-gray-700"}`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                {state.userSession && (
                                    <li>
                                        <NavLink
                                            to="/about"
                                            onClick={toggleMenu}
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200  rounded-lg text-base font-semibold leading-7 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 
                                            ${isActive ? "text-orange-700" : "text-gray-700"}`
                                            }
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                )}
                                <li>
                                    <NavLink
                                        to="/contact"
                                        onClick={toggleMenu}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200  rounded-lg text-base font-semibold leading-7 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 
                                            ${isActive ? "text-orange-700" : "text-gray-700"}`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                {!state.userSession && (
                                    <li>
                                        <NavLink
                                            to="/login"
                                            onClick={toggleMenu}
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200  rounded-lg text-base font-semibold leading-7 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 
                                            ${isActive ? "text-orange-700" : "text-gray-700"}`
                                            }
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                )}
                            </ul>
                            <div className="grid gap-4 py-4">
                                {!state.userSession && (
                                    <ul onClick={toggleMenu}>
                                        <Link
                                            to="/register"
                                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                        >
                                            Register  <span aria-hidden="true">&rarr;</span>
                                        </Link>
                                    </ul>
                                )}
                                {state.userSession && (
                                    <ul onClick={toggleMenu}>
                                        <Link
                                            to="/logout"
                                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                        >
                                            Logout  <span aria-hidden="true" className="text-xl">&rarr;</span>
                                        </Link>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </header>
    );
}

export default Header;


//  <header className="bg-white ">
//             <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
//                 <div className="flex lg:flex-1">
//                     <a href="#" className="-m-1.5 p-1.5">
//                         <span className="">Navbar</span>
//                         {/* <img className="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
//                     </a>
//                 </div>
//                 <div className="flex lg:hidden">
//                     <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
//                         <span className="sr-only">Open main menu</span>
//                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                         </svg>
//                     </button>
//                 </div>
//                 <div className="hidden lg:flex lg:gap-x-12">
//                     <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
//                     <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
//                     <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Company</a>
//                 </div>
//                 <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//                     <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
//                 </div>
//             </nav>
//             {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
//             <div className="lg:hidden" role="dialog" aria-modal="true">
//                 {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
//                 <div className="fixed inset-0 z-10"></div>
//                 <div className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//                     <div className="flex items-center justify-between">
//                         <a href="#" className="-m-1.5 p-1.5">
//                             <span className="sr-only">Your Company</span>
//                             <img className="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
//                         </a>
//                         <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
//                             <span className="sr-only">Close menu</span>
//                             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>
//                     <div className="flow-root mt-6">
//                         <div className="-my-6 divide-y divide-gray-500/10">
//                             <div className="py-6 space-y-2">
//                                 <a href="#" className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50">Features</a>
//                                 <a href="#" className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50">Marketplace</a>
//                                 <a href="#" className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50">Company</a>
//                             </div>
//                             <div className="py-6">
//                                 <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>