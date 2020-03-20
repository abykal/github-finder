import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex items-center jusity-between flex-wrap bg-red-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <i className="fab fa-github-alt mr-3"></i>
                <span className="font-semibold text-xl tracking-tight">GitHub Finder</span>
            </div>
            <div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-red-200 border-red-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <ul className="text-sm lg:flex-grow">
                        <li className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar
