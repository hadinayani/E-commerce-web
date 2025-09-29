import { HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi"
import { HiArrowPathRoundedSquare } from "react-icons/hi2"

const Service = () => {
    return (
        <section className="bg-white py-12 px-4 ">
            <div className="conatiner mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full mb-4">
                        <HiShoppingBag className="text-xl" />
                    </div>
                    <h4 className="tracking-tighter mb-2 uppercase font-bold">
                        Free Shipping
                    </h4>
                    <p className="text-gray-500 tracking-tighter text-sm">
                        on all orders over &#8377;200
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full mb-4">
                        <HiArrowPathRoundedSquare className="text-xl" />
                    </div>
                    <h4 className="tracking-tighter mb-2 uppercase font-bold">
                        30 Days Return
                    </h4>
                    <p className="text-gray-500 tracking-tighter text-sm">
                        Money back Guarantee
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full mb-4">
                        <HiOutlineCreditCard className="text-xl" />
                    </div>
                    <h4 className="tracking-tighter mb-2 uppercase font-bold">
                        Secure Payment
                    </h4>
                    <p className="text-gray-500 tracking-tighter text-sm">
                        100% secure payment process
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Service
