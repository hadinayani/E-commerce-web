import { useEffect, useState } from "react"
import { toast } from 'sonner';
import ProductsGrid from "./ProductsGrid";
const selectedProduct = {
    name: "Jacket",
    price: 450,
    originalPrice: 600,
    description: "A stylish and warm jacket perfect for winter.",
    brand: "FashionCo",
    material: "Leather",
    size: ["M", "L", "XL"],
    colors: ["Black", "Brown"],
    images: [
        { url: "https://picsum.photos/500/500?random=1", },
        { url: "https://picsum.photos/500/500?random=2", },
    ]
}

const similarProduct = [
    {
        _id:1,
        name:"Product 1",
        price:500,
        images: [{url:"https://picsum.photos/500/500?random=1"}],
    },
    {
        _id:2,
        name:"Product 1",
        price:500,
        images: [{url:"https://picsum.photos/500/500?random=2"}],
    },
    {
        _id:3,
        name:"Product 1",
        price:500,
        images: [{url:"https://picsum.photos/500/500?random=3"}],
    },
    {
        _id:4,
        name:"Product 1",
        price:500,
        images: [{url:"https://picsum.photos/500/500?random=4"}],
    },
]
const ProductDetail = () => {

    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if (selectedProduct.images.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct])

    const handleQuantityChangee = (action) => () => {
        if (action === "plus") setQuantity((prev) => prev + 1);
        if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
    }

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            toast.error("Please select size and color", {
                duration: 1000,
            });

            return;
        }

        setIsButtonDisabled(true);

        setTimeout(() => {
            toast.success("Product added to cart", {
                duration: 1000,
            });
            setIsButtonDisabled(false);
        }, 500)
    }
    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
                <div className="flex flex-col md:flex-row">
                    <div className="hidden md:flex flex-col space-y-4 mr-6">
                        {selectedProduct.images.map((image, index) => (
                            <img key={index}
                                src={image.url}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                                onClick={() => setMainImage(image.url)}
                            />
                        ))}
                    </div>

                    {/* main image */}
                    <div className="md:w-1/2">
                        <div className="mb-4">
                            <img src={mainImage}
                                className="w-full  h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Mobile Screens */}
                    <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
                        {selectedProduct.images.map((image, index) => (
                            <img key={index}
                                src={image.url}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                                onClick={() => setMainImage(image.url)}
                            />
                        ))}
                    </div>

                    <div className="md:w-1/2 md:ml-10">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                            {selectedProduct.name}
                        </h1>

                        <p className="text-lg text-gray-600 mb-1 line-through">
                            {selectedProduct.originalPrice &&
                                ` ${selectedProduct.originalPrice}`
                            }
                        </p>

                        <p className="text-xl text-gray-500 mb-2">
                            &#8377; {selectedProduct.price}
                        </p>
                        <p className="text-gray-600 mb-4">
                            {selectedProduct.description}
                        </p>

                        <div className="mb-4">
                            <p className="text-gray-700">
                                Color:
                            </p>

                            <div className="gap-2 flex mt-2">
                                {selectedProduct.colors.map((color, index) => (
                                    <button key={color}
                                        onClick={() => { setSelectedColor(color) }}
                                        className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-black border-3" : "border-gray-300"}`}
                                        style={{
                                            backgroundColor: color.toLocaleLowerCase(),
                                            filter: "brightness(0.5)",
                                        }}
                                    >
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-gray-700">Size:</p>

                            <div className="flex gap-2 mt-2">
                                {selectedProduct.size.map((size) => (
                                    <button key={size}
                                        onClick={() => { setSelectedSize(size) }}
                                        className={`px-4 py-2 rounded border ${selectedSize === size ? "bg-black text-white" : ""}`}
                                    >{size}</button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-700">Quantity:</p>

                            <div className="flex items-center space-x-4 mt-2">
                                <button onClick={handleQuantityChangee("minus")} className="px-2 py-1 bg-gray-200 rounded text-lg">
                                    -
                                </button>

                                <span className="text-lg">{quantity}</span>

                                <button onClick={handleQuantityChangee("plus")} className="px-2 py-1 bg-gray-200 rounded text-lg">
                                    +
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={() => handleAddToCart()}
                            disabled={isButtonDisabled}
                            className={`bg-black text-white py-2 px-6 rounded w-full mb-4 uppercase ${isButtonDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-800"}`}>
                            {isButtonDisabled ? "Adding.." : "Add to Cart"}
                        </button>

                        <div className="mt-10 text-gray-700">
                            <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                            <table className="w-full text-left text-sm text-gray-600">
                                <tbody>
                                    <tr>
                                        <td className="py-1">Brand</td>
                                        <td className="py-1">{selectedProduct.brand}</td>
                                    </tr>

                                    <tr>
                                        <td className="py-1">Material</td>
                                        <td className="py-1">{selectedProduct.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                 <div className="mt-20">
                        <h2 className="text-2xl font-medium text-center mb-4">
                            You May Also Like
                        </h2>

                        <ProductsGrid product = {similarProduct} />
                    </div>
            </div>
        </div>
    )
}

export default ProductDetail
