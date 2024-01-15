import {useNavigate } from 'react-router-dom'
import '../Css/studentDashboard1.css';
import '../Css/studentDashboard2.css';


export function SideBar() {
    const navigate = useNavigate();
  
    return (
          <aside>
              <div className="top">
              <div className="logo">
                  <h1> UVPCE </h1>
                  <h2><span className="danger">Placement Helper</span></h2>
              </div>
              <div className="close">
                  <span className="material-icons-sharp"> close </span>
              </div>
              </div>
              <div className="sidebar" >
              <a href="#"  onClick={() => {
                      navigate("/student/dashboard");
                  }}>
                  <span className = "material-icons-sharp"> dashboard </span>
                  <h3>Dashboard</h3>
              </a>
              <a href="#"  onClick={() => {
                      navigate("/student/Update");
                  }}>

                  <span className="material-icons-sharp"> person_outline </span>
                  <h3>Update</h3>
              </a>
              <a href="#" onClick={() => {
                      navigate("/student/Applied");
                  }}>
                  <span className="material-icons-sharp"> receipt_long </span>
                  <h3>Applied</h3>
              </a>
              <a href="#"onClick={() => {
                      navigate("/student/FeedBack");
                  }} >
                  <span className="material-icons-sharp"> receipt_long </span>
                  <h3>FeedBack</h3>
              </a>
              <a href="/logout" onClick={() => {
                      navigate("/student/Logout");
                  }}>
                  <span className="material-icons-sharp"> logout </span>
                  <h3>Logout</h3>
              </a>
              </div>
          </aside>
      );
  }


