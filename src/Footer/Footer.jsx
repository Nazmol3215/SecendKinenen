import React from 'react';
import './Footer.css'; // CSS স্টাইলের জন্য আলাদা ফাইল

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-back-to-top">
        <a href="#top">Back to top</a>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Get to Know Us</h4>
          <ul>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#about">About Amazon</a></li>
            <li><a href="#investor">Investor Relations</a></li>
            <li><a href="#devices">Amazon Devices</a></li>
            <li><a href="#science">Amazon Science</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Make Money with Us</h4>
          <ul>
            <li><a href="#sell-products">Sell products on Amazon</a></li>
            <li><a href="#sell-business">Sell on Amazon Business</a></li>
            <li><a href="#sell-apps">Sell apps on Amazon</a></li>
            <li><a href="#affiliate">Become an Affiliate</a></li>
            <li><a href="#advertise">Advertise Your Products</a></li>
            <li><a href="#self-publish">Self-Publish with Us</a></li>
            <li><a href="#host">Host an Amazon Hub</a></li>
            <li><a href="#more">See More Make Money with Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Amazon Payment Products</h4>
          <ul>
            <li><a href="#business-card">Amazon Business Card</a></li>
            <li><a href="#points">Shop with Points</a></li>
            <li><a href="#reload">Reload Your Balance</a></li>
            <li><a href="#converter">Amazon Currency Converter</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Let Us Help You</h4>
          <ul>
            <li><a href="#covid">Amazon and COVID-19</a></li>
            <li><a href="#account">Your Account</a></li>
            <li><a href="#orders">Your Orders</a></li>
            <li><a href="#shipping">Shipping Rates & Policies</a></li>
            <li><a href="#returns">Returns & Replacements</a></li>
            <li><a href="#content">Manage Your Content and Devices</a></li>
            <li><a href="#help">Help</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
