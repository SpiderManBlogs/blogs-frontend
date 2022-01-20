import React from 'react'


export default class SMFooter extends React.Component {
    render() {
        return (
            <footer className="s-footer">
            <div className="row">
                <div className="column large-full footer__content">
                    <div className="footer__copyright">Copyright &copy; 2019.Company name All rights reserved.<a
                        target="_blank" href="http://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a></div>
                </div>
            </div>

            <div className="go-top">
                <a className="smoothscroll" title="Back to Top" href="#top"></a>
            </div>
        </footer>
        )}
}
