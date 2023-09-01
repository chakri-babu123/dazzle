import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assests/dazzle-images/logo.png'
const SignIn = () => {
  return (
    <>
      <div className="axil-signin-area">


<div className="signin-header">
    <div className="row align-items-center">
        <div className="col-sm-4">
            <Link to={"/"} className="site-logo mx-5"><img src={logo} alt="logo"/></Link>
        </div>
        <div className="col-sm-8">
            <div className="singin-header-btn">
                <p>Not a member?</p>
                <Link to="/signup" className="axil-btn btn-bg-secondary sign-up-btn">Sign Up Now</Link>
            </div>
        </div>
    </div>
</div>


<div className="row">
    <div className="col-xl-4 col-lg-6">
        <div className="axil-signin-banner bg_image bg_image--9">
          
        </div>
    </div>
    <div className="col-lg-6 offset-xl-2">
        <div className="axil-signin-form-wrap">
            <div className="axil-signin-form">
                <h3 className="title">Sign in to eTrade.</h3>
                <p className="b2 mb--55">Enter your detail below</p>
                <form className="singin-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" value="annie@example.com"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" value="123456789"/>
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-between">
                        <button type="submit" className="axil-btn btn-bg-primary submit-btn">Sign In</button>
                        <Link to={"/forgotpassword"} className="forgot-btn">Forget password?</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default SignIn