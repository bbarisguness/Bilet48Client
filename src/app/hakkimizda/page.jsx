import LeftMenu from "@/components/footerLinks/leftmenu";

export const metadata = {
  title: "Hakkımızda | Bilet48",
  description: "Hakkımızda description",
};

export default function Page() {
  return (
    <>
      <div className="header-margin"></div>
      <div className="container mb-50">
        <div className="row">
          <LeftMenu activeLink="hakkimizda" />
          <div className="col-lg-9">
            <div className="page-detail typography">
              <div>
                <div>
                  <p>
                    <strong>BuBilet Nedir?</strong>
                    <br />
                    <br />
                    Bilet48, organizatörler tarafından düzenlenen farklı
                    kategorilerdeki etkinlikleri, dijital medya platformlarını
                    kullanarak milyonlara ulaştıran yeni nesil online bilet
                    satış sitesidir.
                    <br />
                    <br />
                    <strong>Misyonumuz&nbsp;</strong>
                    <br />
                    <br />
                    Kültürel, sanatsal ve sosyal yaşamı destekleyen
                    etkinlikleri, geniş kitlelerle buluşturup, kolay
                    erişilebilir, kaliteli ve güvenilir bilet hizmeti sunmak.
                    <br />
                    <br />
                    <strong>Vizyonumuz&nbsp;</strong>
                    <br />
                    <br />
                    Etkinlik bileti dendiğinde akla gelen ilk ve en başarılı
                    dijital platform olmak.
                  </p>
                  <h2>
                    <strong>
                      <br />
                      Bilet48’de İade İşlemini Nasıl Yaparım?
                      <br />
                      <br />
                    </strong>
                  </h2>
                  <p>
                    Bilet48 sitesinde iadeler Etkinlik Detayında ve/veya
                    Kurallarında aksi belirtilmediği hallerde Etkinlikten 48
                    saat öncesine kadar gerçekleştirilebilmektedir.
                    <br />
                    <br />
                    Eğer etkinliğe belirtilen zaman aralığı varsa tarafınıza
                    iletilen bilet kodlarınızı destek@bilet48.com.tr mail
                    adresine iptal ettirmek istediğinizi belirterek yazmanız
                    yeterlidir.
                    <br />
                    <br />
                    İade işleminiz tamamlandığı takdirde sistemde kayıtlı olan
                    telefon numaranıza ve e-mail adresinize bilgilendirme
                    yapılmaktadır.
                    <br />
                    <br />
                    Bilet iade ücretleriniz bankanıza bağlı olarak 3 ila 20 iş
                    günü içerisinde işlem yaptığınız kartınıza aktarılmaktadır.
                    <br />
                    <br />
                    <em>
                      Organizasyon firması tarafından iptal edilen etkinliklerde
                      ise tarafınıza bilgilendirme mesajı gönderilmektedir.
                      Biletleriniz otomatik olarak iptal edilmektedir.
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
