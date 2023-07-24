// import React from 'react';
// // import Login from './Login';
// import './App.css';
// // import Option from './Option';
// import Start from './Start';

// // import Vlogin from './Vlogin';
// import Home from './Home';
// // import Vegetables from './Vegetables';
// // import Beverages from './Beverages';
// // import Dairy from './Dairy';
// // import Healthdrinks from './Healthdrinks';
// import Product  from './Product';
// // import Category from './Category';
// // import { Provider } from 'react-redux';
// // import store from './stored';
// // import FeedbackForm from './FeedbackForm';
// import Pro from './Pro';
// import TopNav from './Topnav';
// import Navbar from './Navbar';
// // import Example from './Example';
// // import CartPage from './CartPage';
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import FeedbackForm from './FeedbackForm';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

// function App(){
//   return (
//     // <Router>
//     <div className="App">
//     {/* <Switch>
//       <Route exact path="/" component={Start}></Route>
//       {/* <Route exact path="/Vlogin" component={Vlogin}></Route>
//       <Route exact path="/Login" component={Login}></Route>
//       <Route exact path="/Home" component={Home}></Route>
//       <Route exact path="/Category" component={Category}></Route>
//       <Route exact path="/Vegetables" component={Vegetables}></Route>
//       <Route exact path="/Beverages" component={Beverages}></Route>
//       <Route exact path="/Healthdrinks" component={Healthdrinks}></Route>
//       <Route exact path="/Dairy" component={Dairy}></Route>
//       <Route exact path="/Product" component={Product}></Route>
//       <Provider store={store}><Route exact path="/FeedbackForm" component={FeedbackForm}></Route> </Provider> */}
      
//      {/* </Switch> */} 
//      {/* <Pro></Pro> */}
//      {/* <TopNav></TopNav> */}
//      <BrowserRouter>
//      {/* <Navbar></Navbar> */}
//      {/* <Home></Home> */}
//      {/* <Product></Product> */}
//      <FeedbackForm></FeedbackForm>
//      </BrowserRouter>
//      </div>
//       // </Router>
   
//       // <FeedbackForm />
   

//   );
// }

// export default App;




import React from 'react'
import { useState,useEffect } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CartPage from './CartPage';
import Home from './Home';
import Login from './Login';
import Vlogin from './Vlogin';
import Option from './Option';
import Category from './Category';
import Vegetables from './Vegetables';
import Beverages from './Beverages';
import Dairy from './Dairy';
import Healthdrinks from './Healthdrinks';
import Start from './Start';
import Profile from './Profile';
import Aprofile from './Aprofile';
import AdminHome from './AdminHome'
import Showpro from './Showpro';
import Product from './Product';
import { Provider } from 'react-redux';
import store from './stored';
import FeedbackForm from './FeedbackForm';
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  // Retrieve cartItems from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cartItems to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  return (
      <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Start}></Route>
        <Route exact path="/Option" component={Option}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Vlogin" component={Vlogin}></Route>
        <Route exact path="/AdminHome" component={AdminHome}></Route>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/Category" component={Category}></Route>
        <Route exact path="/Profile" component={Profile}></Route>
        <Route exact path="/Aprofile" component={Aprofile}></Route>
        <Route exact path="/Showpro" component={Showpro}></Route>
     <Route
            exact
            path="/CartPage"
            render={(props) => (
              <CartPage
              {...props}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            )}
            />
          <Route
            exact
            path="/Product"
            render={(props) => <Product {...props} addToCart={addToCart} />}
            />
            <Route
            exact
            path="/Vegetables"
            render={(props) => <Vegetables {...props} addToCart={addToCart} />}
            />
            <Route
            exact
            path="/Beverages"
            render={(props) => <Beverages {...props} addToCart={addToCart} />}
            />
             <Route
            exact
            path="/Dairy"
            render={(props) => <Dairy {...props} addToCart={addToCart} />}
            />
             <Route
            exact
            path="/Healthdrinks"
            render={(props) => <Healthdrinks {...props} addToCart={addToCart} />}
            />
          
            <Provider store={store}><Route exact path="/FeedbackForm" component={FeedbackForm}></Route> </Provider>
          </Switch>
    </div>
    </Router>
  )
}

export default App
