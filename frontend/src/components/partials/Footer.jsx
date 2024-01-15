
import './footer.module.css';

export function Footer() {
    return (
        <div>
            <section id="contact" className="footer_wrapper mt-3 mt-md-0">
  <div className="container mt-5">
    <div className="row align-items-center justify-content-center">
      <div className="col-12 text-center">
        <div className="footer-logo mb-3 mb-md-0">
        </div>
        <div className="my-4 social-icons">
          <h5>Follow Us</h5>
          <ul className="list-unstyled d-flex justify-content-center align-items-center">
            <li><a href="#"><i className="fab fa-facebook" /></a></li>
            <li><a href="#"><i className="fab fa-twitter" /></a></li>
            <li><a href="#"><i className="fab fa-instagram" /></a></li>
            <li><a href="#"><i className="fab fa-youtube" /></a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-8 col-sm-12">
        <p className="footer-text text-center my-2">Copyright © 2023 All rights reserved 
          is made with <i className="far fa-heart" /> by <a href="#">border-radius</a>
        </p>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
