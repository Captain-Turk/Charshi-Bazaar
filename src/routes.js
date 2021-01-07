import React from 'react'
import Home from "./components/Home/home";
import Search from "./components/Search/search";
import Display from "./components/Display/display";
import Product from "./components/Product/product";
import Categories from "./components/Categories/categories";
import Cart from "./components/Cart/cart";
import Login from "./components/Login/login";
import NotFound from "./components/NotFound/notFound";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/products" component={Display} />
    <Route exact path="/products/:productId" component={Product} />
    <Route exact path="/categories" component={Categories} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
);
