import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUs from "../pages/aboutUs/aboutUs";
import Contact from "../pages/contact/contact";
import Home from "../pages/home/home";
import New from "../pages/new/new";
import Package from "../pages/package/package";
import Product from "../pages/product/product";
import Shop from "../pages/shop/shop";



function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/love-travel" component={Home} exact/>
                <Route path="/shop" component={Shop} />
                <Route path="/product/:id" component={Product} />
                <Route path="/package" component={Package} />
                <Route path="/new" component={New} />
                <Route path="/aboutUs" component={AboutUs} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;