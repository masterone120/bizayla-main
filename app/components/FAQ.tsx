"use client";
import React, { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

const FAQ = () => {
  const { t, loading } = useTranslation();

  // Fetch FAQ data from translations
  const faqData = t("faq.faqData") as { question: string; answer: string }[];

  const [activeId, setActiveId] = useState<number | null>(null);

  if (loading || !faqData) {
    return (
      <section className="faq_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title style_three style_four text-center">
                <h4>FREQUENTLY ASKED QUESTIONS</h4>
                <h1>Quick Answers to Your Service Questions</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab_container">
                <div className="accordion">
                  <p>Loading...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title style_three style_four text-center">
              <h4>{String(t("faq.header.title"))}</h4>
              <h1>{String(t("faq.header.desc"))}</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tab_container">
              <div className="accordion">
                {faqData.map((item, idx) => (
                  <li key={idx} className={activeId === idx ? "active" : ""}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleAccordion(idx);
                      }}
                      className={activeId === idx ? "active" : ""}
                    >
                      <span>{item.question}</span>
                      <i
                        className={`bi bi-chevron-down ${
                          activeId === idx ? "active" : ""
                        }`}
                      ></i>
                    </a>
                    <p
                      style={{
                        display: activeId === idx ? "block" : "none",
                      }}
                    >
                      {item.answer}
                    </p>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
