import React from "react";

const SectionSubscribe = () => {
  return (
    <section className="section-subscribe" id="section-subscribe">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="intro">
              <h6 className="section-subscribe-label">Newsletter</h6>
              <h3 className="section-subscribe-header">Our Experts Teacher</h3>
              <p className="section-subscribe-description">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
            <form action="#" id="subscribe-form">
              <input type="email" placeholder="Your Email" />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSubscribe;
