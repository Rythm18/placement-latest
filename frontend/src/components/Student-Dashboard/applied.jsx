import {SideBar} from './sideBar';
import '../Css/studentDashboard1.css';
import '../Css/studentDashboard2.css';

const data = [{
    id : 1,
    name : "TCS",
    role : "SDE 1",
    package : 10
} , {
    id : 2,
    name : "TATA",
    role : "SDE 1",
    package : 12
} , {
    id : 3,
    name : "GOOGLE",
    role : "SDE 1",
    package : 15
}]

const renderList = () => {
    const elements = [];

    for (let i = 0; i < data.length; i++) {
      elements.push(<tr key={i}> 
        <td>{data[i].id}</td> 
        <td>{data[i].name}</td> 
        <td>{data[i].role}</td> 
        <td>{data[i].package}</td>
    </tr>);
    }

    return elements;
  };

export function Applied(){
    return(
        <div className="container">
            <SideBar/>
            <div className="applied">
                <main>
                <h1>Applied Companies</h1>
                <div className="recent-orders">
                    <h2></h2>
                    <table id="verified">
                    <thead>
                        <tr>
                        <th className="sortable">ID</th>
                        <th className="sortable">Company Name</th>
                        <th className="sortable">Role</th>
                        <th className="sortable">Package</th>
                        </tr>
                        {renderList()}
                    </thead>
                    </table>
                    <a href="#">Show All</a>
                </div>
                </main>
            </div>
        </div>
    )
}