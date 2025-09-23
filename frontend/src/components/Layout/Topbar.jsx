import {TbBrandMeta} from 'react-icons/tb';
import {IoLogoInstagram} from 'react-icons/io';
import {RiTwitterXLine} from 'react-icons/ri';
const Topbar = () => {
    return (
        <div className='bg-[#ea2e0c] text-white'>
            <div className='container mx-auto flex justify-between items-center py-3'>
                <div className=' hidden md:flex items-center space-x-4 '>
                    <a href="#" className='hover:text-gray-300'>
                        <TbBrandMeta className='w-5 h-5' />
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <IoLogoInstagram className='w-5 h-5' />
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <RiTwitterXLine className='w-5 h-5' />
                    </a>
                </div>
                <div className='text-center text-sm flex-grow'>
                    <span >We ship worldwide - Fast and relibale shipping </span>
                </div>
                <div className='text-sm hidden md:block'>
                    <a href="tel:+91 1234567890" className='hover:text-gray-300'>
                        +91 1234567890
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Topbar
