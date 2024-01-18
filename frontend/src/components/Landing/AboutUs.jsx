import '../css/AboutUs.css'
import '../css/Responsive.css'

import bg from '../../assets/images/about-us.webp'
import bg1 from '../../assets/images/client-img/logo1.webp'
import bg2 from '../../assets/images/client-img/logo2.webp'
import bg3 from '../../assets/images/client-img/logo3.webp'
import bg4 from '../../assets/images/client-img/logo4.webp'
import bg5 from '../../assets/images/client-img/logo5.webp'
import bg6 from '../../assets/images/client-img/logo6.webp'
import bg7 from '../../assets/images/client-img/logo7.webp'
import bg9 from '../../assets/images/client-img/logo8.webp'
import bg8 from '../../assets/images/client-img/logo9.webp'

export function AboutUs() {
    return (
      <div>
        <section id="about" className="about_wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-4 mb-lg-0">
                <img decoding="async" src={bg} className="img-fluid" alt="About Us" />
              </div>
              <div className="col-lg-5 mb-4 mb-lg-0">
                <h3>Welcome to placement cell</h3>
                <p>Congratulations on taking the first step towards a bright and promising future. We are thrilled to have you join our platform, dedicated to empowering students like you to achieve their career aspirations.</p>
                <p>As the College Placement Cell, our mission is to connect you with remarkable internship and job opportunities that align with your skills, passions, and ambitions. We understand that your college journey has been a valuable experience, and now it's time to put your knowledge into action.</p>
                <p>Explore our extensive database of internships and job openings from leading companies in various industries. You'll find opportunities that cater to different academic backgrounds and interests, ensuring that there's something for everyone. Stay up to date with the latest trends, industry insights, and valuable resources. Here are some study materials you can go through.</p>
                <a href="/study-materials" className="main-btn primary-btn mt-4">Study Materials</a>
              </div>
            </div>
            <div className="row justify-content-center pt-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="row">
                  <div className="col-md-4 col-sm-6 mb-4">
                    <div className="single-logo-item">
                      <img decoding="async" src={bg1} className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4">
                    <div className="single-logo-item">
                      <img decoding="async" src={bg2} className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4">
                    <div className="single-logo-item">
                      <img decoding="async" src={bg3} className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4">
                    <div className="single-logo-item">
                      <img decoding="async" src={bg4} className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4">
                    <div className="single-logo-item">
                      <img decoding="async" src={bg5} className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4">
                    <div className="single-logo-item">
                      <img decoding="async" src={bg6} className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4">
                    <div className="single-logo-item">
                      <img decoding="async" src={bg7} className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4">
                    <div className="single-logo-item">
                      <img decoding="async" src={bg8} className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4">
                    <div className="single-logo-item">
                      <img decoding="async" src={bg9} className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="offset-lg-2 col-lg-4 col-md-10">
                <div className="client-info">
                  <div className="d-flex">
                    <span className="large">25</span>
                    <span className="smll">Years <br />of <br />Excellence</span>
                  </div>
                  <div className="call-now d-flex py-4">
                    <div>
                      <span className="fa fa-phone-alt"></span>
                    </div>
                    <div className="ms-4">
                      <p>Contact Us </p>
                      <h5>(+91) 123-456-7890</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }


