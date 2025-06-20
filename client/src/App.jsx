import React, { useEffect } from 'react'
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
import CheckAuth from './components/common/CheckAuth'
import UnauthPage from './pages/unauth-page/UnauthPage'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './store/auth-slice'
import { Skeleton } from "@/components/ui/skeleton"

const App = () => {

  const { user, isAuthenticated, isLoading } = useSelector(state => state.auth) //this state dot auth import from store/auth-slice from reducer
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch]);

  if (isLoading) return <Skeleton className="h-[600px] w-[600px] rounded-full" />

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      {/* common component */}
      <h1>Header component</h1>

      <Routes>

        <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>
                                      <AuthLayout />
                                    </CheckAuth>}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AdminLayout /></CheckAuth>} >
          <Route path='dashboard' element={<AdminDashboard/>} />
          <Route path='products' element={<AdminProduct />} />
          <Route path='orders' element={<AdminOrder />} />
          <Route path='features' element={<AdminFeatures />} />
        </Route>

        <Route path='/shop' element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><ShoppingLayout /></CheckAuth>}>
          <Route path='home' element={<ShoppingHome />} />
          <Route path='listing' element={<ShoppingListing />} />
          <Route path='checkout' element={<ShoppingCheckout />} />
          <Route path='account' element={<ShoppingAccount />} />
        </Route>

        <Route path='*' element={<Notfound />} />
        <Route path='/unauth-page' element={<UnauthPage/>} />
      </Routes>
    </div>
  )
}

export default App
