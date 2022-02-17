import React, {useEffect} from "react"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import SMContent from '../base/SMContent'
import {SMAdd,SMAddLink,SMAddSaying,SMDefdoclist} from '../admin/index'
import SMHeader from "../base/SMHeader"
import SMFooter from "../base/SMFooter";
import {SMMainInit} from "../base/main";

import '../assets/css/main.css'
import '../assets/css/vendor.css'
import '../assets/css/base.css'
import $ from "jquery";

const Routelist = (props) => {

    useEffect(function () {
        SMMainInit();
        $("#loader").fadeOut("slow", function () {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        });

        // for hero content animations
        $("html").removeClass('ss-preload');
        $("html").addClass('ss-loaded');
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

                    <Route path="/defdoclist" element={<SMDefdoclist/>}/>
                </Routes>
                <SMFooter/>
            </div>
        </Router>
    );
}

export default Routelist;
