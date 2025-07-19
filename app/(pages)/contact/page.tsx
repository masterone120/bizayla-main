import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="breadcumb-area contact-page d-flex">
        <div className="container !w-fit">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <div className="breadcumb-content breadcumb-blur !px-10">
                <div className="breadcumb-title">
                  <h4>Contact Us</h4>
                </div>
                <ul>
                  <li>
                    <Link href="/">
                      <i className="bi bi-house-door-fill"></i> Home{" "}
                    </Link>
                  </li>
                  <li className="rotates">
                    <i className="bi bi-slash-lg"></i>Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="contact_area inner_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section_title">
                <h4>GET IN TOUCH</h4>
                <h1>How to Reach Us:</h1>
                <p>
                  At Bizayla, clear and effective communication with our
                  customers, partners, and business associates is one of our
                  core values. We are always ready to respond to your inquiries,
                  suggestions, and requests with attention and respect. Whether
                  you&apos;re interested in business collaboration, product
                  purchases, export opportunities, representation, or any other
                  matter — the Bizayla support and management team is here to
                  assist you.
                </p>
              </div>
              <div className="contact_main_info">
                <div className="call-do-action-info">
                  <div className="call-do-social_icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="call_info">
                    <p>Call us Anytime</p>
                    <h3>+49 174 911 17 15</h3>
                    <h3>+998 93 796 99 99</h3>
                  </div>
                </div>
                <div className="call-do-action-info">
                  <a
                    href="mailto:info@bizayla.com?subject=Inquiry from Website"
                    className="text-white text-decoration-none hover:text-primary"
                    title="Send us an email"
                  >
                    <div className="call-do-social_icon">
                      <i className="fas fa-envelope-open"></i>
                    </div>
                  </a>
                  <div className="call_info">
                    <p>Send an email anytime.</p>
                    <h3>info@bizayla.com</h3>
                  </div>
                </div>
                <div className="call-do-action-info">
                  <div className="call-do-social_icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="call_info">
                    <p>Our Locations</p>
                    <span>
                      Bizayla: Darmstädter Straße 11, 63811 Stockstadt, Bayern,
                      Germany
                    </span>
                    <span>
                      Chorbog Neighborhood, Sherobod District, Surxondaryo
                      Region, 191400 Republic of Uzbekistan
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-box style_two">
                <div className="section_title style_three style_four text-center ">
                  <h4>CONTACT US</h4>
                  <h1>Get In Touch with BIZAYLA</h1>
                </div>
                <form action="https://formspree.io/f/myyleorq" method="POST">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input type="text" name="name" placeholder="Phone No" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input
                          type="email"
                          name="name"
                          placeholder="E-Mail Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input type="text" name="name" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-box message">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={10}
                          placeholder="Write Message"
                        ></textarea>
                      </div>
                    </div>
                    {/* <div className="checkbox">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label htmlFor="vehicle1"> I have a bike</label>
                    </div> */}
                    <div className="contact-form">
                      <button type="submit">
                        <i className="far fa-thumbs-up"></i> Request Call Back{" "}
                      </button>
                    </div>
                  </div>
                </form>
                <div id="status"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_shape2 dance2">
          <img src="assets/images/main-home/service_shpe2.png" alt="" />
        </div>
      </section>
    </>
  );
};
export default Contact;
