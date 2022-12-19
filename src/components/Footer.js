import React from "react";
import './css/footer.css';

function Footer() {
    let date = new Date();
    let currentYear = date.getFullYear();
    return (
        <div className="footer">
           <p>
                Copyright © {currentYear}
            </p>
        </div>
    )
}
export default Footer;