import React, {useEffect} from "react"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import SMContent from '../base/SMContent'
import {SMAdd,SMAddLink,SMAddSaying} from '../admin/index'
import SMHeader from "../base/SMHeader"
import SMFooter from "../base/SMFooter";
import {SMMainInit} from "../base/main";

import '../assets/css/main.css'
import '../assets/css/vendor.css'
import '../assets/css/base.css'

const Routelist = (props) => {

    useEffect(function () {
        SMMainInit();
    });

    return (
        <Router>
            <div id="top" className="s-wrap site-wrapper">
                <SMHeader/>
                <Routes>
                    <Route path="/" element={<SMContent/>}/>
                    <Route path="/home" element={<SMContent/>}/>
                    <Route path="/add" element={<SMAdd/>}/>
                    <Route path="/addLink" element={<SMAddLink/>}/>
                    <Route path="/addSaying" element={<SMAddSaying/>}/>
                </Routes>
                <SMFooter/>
            </div>
        </Router>
    );
}

export default Routelist;
