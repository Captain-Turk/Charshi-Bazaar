import React from 'react'
import Search from '../Search/search'
import CategoryList from '../CategoryList/categoryList'
import Cart from '../Cart/cart'
// import Login from '../Login/login'

const Header =(props) =>{


    return(
        <div>
             <p>Charshi Bazaar</p>
        <CategoryList />
        <Search />
        <Cart />

        </div>
       
        
    )

}

export default Header