import React from 'react';

const Navigation = () => {
    return (
        <nav class="bg-white border-gray-200 dark:bg-white">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="images/OTN logo.png" class="h-8" alt="Flowbite Logo" />
            </a>
            <div class="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
                dark:focus:ring-blue-800">
                    Get started
                </button>
                <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 
                justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
                focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" 
                aria-expanded="false">
                    <span class="sr-only">
                        Open main menu
                    </span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border 
                md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                    <a href="#" class="block py-2 px-3 md:p-0 text-white bg-blue-700 md:bg-transparent 
                    hover:text-black md:dark:text-blue-700" aria-current="page">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                    md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-black 
                    dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent 
                    md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white 
                    md:dark:hover:bg-transparent dark:border-gray-700">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent 
                    md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white 
                    md:dark:hover:bg-transparent dark:border-gray-700">
                        Contact
                    </a>
                </li>
                </ul>
            </div>
        </div>
        </nav>
    );
};

export default Navigation;