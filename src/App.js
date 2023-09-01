import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Navbar from './navbar-footer-component/Navbar';
import Footer from './navbar-footer-component/Footer';
import Tshirts from './pages/Tshirts';
import SignIn from './pages/Signin-Signup-pages/SignIn';
import SignUp from './pages/Signin-Signup-pages/SignUp';
import ForgotPassword from './pages/Signin-Signup-pages/ForgotPassword';
import SingleProductDetails from './pages-inner-components/SingleProductDetails';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import MyAccout from './pages/MyAccout';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Shorts from './pages/Shorts';
import Lowers from './pages/Lowers';
import TopChoices from './pages/TopChoices';
import Tracks from './pages/Tracks';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import ExchangePolicy from './pages/ExchangePolicy';

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = ['/signin', '/signup', '/forgotpassword'].includes(location.pathname);

  return (
    <div className="App">
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/tshirts' element={<Tshirts />} />
        <Route path='/shorts' element={<Shorts />} />
        <Route path='/lowers' element={<Lowers />} />
        <Route path='/topchoices' element={<TopChoices />} />
        <Route path='/tracks' element={<Tracks />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/myaccount' element={<MyAccout />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/singleproductdetails' element={<SingleProductDetails />} />
        <Route path='/terms' element={<TermsConditions />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/shipping' element={<ShippingPolicy />} />
        <Route path='/exchange' element={<ExchangePolicy />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

export default App;
