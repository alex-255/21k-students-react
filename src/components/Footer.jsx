import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 col-xxl-2">
              <h5 className="footer-header">Company Info</h5>
              <a href="#">About Us</a>
              <a href="#">Carrier</a>
              <a href="#">We are hiring</a>
              <a href="#">Blog</a>
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xxl-2">
              <h5 className="footer-header">Legal</h5>
              <a href="#">About Us</a>
              <a href="#">Carrier</a>
              <a href="#">We are hiring</a>
              <a href="#">Blog</a>
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xxl-2">
              <h5 className="footer-header">Features</h5>
              <a href="#">Business Marketing</a>
              <a href="#">User Analytic</a>
              <a href="#">Live Chat</a>
              <a href="#">Unlimited Support</a>
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xxl-2">
              <h5 className="footer-header">Resources</h5>
              <a href="#">IOS & Android</a>
              <a href="#">Watch a Demo</a>
              <a href="#">Customers</a>
              <a href="#">API</a>
            </div>
            <div className="col-12 col-xxl-4">
              <h5 className="footer-header">Get In Touch</h5>
              <a className="footer-phone" href="tel:+14801111111">
                (480) 111-1111
              </a>
              <address className="footer-address">
                4517 Washington Ave. Manchester, Kentucky 39495
              </address>
              <a href="mailto:example@gmail.com" className="footer-email">
                example@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
      <section className="section-additional">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-lg-8 footer-copyright">
              <h6>Made With Love By Figmaland All Right Reserved </h6>
            </div>
            <div className="col-12 col-lg-4 footer-social">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
