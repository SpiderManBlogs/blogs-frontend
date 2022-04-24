import React, {useEffect} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SMContent from '../base/SMContent'
import SMDetail from '../base/SMDetail'
import {SMAdd, SMAddLink, SMAddSaying, SMDefdoclist} from '../admin/index'
import SMHeader from "../base/SMHeader"
import SMFooter from "../base/SMFooter";
import {SMMainInitMenu} from "../base/main";

import '../assets/css/main.css'
import '../assets/css/vendor.css'
// import '../assets/css/base.css'

const Routelist = (props) => {

    useEffect(function () {
        SMMainInitMenu();
    });

    return (
        <Router>
            <div id="top" className="s-wrap site-wrapper">
                <SMHeader/>
                <Routes>
                    <Route path="/blogs/" element={<SMContent/>}/>
                    <Route path="/blogs/home" element={<SMContent/>}/>
                    <Route path="/blogs/detail" element={<SMDetail/>}/>
                    <Route path="/blogs/add" element={<SMAdd/>}/>
                    <Route path="/blogs/addLink" element={<SMAddLink/>}/>
                    <Route path="/blogs/addSaying" element={<SMAddSaying/>}/>

                    <Route path="/blogs/defdoclist" element={<SMDefdoclist/>}/>
                </Routes>
                <SMFooter/>
            </div>
        </Router>
    );
}

export default Routelist;
