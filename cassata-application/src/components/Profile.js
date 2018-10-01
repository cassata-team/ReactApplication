import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Profile.css';
import pic from '../images/pic.png';

import About from './About'
import Friends from './Friends'
import Activities from './Activities'
import Favourites from './Favourites'
import Blogs from './Blogs'
import MenuCard from './MenuCard'

const routes  = [
    {
        path: "/",
        exact: true,        
        main: () => <About />,
    },
    {
        path: "/friends",
        main: () => <Friends />,
    },
    {
        path: "/activities",
        main: () => <Activities />,
    },
    {
        path: "/favourites",
        main: () => <Favourites/>,
    },
    {
        path: "/blogs",
        main: () => <Blogs/>,
    },
    {
        path: "/menu-card",
        main: () => <MenuCard/>,
    }
]

class Profile extends Component{
    
    render(){
        return (
            <Router>
                 <div style={{ display: "flex" }}>
                    <div className="innerDiv">
                        <div className="topDiv" style={{ display: "flex"}}>
                            <img src={pic}  className="logo" /> 
                        </div>
                        <div className="innerDiv">
                            <ul style={{ listStyleType: "none", padding: 0 }}>
                                <li>
                                <Link to="/">About</Link>
                                </li>
                                <li>
                                <Link to="/friends">Friends</Link>
                                </li>
                                <li>
                                <Link to="/activities">Activities</Link>
                                </li>
                                <li>
                                <Link to="/favourites">Favourites</Link>
                                </li>
                                <li>
                                <Link to="/blogs">Blogs</Link>
                                </li>
                                <li>
                                <Link to="/menu-card">MenuCard</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            
                    <div style={{ flex: 1, padding: "10px" }}>
                    {routes.map((route, index) => (
                        <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        />
                    ))}
                    </div>
                </div>
            </Router>  
            );
    }
}


export default Profile;