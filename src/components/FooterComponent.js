import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-7 col-sm-5">
                        <h5>The English Course</h5>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a href="https://www.facebook.com/gabriel.heinrich.716/"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x" color="black"/></a>
                            <a href="https://www.linkedin.com/in/gabriel-matias-heinrich-0b051920/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" color="black"/></a>
                            <a href="https://www.instagram.com/gabyhein/"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" color="black"/></a>
                            <a href="http://twitter.com/"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="black"/></a>
                            <a href="http://youtube.com/"><FontAwesomeIcon icon={['fab', 'youtube']} size="2x" color="black"/></a>
                            <a href="mailto:"><FontAwesomeIcon icon={['fas', 'envelope']} size="2x" color="black"/></a>
                        </div>
                    </div>
                </div>
                <div className="copyright">             
                    <div className="col-auto">
                        <p>© 2021 The English Course. All rights reserved.</p>
                    </div>
                </div>       
            </div>
        </div>    
    );
}

export default Footer;