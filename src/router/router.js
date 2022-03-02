import React, {useEffect} from "react"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import SMContent from '../base/SMContent'
import SMDetail from '../base/SMDetail'
import {SMAdd,SMAddLink,SMAddSaying,SMDefdoclist} from '../admin/index'
import SMHeader from "../base/SMHeader"
import SMFooter from "../base/SMFooter";
import {SMMainInitMenu} from "../base/main";

import '../assets/css/main.css'
import '../assets/css/vendor.css'
// import '../assets/css/base.css'
import $ from "jquery";

const Routelist = (props) => {

    useEffect(function () {
        SMMainInitMenu();
    });

    return (
        <Router>
            <div id="top" className="s-wrap site-wrapper">
                <SMHeader/>
                <Routes>
                    <Route path="/" element={<SMContent/>}/>
                    <Route path="/home" element={<SMContent/>}/>
                    <Route path="/detail" element={<SMDetail/>}/>
                    <Route path="/add" element={<SMAdd/>}/>
                    <Route path="/addLink" element={<SMAddLink/>}/>
                    <Route path="/addSaying" element={<SMAddSaying/>}/>

                    <Route path="/defdoclist" element={<SMDefdoclist/>}/>
                </Routes>
                <SMFooter/>
            </div>
        </Router>
    );
}

export default Routelist;
