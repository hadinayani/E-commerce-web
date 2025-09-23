import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXCircle, HiMiniXMark } from 'react-icons/hi2';

const SearchBar = () => {

    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSearch = () => {
        setIsOpen(!isOpen);
    }

    const handleForm = (e) => {
        e.preventDefault();
        console.log("Search", search);
        setIsOpen(false);
    }
    return (
        <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 bg-white h-24 z-50" : "w-auto"}`}>
            {isOpen ? (
                <form onSubmit={handleForm} className=' relative flex items-center justify-center w-full'>
                    <div className=' relative w-1/2'>
                        <input type="text" placeholder='Search' value={search} className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700' onChange={(e) => setSearch(e.target.value)} />

                        <button type='submit' className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                            <HiMagnifyingGlass className='w-6 h-6 ' />
                        </button>
                    </div>
                    <button type='button' onClick={handleSearch} className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800' >
                        <HiMiniXMark className='w-6 h-6' />
                    </button>
                </form>
            ) : (
                <button onClick={handleSearch}>
                    <HiMagnifyingGlass className='w-6 h-6 ' />
                </button>
            )}
        </div>
    )
}

export default SearchBar
