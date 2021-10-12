import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Shop from "../pages/shop/shop";



function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/love_travel" component={Home} exact/>
                <Route path="/shop" component={Shop} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;