import React from 'react'
import Home from '../pages/home/home'
import { Route, Routes } from 'react-router-dom'
import { RestaurantDetails } from '../pages/detailRestaurant/RestaurantDetails'
import Profile from '../pages/profile/profile'
import Search from '../pages/search/search'



export const FoodAppRoutes = () => {
    return (
   
        <Routes>
          {/* <Route path = '/*' element = {<Slider/>} />  */}
          <Route path="/*" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurant-details" element={<RestaurantDetails />} />
          <Route path="/search" element={<Search />} />
        </Routes>
  
    )
}
