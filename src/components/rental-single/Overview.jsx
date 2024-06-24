"use client";

import { useState } from "react";
import Amenities from "./Amenities";

const Overview = () => {
  const [isDescOpened, setDescOpened] = useState(false);
  return (
    <>
      <div>
        <h3 className="text-22 fw-500">Etkinlik Detayları</h3>
        <div className={`overviewContentContainer ${isDescOpened && "active"}`}>
          <p className="text-dark-1 text-15 mt-20">
            Kapı Açılış : 22.00 Etkinlikte 18 yaş sınırı vardır. <br />
            Mekan girişinde kadın-erkek eşitliğine önem verilmektedir.
            Organizatör bu kurala aykırılık oluşturan kişileri etkinlik mekanına
            almama hakkına sahiptir. <br />
            Biletler dönemsel olarak fiyat değişikliği göstermektedir. <br />
            Organizatör firma etkinlik için uygun görmediği kişileri içeri
            almama hakkına sahiptir. <br />
            Organizasyon şirketi, öngörülmeyen ve kaçınılmaz nedenlerden ötürü
            programda her türlü değişiklik yapma hakkını saklı tutar. <br />
            Etkinlik alanına dışarıdan yiyecek ve içecek alınmamaktadır. <br />
            Etkinlik alanına profesyonel ses ve görüntü araçları (video kamera
            ve fotoğraf makinası) ile girilmemektedir. <br />
            Etkinlik süresince kayıt yapılmasına izin verilmeyecektir. <br />
            Etkinlik alanına yanıcı, patlayıcı (deodorant, sprey, parfüm,
            kolonya vb. gibi), parlayıcı, kesici ve delici olarak
            kullanılabilecek her türlü alet, termos, motor kaskı ve lazer imleci
            ile girilmemektedir. <br />
            Tüm katılımcıların kimliklerini yanlarında bulundurması ve
            istendiğinde ibraz etmeleri gerekmektedir. <br />
            Etkinlik alanında yanınızda bulunan eşyaların sorumluluğunun size
            ait olduğunu hatırlatmak isteriz. <br />
            Güvenlik personeli, etkinlik alanına giren herkesi güvenlik
            aramasına tabii tutacaktır. <br />
            Etkinlik biletleri sadece organizasyon sahibi tarafından belirlenen
            resmi satış noktalarından alınmalıdır. <br />
            Organizasyon sahibi resmi satış noktalarından alınmayan biletlerin
            sahiplerini etkinlik alanından çıkarma hakkına sahiptir. <br />
            Etkinlik biletleri devredilemez ve iade edilemez. Kayıp biletler
            için yenisi basılmayacaktır. <br />
            Satın alınan bilet yazılı izin alınmadığı taktirde; reklam, yarışma,
            çekiliş,promosyon vb. Kişisel kullanım haricinde ticari ya da ticari
            olmayan amaçlarda kullanılamaz. Bu amaçla kullanılan biletler iptal
            edilecektir ve yasal işlem başlatılacaktır. <br />
            Etkinliğe katılan kişilerin fotoğraf ve video çekimlerinin tanıtım
            materyallerinde kullanım hakkı etkinlik organizasyonuna ait olup
            katılımcı etkinliğe katılarak bu hakkın kullanılmasını kabul
            etmektedir. <br />
            Profesyonel olmayan cihazlarla, katılımcıları ve sanatçıları
            rahatsız edecek ve özel hayat gizliliğini ihlal edecek çekim
            yapılmamasına özen gösterilmelidir. <br />
            Etkinlik Ceysa Otomotiv tarafından düzenlenmektedir. <br />
          </p>
          <div className={`readMore ${isDescOpened && "active"}`}>
            <div className="allButton">
              <span onClick={() => setDescOpened(true)} className="first">
                Devamı...
              </span>
              <span onClick={() => setDescOpened(false)} className="last">
                Kapat...
              </span>
            </div>
          </div>
        </div>

        {/* <a
          href="#"
          className="d-block text-14 text-blue-1 fw-500 underline mt-10"
        >
          Show More
        </a> */}
      </div>

      <div className="border-top-light mt-40 mb-40"></div>
      {/* End border-top-light */}

      {/* <div>
        <h3 className="text-22 fw-500">Amenities</h3>
        <Amenities />
        <a
          href="#"
          className="d-block text-14 text-blue-1 fw-500 underline mt-20"
        >
          Show all 29 amenities
        </a>
      </div> */}
      {/* End aminities */}
    </>
  );
};

export default Overview;
