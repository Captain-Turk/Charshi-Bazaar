import React from 'react'
import Search from '../Search/search'
import CategoryList from '../CategoryList/categoryList'
import Cart from '../Cart/cart'
// import Login from '../Login/login'


const Header =(props) =>{


    return(
        <div>
             <h1>Charshi Bazaar</h1>
        <CategoryList />
        {/* <Category /> */}
        <Search search={props.search} reset={props.reset}/>
        <Cart />

        </div>
       
        
    )

}

export default Header