import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrival = () => {

    const scroll = useRef(null);
    const [isCheck, setIsCheck] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [canScrolLeft, setCanScrolLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false);

    const arrivals = [
        {
            _id: 1,
            name: "Jackets",
            price: 600,
            images: [
                { url: "https://picsum.photos/500/500?random=1" },
            ],

        },

        {
            _id: 2,
            name: "Jackets",
            price: 600,
            images: [
                { url: "https://picsum.photos/500/500?random=2" },
            ],

        },

        {
            _id: 3,
            name: "Jackets",
            price: 600,
            images: [
                { url: "https://picsum.photos/500/500?random=1", },
            ],

        },

        {
            _id: 4,
            name: "Jackets",
            price: 600,
            images: [
                { url: "https://picsum.photos/500/500?random=1", },
            ],

        },

        {
            _id: 5,
            name: "Jackets",
            price: 600,
            images: [
                { url: "https://picsum.photos/500/500?random=1", },
            ],

        },

        {
            _id: 6,
            name: "Jackets",
            price: 600,
            images: [
                { url: "https://picsum.photos/500/500?random=2", },
            ],

        },

        {
            _id: 6,
            name: "Jackets",
            price: 600,
            images: [
                { url: "https://picsum.photos/500/500?random=2", },
            ],

        },
    ];

    

    const isScroll = (direction) => {
        const amount = direction === "left" ? -300 : +300;
        scroll.current.scrollBy({ left: amount, behavior: "smooth" });
    }
    const updateScrollButton = () => {
        const container = scroll.current;
        if (container) {
            const leftScroll = container.scrollLeft;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            setCanScrolLeft(leftScroll > 0);
            setCanScrollRight(leftScroll < maxScrollLeft - 1);
        }
    };

    useEffect(() => {
        const container = scroll.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButton);
            updateScrollButton();
        }
    })
    return (
        <section className="">
            <div className=" container mx-auto text-center mb-12 relative">
                <h2 className="text-3xl font-bold mb-4">
                    Explore New Arrivals
                </h2>
                <p className="text-lg text-gray-600 mb-9">
                    Discover the latest additions to our collection.
                </p>

                <div className=" absolute right-0 bottom-[-42px] flex space-x-2 sm:bottom-[-20px]">
                    <button
                        onClick={() => isScroll("left")}
                        disabled={!canScrolLeft}
                        className={`p-2 rounded border ${canScrolLeft ? 'bg-white text-black' : 'bg-gray-200 cursor-not-allowed'}`}>
                        <FiChevronLeft className="text-2xl" />
                    </button>
                    <button
                        onClick={() => isScroll("right")}
                        className={`p-2 rounded border ${canScrollRight ? "bg-white text-black" : "bg-gray-200 cursor-not-allowed"}`}>
                        <FiChevronRight className="text-2xl" />
                    </button>
                </div>
            </div>

            <div ref={scroll}
                className="container mx-auto overflow-x-scroll flex space-x-6 relative">
                {arrivals.map((item) => (
                    <div key={item._id} className=" min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
                        <img src={item.images[0]?.url} alt="" className="w-full h-[400px] object-cover" />

                        <div className=" bottom-0 left-0 right-0 opacity-100 backdrop-blur-md text-black p-4 rounded-b-lg">
                            <Link to={`/product/${item._id}`} className="block" >
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="mt-1">&#8377;{item.price}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NewArrival
