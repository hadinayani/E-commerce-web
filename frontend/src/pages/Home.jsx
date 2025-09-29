import Hero from "../components/Layout/Hero"
import Collection from "../components/Products/Collection"
import NewArrival from "../components/Products/NewArrival"
import ProductDetail from "../components/Products/ProductDetail"
import ProductsGrid from "../components/Products/ProductsGrid"
import Service from "../components/Products/Service"

const otherProducts = [
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
]

const Home = () => {
  return (
    <div>
      <Hero />
      <Collection />
      <NewArrival />

      <h2 className="text-3xl text-center font-bold mb-4">
        Best Seller
      </h2>

      <ProductDetail />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears For Womens
        </h2>

        <ProductsGrid product={otherProducts} />
      </div>
      <Service />
    </div>
  )
}

export default Home
