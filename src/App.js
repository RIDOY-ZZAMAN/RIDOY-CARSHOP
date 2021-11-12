import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../src/Pages/Home/Home'
import Login from '../src/Pages/Login/Login'
import Register from './Pages/Login/Register/Register';
import AuthProvide from './context/AuthProvide';
import Dashboard from './Pages/Dashboard/Dashboard';
import AllProducts from './Pages/AllProducts/AllProducts';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvide>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/allproducts">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute path="/productDetails/:productId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvide>

    </div>
  );
}

export default App;
