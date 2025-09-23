import { RiDeleteBin3Line } from "react-icons/ri";
const CartContents = () => {
    const cartItems = [
        {
            id: 1,
            name: "T-shirt",
            size: "M",
            color: "Red",
            quntity: 1,
            price: 350,
            image: "https://picsum.photos/200?random=1"
        },

        {
            id: 2,
            name: "Jeans",
            size: "L",
            color: "Black",
            quntity: 2,
            price: 500,
            image: "https://picsum.photos/200?random=1"
        },


    ];
    return (
        <div>
            {
                cartItems.map((product, index) => (
                    <div key={index} className="flex items-start justify-between py-4 border-b">
                        <div className="flex items-start">
                            <img src={product.image} alt="" className="w-20 h-24 object-cover mr-4 rounded" />
                            <div>
                                <h3>{product.name}</h3>
                                <p className="text-sm text-gray-500 ">
                                    size: {product.size} | color: {product.color}
                                </p>
                                <div className="flex items-center mt-2">
                                    <button className="border rounded px-2 py-1 text-xl font-medium"> - </button>
                                    <span className="mx-4">{product.quntity}</span>
                                    <button className="border rounded px-2 py-1 text-xl font-medium"> + </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p> &#8377; {product.price.toLocaleString()}</p>
                            <button>
                               <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
                            </button>
                        </div>
                    </div>
                ))
            }
            </div>
    );
}
export default CartContents
