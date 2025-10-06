import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from 'sonner';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import Checkout from './components/Cart/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import OrderDetails from './pages/OrderDetails';
import MyOrder from './pages/MyOrder';
import AdminLayout from './components/Admin/AdminLayout';
import AdminDashboard from './components/Admin/AdminDashboard';
import UserManagement from './components/Admin/UserManagement';
import ProductManagement from './components/Admin/ProductManagement';
import EditProduct from './components/Admin/EditProduct';
import OrderManagement from './components/Admin/OrderManagement';


const App = () => {
  return (
    <BrowserRouter>
      <Toaster position='top-right' richColors />
      <Routes>
        {/* User Layout */}
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='profile' element={<Profile />} />
          <Route path='collection/:collection' element={<CollectionPage />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='order-confirmation' element={<OrderConfirmation />} />
          <Route path='order-details/:id' element={<OrderDetails />} />
          <Route path='my-order' element={<MyOrder />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path='users' element={<UserManagement />} />
          <Route path='products' element = {<ProductManagement />} />
          <Route path='products/:id/edit' element = {<EditProduct />} />
          <Route path='orders' element = {<OrderManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
