"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import { getLocalizedPathname } from "@/lib/i18n-config";

const Contact = () => {
  const { t, locale } = useTranslation();
  const getLocalizedPath = (path: string) => {
    return getLocalizedPathname(path, locale);
  };
  return (
    <>
      <div className="breadcumb-area contact-page d-flex">
        <div className="container !w-fit">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <div className="breadcumb-content breadcumb-blur !px-10">
                <div className="breadcumb-title">
                  <h4>{String(t("contact.breadcrumb.title"))}</h4>
                </div>
                <ul>
                  <li>
                    <Link href={getLocalizedPath("/")}>
                      <i className="bi bi-house-door-fill"></i>{" "}
                      {String(t("contact.breadcrumb.home"))}{" "}
                    </Link>
                  </li>
                  <li className="rotates">
                    <i className="bi bi-slash-lg"></i>
                    {String(t("contact.breadcrumb.current"))}
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
                <h4>{String(t("contact.section.getInTouch"))}</h4>
                <h1>{String(t("contact.section.howToReach"))}</h1>
                <p>{String(t("contact.section.description"))}</p>
              </div>
              <div className="contact_main_info">
                <div className="call-do-action-info">
                  <a
                    href="tel:+491784450530"
                    className="text-white text-decoration-none hover:text-primary"
                    title={String(t("contact.info.callAnytime"))}
                  >
                    <div className="call-do-social_icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                  </a>
                  <div className="call_info">
                    <p>{String(t("contact.info.emailAnytime"))}</p>
                    <h3>+49 174 911 17 15</h3>
                    <h3>+998 93 796 99 99</h3>
                  </div>
                </div>
                <div className="call-do-action-info">
                  <a
                    href="mailto:info@bizayla.com?subject=Inquiry from Website"
                    className="text-white text-decoration-none hover:text-primary"
                    title={String(t("contact.info.emailLabel"))}
                  >
                    <div className="call-do-social_icon">
                      <i className="fas fa-envelope-open"></i>
                    </div>
                  </a>
                  <div className="call_info">
                    <p>{String(t("contact.info.emailLabel"))}</p>
                    <h3>{String(t("contact.info.email"))}</h3>
                  </div>
                </div>
                <div className="call-do-action-info">
                  <div className="call-do-social_icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="call_info">
                    <p>{String(t("contact.info.locations"))}</p>
                    <span>{String(t("contact.info.address"))}</span>
                    <span>{String(t("contact.info.address2"))}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-box style_two">
                <div className="section_title style_three style_four text-center ">
                  <h4>{String(t("contact.form.contactUs"))}</h4>
                  <h1>{String(t("contact.form.getInTouch"))}</h1>
                </div>
                <form action="https://formspree.io/f/myyleorq" method="POST">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input
                          type="text"
                          name="name"
                          placeholder={String(t("contact.form.yourName"))}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input
                          type="text"
                          name="name"
                          placeholder={String(t("contact.form.phoneNo"))}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input
                          type="email"
                          name="name"
                          placeholder={String(t("contact.form.emailAddress"))}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box">
                        <input
                          type="text"
                          name="name"
                          placeholder={String(t("contact.form.subject"))}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-box message">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={10}
                          placeholder={String(t("contact.form.writeMessage"))}
                        ></textarea>
                      </div>
                    </div>
                    <div className="contact-form">
                      <button type="submit">
                        <i className="far fa-thumbs-up"></i>{" "}
                        {String(t("contact.form.requestCallBack"))}{" "}
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
      {/* <div className="map-section">
	<div className="-custon-container-fluid">
		<div className="row">
			<div className="col-lg-12 p-0">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48384.367867189205!2d-74.01058227968896!3d40.71751035716885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1609671967457!5m2!1sen!2sbd" width="1920" height="520" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
			</div>
		</div>
	</div>
</div> */}
    </>
  );
};
export default Contact;
