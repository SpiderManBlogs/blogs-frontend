import React from 'react'


export default class SMHeader extends React.Component {
    render(){
        return (
            <header className="s-header">

                <div className="header__top">
                    <div className="header__logo">
                        <a className="site-logo" href="">
                            <img src={require('../assets/images/logo.svg')} alt="Homepage"/>
                        </a>
                    </div>

                    <div className="header__search">

                        <form role="search" method="get" className="header__search-form" action="#">
                            <label>
                                <span className="hide-content">Search for:</span>
                                <input type="search" className="header__search-field" placeholder="Type Keywords"
                                       value="" name="s" title="Search for:" autoComplete="off"/>
                            </label>
                            <input type="submit" className="header__search-submit" value="Search"/>
                        </form>

                        <a href="#" title="Close Search" className="header__search-close">Close</a>

                    </div>

                    <a href="" className="header__search-trigger"/>
                    <a href="" className="header__menu-toggle"><span>Menu</span></a>

                </div>

                <nav className="header__nav-wrap">

                    <ul className="header__nav">
                        <li className="current"><a href="" title="">Home</a></li>
                        <li className="has-children">
                            <a href="#" title="">Categories</a>
                            <ul className="sub-menu">
                                <li><a href="">Lifestyle</a></li>
                                <li><a href="">Health</a></li>
                                <li><a href="">Family</a></li>
                                <li><a href="">Management</a></li>
                                <li><a href="">Travel</a></li>
                                <li><a href="">Work</a></li>
                            </ul>
                        </li>
                        <li className="has-children">
                            <a href="#" title="">Blog Posts</a>
                            <ul className="sub-menu">
                                <li><a href="">Video Post</a></li>
                                <li><a href="">Audio Post</a></li>
                                <li><a href="">Gallery Post</a></li>
                                <li><a href="">Standard Post</a></li>
                            </ul>
                        </li>
                        <li><a href="" title="">Styles</a></li>
                        <li><a href="" title="">About</a></li>
                        <li><a href="" title="">Contact</a></li>
                    </ul>

                    <ul className="header__social">
                        <li className="ss-facebook">
                            <a href="#">
                                <span className="screen-reader-text">Facebook</span>
                            </a>
                        </li>
                        <li className="ss-twitter">
                            <a href="#">
                                <span className="screen-reader-text">Twitter</span>
                            </a>
                        </li>
                        <li className="ss-dribbble">
                            <a href="#">
                                <span className="screen-reader-text">Dribbble</span>
                            </a>
                        </li>
                        <li className="ss-pinterest">
                            <a href="#">
                                <span className="screen-reader-text">Behance</span>
                            </a>
                        </li>
                    </ul>

                </nav>
            </header>
        )
    }
}
