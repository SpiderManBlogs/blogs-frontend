import React from 'react'
import ReactDom from 'react-dom'
import SMHeader from "./base/SMHeader"
import SMContent from './base/SMContent'
import SMFooter from "./base/SMFooter";


import './assets/css/base.css'
import './assets/css/main.css'
import './assets/css/vendor.css'

import {SMMainInit} from './base/main'

// import './assets/js/main'

class App extends React.Component {

    constructor(props) {
        super(props);
        SMMainInit();
    }

    render(){
        return (
            <div>
                <SMHeader />
                <SMContent />
                <SMFooter />
            </div>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("top"))
