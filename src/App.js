import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/NotFound/NotFound";
import Details from "./components/Details/Details";
import AuthProvider from "./Context/AuthProvider";
import Login from './components/Shared/Login/Login/Login';
import PrivateRoute from './components/Shared/Login/PrivateRoute/PrivateRoute';
import Register from './components/Shared/Register/Register';
import MainLogin from './components/Shared/Login/Login/MainLogin/MainLogin';
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/details/:detailsId">
            <Details></Details>
          </PrivateRoute>
          <Route path="/login">
            <MainLogin></MainLogin>
          </Route>
          
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
