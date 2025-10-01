import { useState } from "react";
import { useNavigate } from "react-router-dom"
import PaypalButton from "./PaypalButton";

const cart = {
  products: [
    {
      name: "Jacket",
      size: "M",
      color: "Black",
      price: 450,
      image: "https://picsum.photos/150?random=1"
    },
    {
      name: "Jeans",
      size: "XL",
      color: "Black",
      price: 550,
      image: "https://picsum.photos/150?random=2"
    },
  ],
  totalPrice: 1000,
}


const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    postalcode: "",
    country: "",
    phone: "",
  });

  const handlePaymentSuccess = (details) => {
    console.log(details);
    navigate("/order-confirmation")

  }

  const handleCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(1230);
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>

          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@gmail.com"
              className="w-full p-2 border rounded"
              disabled />
          </div>

          <h3 className="text-lg mb-4">Delivey</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="">
              <label htmlFor="" className="block text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded" required
                value={shippingAddress.firstname}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress, firstname: e.target.value
                  })
                }
              />
            </div>
            <div className="">
              <label htmlFor="" className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded" required
                value={shippingAddress.lastname}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress, lastname: e.target.value
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">Address</label>
            <input type="text"
              value={shippingAddress.address}
              onChange={(e) => setShippingAddress({
                ...shippingAddress, address: e.target.value
              })}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="">
              <label htmlFor="" className="block text-gray-700">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded" required
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress, city: e.target.value
                  })
                }
              />
            </div>
            <div className="">
              <label htmlFor="" className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                className="w-full p-2 border rounded" required
                value={shippingAddress.postalcode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress, postalcode: e.target.value
                  })
                }
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">Country</label>
            <input type="text"
              value={shippingAddress.country}
              onChange={(e) => setShippingAddress({
                ...shippingAddress, country: e.target.value
              })}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">Phone Number</label>
            <input type="text"
              value={shippingAddress.phone}
              onChange={(e) => setShippingAddress({
                ...shippingAddress, phone: e.target.value
              })}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mt-6">
            {!checkoutId ? (
              <button type="submit" className="w-full bg-black text-white py-3 rounded">
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                <PaypalButton amount={100} onSuccess={handlePaymentSuccess} onError={(err) => alert("Payment failed. try again")} />
              </div>
            )}
          </div>
        </form>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product) => (
            <div className="flex items-start justify-between py-2 border-b">
              <div className="flex items-start">
                <img src={product.image} className="w-20 h-24 object-cover mr-4" alt="" />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">
                    Size: {product.size}
                  </p>
                  <p className="text-gray-500">
                    Color: {product.color}
                  </p>
                </div>
              </div>
              <p className="text-xl">  &#8377; {product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p> &#8377; {cart.totalPrice.toLocaleString()}</p>
        </div>

        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>&#8377; {cart.totalPrice.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}

export default Checkout
