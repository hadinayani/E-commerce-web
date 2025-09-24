import { Link } from 'react-router-dom'
import mainImg from '../../assets/rabbit-hero.webp'
const Hero = () => {
    return (
        <section className=' relative'>
            <img src={mainImg} alt="" srcset="" className='w-full h-[400px] md:h-[600px] lg:h-[700px] object-cover' />
            <div className=' absolute inset-0 flex bg-transparent opacity-100 items-center justify-center'>
                <div className=' text-center text-white p-4'>
                    <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>Vacation
                        <br /> Ready
                    </h1>
                    <p className='text-sm tracking-tighter md:text-lg mb-6 '>
                        Explore our exclusive collection with exciting offers.
                    </p>
                    <Link to="#" className='bg-white text-gray-950 px-6 py-2 rounded-sm text-lg'>
                        Shop Now
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
