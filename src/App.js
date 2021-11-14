import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AddProducts from './Pages/Admin/AddProducts/AddProducts';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import ManageOrders from './Pages/Admin/ManageOrders/ManageOrdes';
import Dashbord from './Pages/Dashbord/Dashbord';
import MyOrders from './Pages/Dashbord/MyOrders/MyOrders';
import MyReview from './Pages/Dashbord/MyReview/MyReview';
import Pay from './Pages/Dashbord/Pay/Pay';
import ExploreMore from './Pages/ExploreMore/ExploreMore';
import AdminRoute from './Pages/Form/AdminRoute/AdminRoute';
import Login from './Pages/Form/Login/Login';
import PrivetRoute from './Pages/Form/PrivetRoute/PrivetRoute';
import Register from './Pages/Form/Register/Register';
import Home from './Pages/Home/Home/Home';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
              <Login></Login>
          </Route>
          <Route exact path="/explore">
              <ExploreMore></ExploreMore>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <PrivetRoute exact path="/placeOrder/:orderId">
            <PlaceOrder></PlaceOrder>
          </PrivetRoute>
          <PrivetRoute exact path="/pay">
            <Pay></Pay>
          </PrivetRoute>
          <AdminRoute exact path="/manageOrders">
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <PrivetRoute exact path="/myOrder">
            <MyOrders></MyOrders>
          </PrivetRoute>
          <PrivetRoute exact path="/myReview">
            <MyReview></MyReview>
          </PrivetRoute>
          <AdminRoute exact path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute exact path="/addProducts">
            <AddProducts></AddProducts>
          </AdminRoute>
          <Route exact path="/dashbord">
            <Dashbord></Dashbord>
          </Route>
          <Route path="*">
                <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
