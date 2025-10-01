import { useEffect, useRef, useState } from "react"
import { FaFilter } from 'react-icons/fa'
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOption from "../components/Products/SortOption";
import ProductsGrid from "../components/Products/ProductsGrid";
const CollectionPage = () => {

    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    }
    useEffect(() => {
        // Add event listner for click
        document.addEventListener("mousedown", handleClickOutside);
        // clean event listner

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        

    })

    useEffect(() => {
        setTimeout(() => {
            const fetchProduct = [
                {
                    _id: 1,
                    name: "Product 1",
                    price: 500,
                    images: [{ url: "https://picsum.photos/500/500?random=1" }],
                },
                {
                    _id: 2,
                    name: "Product 1",
                    price: 500,
                    images: [{ url: "https://picsum.photos/500/500?random=2" }],
                },
                {
                    _id: 3,
                    name: "Product 1",
                    price: 500,
                    images: [{ url: "https://picsum.photos/500/500?random=3" }],
                },
                {
                    _id: 4,
                    name: "Product 1",
                    price: 500,
                    images: [{ url: "https://picsum.photos/500/500?random=4" }],
                },
            ];

            setProducts(fetchProduct);
        }, 1000)
    }, [])

    return (
        <div className="flex flex-col lg:flex-row">

            {/* mobile filter button */}

            <button onClick={toggleSidebar} className="lg:hidden border p-2 flex justify-center items-center">
                <FaFilter className="mr-2" /> Filters
            </button>

            {/* filter sidebar */}
            <div ref={sidebarRef} className={`${isOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
                <FilterSidebar />
                
            </div>
            <div className="grow p-4">
                    <h2 className="text-2xl uppercase mb-4">All Collection</h2>

                    <SortOption />

                    <ProductsGrid product={products}/>
                </div>
        </div>
    )
}

export default CollectionPage
