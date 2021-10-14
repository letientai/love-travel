import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Product from "../pages/product/product";
import Shop from "../pages/shop/shop";



function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/love-travel" component={Home} exact/>
                <Route path="/shop" component={Shop} />
                <Route path="/product/:id" component={Product} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;