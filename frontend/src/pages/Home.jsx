import Hero from "../components/Layout/Hero"
import Collection from "../components/Products/Collection"
import NewArrival from "../components/Products/NewArrival"
import ProductDetail from "../components/Products/ProductDetail"

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
    </div>
  )
}

export default Home
