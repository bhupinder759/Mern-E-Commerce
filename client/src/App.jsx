import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/AuthLayout'
import AuthLogin from './pages/auth/AuthLogin'
import AuthRegister from './pages/auth/AuthRegister'
import AdminLayout from './components/admin-view/AdminLayout'
import AdminDashboard from './pages/admin-view/AdminDashboard'
import AdminProduct from './pages/admin-view/AdminProduct'
import AdminOrder from './pages/admin-view/AdminOrder'
import AdminFeatures from './pages/admin-view/AdminFeatures'
import ShoppingLayout from './components/shopping-view/ShoppingLayout'
import Notfound from './pages/not-found/Notfound'
import ShoppingHome from './pages/shopping-view/ShoppingHome'
import ShoppingListing from './pages/shopping-view/ShoppingListing'
import ShoppingCheckout from './pages/shopping-view/ShoppingCheckout'
import ShoppingAccount from './pages/shopping-view/ShoppingAccount'

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      {/* common component */}
      <h1>Header component</h1>

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />} >
          <Route path='dashboard' element={<AdminDashboard/>} />
          <Route path='products' element={<AdminProduct />} />
          <Route path='orders' element={<AdminOrder />} />
          <Route path='features' element={<AdminFeatures />} />
        </Route>

        <Route path='/shop' element={<ShoppingLayout />}>
          <Route path='home' element={<ShoppingHome />} />
          <Route path='listing' element={<ShoppingListing />} />
          <Route path='checkout' element={<ShoppingCheckout />} />
          <Route path='account' element={<ShoppingAccount />} />
        </Route>

        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
