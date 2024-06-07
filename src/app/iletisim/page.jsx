"use client";

import { useState } from "react";
import Faq from "@/components/faq/Faq";
import ContactForm from "@/components/common/ContactForm";

//Sık sorulan sorular(faq)
const Section1 = () => {
  return (
    <div className="accordion -simple row y-gap-20 js-accordion" id="Faq1">
      <Faq />
    </div>
  );
};

//Destek Formu
const Section2 = () => {
  return (
    <div className="m-auto" style={{maxWidth: 600}}>
        <ContactForm />
    </div>
  )
};

//İletişim
const Section3 = () => {
  return (
    <div className="contact-home">
      <div className="contact-home-top">
        <span>
          Bilet 48 Organizasyon Reklam Kültür Turizm Sanayi Ticaret A.Ş
        </span>
      </div>
      <div className="contact-home-area">
        <div className="contact-home-box">
          <span>
            <b>ADRES</b>
            <p>
              Çınarlı Mah, Ozan Abay Cd. (Ege Perla Avm) B Kule D:84 Konak -
              İzmir
            </p>
          </span>
          <span>
            <em>Mersis No</em>
            <p>0381046807200001</p>
          </span>
          <span>
            <em>Ticari Sicil No</em>
            <p>195660</p>
          </span>
        </div>
        <div className="contact-home-box">
          <span>
            <b>MÜŞTERİ HİZMETLERİ</b>
            <a href="tel://+90850 303 87 82">0850 303 87 82</a>
          </span>
          <span>
            <em>Çalışma Saatleri</em>
            <p className="mb-0">Hafta içi: 09:00 - 21:00</p>
            <p>Cumartesi - Pazar: 12:00 - 21:00</p>
          </span>
        </div>
        <div className="social-media">
          <b>BİZİ TAKİP EDİN</b>
          <div className="social-media-box">
            <a
              target="_blank"
              title="Facebook"
              href="https://www.facebook.com/bubiletcomtr/"
            >
              <i className="icon-facebook text-20"></i>
            </a>
            <a
              target="_blank"
              title="İnstagram"
              href="https://www.instagram.com/bubilet/"
            >
              <i className="icon-instagram text-20"></i>
            </a>
            <a
              target="_blank"
              title="Twitter"
              href="https://twitter.com/bubiletcomtr"
            >
              <i className="icon-twitter text-20"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="header-margin"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-tab-menu">
              <ul>
                <li
                  onClick={() => setActiveTab(0)}
                  className={`${activeTab == 0 ? "active" : ""}`}
                >
                  Sıkça Sorulan Sorular
                </li>
                <li
                  onClick={() => setActiveTab(1)}
                  className={`${activeTab == 1 ? "active" : ""}`}
                >
                  Destek Formu
                </li>
                <li
                  onClick={() => setActiveTab(2)}
                  className={`${activeTab == 2 ? "active" : ""}`}
                >
                  İletişim Bilgileri
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 mb-50">
            {activeTab == 0 && <Section1 />}
            {activeTab == 1 && <Section2 />}
            {activeTab == 2 && <Section3 />}
          </div>
        </div>
      </div>
    </>
  );
}
