import React from 'react';
import './Footer.css';


export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <address>
                        <h5>About us</h5>
                        <em><b>Here are not real contacts!</b></em>
                        <strong>Our contacts:</strong>
                        <em>
                            Customer service email
                        </em>
                        <a href="mailto:company_email@postbox.com">company_email@postbox.com</a>
                        <em>
                            Customer service phone
                        </em>
                        <a href="tel:+3531234567">(311)123-45-67</a>
                        <strong>Our address:</strong>
                        <span>1600 Street name</span>
                        <span>The best city</span>
                        <span>County of the city</span>
                        <span>Country</span>
                    </address>
                    <form>
                        <h6>Contact us via the form</h6>
                        <label>
                            <em>Your name:</em>
                            <input type="text" />
                        </label>
                        <label>
                            <em>Your email address:</em>
                            <input type="email" />
                        </label>
                        <label>
                            <em>Please provide any information relating to your enquiry:</em>
                            <textarea></textarea>
                        </label>
                        <button type="submit" onClick={(e)=>e.preventDefault()}>
                            Send enquiry
                        </button>
                    </form>
                    <p className='footer-copyright'>&copy; All photo rights belong to their respective owners</p>
                </div>
            </div>
        </footer>
    );
}