const Checkout = {
    _id: "1234",
    createdAt: new Date(),
    checkoutItems: [
        {
            productid:"1",
            name: "Jacket",
            size: "M",
            color: "Black",
            price: 450,
            quantity:1,
            image: "https://picsum.photos/150?random=1"
        },
        {
            productid:"2",
            name: "Jacket",
            size: "XXL",
            color: "Black",
            price: 450,
            quantity:1,
            image: "https://picsum.photos/150?random=2"
        },
    ],
    shippingAddress:{
        address: "123 Himaliya Height",
        city:"Mumbai",
        country:"India"
    },
}
const OrderConfirmation = () => {

    const calculatedEstimateDelivery = (createdAt) =>{
        const orderDate = new Date(createdAt);

        orderDate.setDate(orderDate.getDate() +3)

        return orderDate.toLocaleDateString();
    }
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white">
            <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
                Thank You for your Order
            </h1>
            {Checkout && (
                <div className="p-6 rounded-lg border">
                    <div className="flex justify-between mb-20">
                        <div>
                            <h2 className="text-xl font-semibold">
                                Order ID: {Checkout._id}
                            </h2>
                            <p className="text-gray-500">
                               Order date: {new Date(Checkout.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                        <div>
                            <p className="text-emerald-700 text-sm">
                                Estimated Delivery: {calculatedEstimateDelivery(Checkout.createdAt)}
                            </p>
                        </div>
                    </div>
                    <div className="mb-20">
                        {Checkout.checkoutItems.map((item) => (
                            <div className="flex items-center mb-4">
                                <img src={item.image} className="w-16 h-16 object-cover rounded-md mr-4" alt="" />
                            <div>
                                <h4 className="text-md font-semibold">{item.name}</h4>
                            <p className="text-sm text-gray-500">
                                {item.color} | {item.size}
                            </p>
                            </div>
                            <div className="ml-auto text-right">
                                <p className="text-md"> &#8377; {item.price}</p>
                                <p className="text-sm text-gray-500"> Quantity: {item.quantity}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Delivery</h4>
                            <p className="text-gray-600">{Checkout.shippingAddress.address}</p>
                            <p className="text-gray-600">{Checkout.shippingAddress.city}, {Checkout.shippingAddress.country}</p>
                            

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OrderConfirmation
