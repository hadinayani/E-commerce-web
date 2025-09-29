import { Link } from 'react-router-dom';

const ProductsGrid = ({ product }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.map((product, index) => (
                <Link key={index} to={`/product/${product._id}`}
                >
                    <div className='bg-white p-4 rounded-lg'>
                        <div className='w-full h-96 mb-4'>
                            <img src={product.images[0].url} 
                            className='w-full h-full object-cover rounded-lg' />
                        </div>
                        <h3 className='text-sm mb-2'>{product.name}</h3>
                        <p className='text-gray-500 font-medium text-sm tracking-tighter'> &#8377; {product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductsGrid
