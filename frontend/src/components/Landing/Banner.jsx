import '../css/Banner.css'
import '../css/Responsive.css'

import bg from '../../assets/images/home-right.webp'

export function Banner(){
    return (
        <div>
            <section id="home" className="banner_wrapper">
  <div className="container">
    <div className="row">
      <div className="col-lg-7 order-lg-1 order-2 banner-content">
        <h2 className="text-uppercase position-relative">Welcome to</h2>
        <h1 className="text-uppercase">UVPCE Placement Cell</h1>
        <h5 className="text-uppercase" />
        <div className="mt-5">
          <a className="main-btn primary-btn" href="/login" id="loginButton">Login</a>
          <a className="main-btn secondary-btn ms-4" href="/Form">Register</a>
          <a className="main-btn secondary-btn ms-4" href="/companyLogin">companyLogin</a>
        </div>
      </div>
      <div className="col-lg-5 order-lg-2 order-1">
        <div className="top-right-img">
          <img decoding="async" src={bg} className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}