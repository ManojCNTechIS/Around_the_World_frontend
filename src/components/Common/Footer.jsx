import React from 'react';
import DropDown from "../../assets/img/dropdown.png"
function Footer  () {
    return (
    <>
        <footer>
            <div className = "footer-container">
                <div className="left-footer">
                    <div className="Quicklinks">
                        <h3>Quick Links</h3>
                        <a href="/">Home</a>
                        <a href="#">Things to Do</a>
                        <a href="/preview">Tourist Attractions</a>
                        <a href="/favorite">Favorites</a>
                    </div>
                    <div className="address">
                        <h3>Address</h3>
                        <p>Jaelin Jefferson</p>
                        <p>1265 California St, Albany, GA 31707</p>
                        <p>+1 229 900 1409</p>
                        <p>craezguide@travelbug.com</p>
                    </div>
                    <div className="right-footer">    
                        <p>Subscribe to our newsletter</p>
                        <div className="email">
                            <input type="email"  placeholder="Your email" />
                            <img src = {DropDown} alt = "dropdown" />
                            <button className="footer-button">v</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="copyright">
                <p>TravelBug © All Rights Reserved</p>
            </div>    
        </footer>
    </>
    );
}
export default Footer