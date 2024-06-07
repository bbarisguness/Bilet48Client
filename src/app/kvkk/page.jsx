import LeftMenu from "@/components/footerLinks/leftmenu";
import Link from "next/link";

export const metadata = {
  title: "KVKK | Bilet 48",
  description: "Kişisel Verilerin Korunması Kanunu description",
};

export default function Page() {
  return (
    <>
      <div className="header-margin"></div>
      <div className="container">
        <div className="row">
          <LeftMenu activeLink="kullanim-kosullari" />
          <div className="col-lg-9">
            <div className="page-detail typography">
              <div>
                <p>
                  <strong>
                    KİŞİSEL VERİLERİN KORUNMASI POLİTİKASI – AYDINLATMA METNİ
                  </strong>
                </p>
                <p>
                  <br />
                  Bilet 48 olarak vermekte olduğumuz hizmet gereğince;
                  hizmet-sözleşme ilişkisinin kurulması, hizmet devamlılığının
                  sağlanması, hizmetlerimizin ifa edilmesi, yasalardan
                  kaynaklanan sorumluluklar gereğince kişisel verileriniz
                  kullanılmak, kaydedilmek, saklanmak, muhafaza edilmek
                  güncellenmek, yeniden düzenlemek, açıklanmak, aktarılmak
                  ve/veya sınıflandırılmak, devralınmak suretiyle ve mevzuatta
                  yer alan şekillerde işlenebilecektir.
                </p>
                <p>
                  Siz değerli Web Site ve Mobil Uygulama kullanıcımızın
                  güvenliğini göz önünde bulundurarak, başta özel hayatın
                  gizliliği olmak üzere, temel hak ve özgürlüklerin korunması
                  amacıyla, &nbsp; &nbsp; Bilet 48, kişisel verilerinizin hukuka
                  aykırı olarak işlenmesini ve erişilmesini önleme ve
                  muhafazasını sağlama amacıyla, gereken güvenlik düzeyini
                  sağlamaya yönelik tüm tedbirleri almaktadır. Kişisel verilerle
                  ilgili düzenlenen 6698 sayılı Kişisel Verilerin Korunması
                  Kanunu (“KVKK” olarak anılacaktır.) ve bağlı yönetmelik ve
                  tebliğlere istinaden aydınlatma yükümlülüğümüz kapsamında bu
                  metni hazırlamış bulunmaktayız. İşbu aydınlatma metni ile
                  şirketimiz tarafından işlenen kişisel verileriniz hakkında
                  sizleri bilgilendirmeyi hedeflemekteyiz.
                </p>
                <p>
                  <strong>1. VERİ SORUMLUSU</strong>
                  <br />
                  Bilet 48, KVKK ve ilgili düzenlemeler kapsamında “veri
                  sorumlusu” sıfatına haiz olup tarafımıza aşağıda yer verilen
                  iletişim bilgileri ile ulaşmanız mümkündür.
                  <br />
                  Şirket Unvanı: Bilet 48 Organizasyon Reklam Kültür ve Turizm
                  Sanayi Ticaret Anonim Şirketi
                  <br />
                  Mersis No: 0381046807200001
                  <br />
                  Vergi No: 3810468072
                  <br />
                  Adres &nbsp;: Çınarlı Mah. Ozan Abay Cad. No: 10 İç Kapı No:
                  084 Konak/ İzmir Tel &nbsp; &nbsp; &nbsp; : 0850 303 87 82
                  <br />
                  E-posta:{" "}
                  <a href="mailto:destek@bilet48.com.tr">
                    destek@bilet48.com.tr
                  </a>
                </p>
                <p>
                  <br />
                  <strong>2. İŞLENEN VERİLERİNİZ</strong>
                  <br />
                  Şirketimizden bir defaya mahsus hizmet almanız ve/veya
                  Sitemize üye olmanız durumunda işlenen kişisel verileriniz
                  aşağıda sayılmaktadır.&nbsp;
                  <br /> &nbsp; &nbsp;<strong>Kimlik Bilgileriniz:</strong> Ad
                  soyad, T.C. kimlik no, vergi no, doğum tarihi ve cinsiyeti.
                  <br /> &nbsp; &nbsp;<strong>
                    İletişim Bilgileriniz:
                  </strong>{" "}
                  İşyeri adresi, ev adresi, e-posta, Kep adresi, sabit hat ve
                  GSM ( Cep Telefonu) numarası.
                  <br /> &nbsp; &nbsp;
                  <strong>Ödeme ve Finans Bilgileriniz:</strong> Ürün/ hizmet
                  satın alma işlemi sırasında alınan ve onay vermeniz halinde
                  kayıtlı hale gelecek ve işlem sırasında size hatırlatılacak
                  olan banka kredi kartı, banka hesabı ve banka kartı gibi banka
                  hesap bilgileriniz, ödeme yöntem bilgileriniz, ödeme belgesi,
                  dekont, fatura bilgileri.
                  <br /> &nbsp; &nbsp;<strong>
                    Lokasyon Bilgileriniz:
                  </strong>{" "}
                  Seçilen bölge, şehir, gibi lokasyon verileri.&nbsp;
                  <br /> &nbsp; &nbsp;
                  <strong>
                    İş Ortakları, tedarikçiler, ajanslar ve çalışanları ile
                    ilgili olarak;
                  </strong>{" "}
                  imza sirküleri, faaliyet belgesi, vergi levhası, ıban, banka
                  bilgileri,&nbsp;
                  <br /> &nbsp; &nbsp;
                  <strong>
                    Çalışan Aday ve Çalışanlar ile ilgili olarak;
                  </strong>{" "}
                  Özgeçmiş, fotoğraf, Mülakat notları, işe giriş- çıkış
                  evrakları, Performans değerlendirme kayıtları, mail izleme
                  bilgisi vs.
                  <br /> &nbsp; &nbsp;
                  <strong>Müşteri İşlemlerine Dair Bilgileriniz:</strong>{" "}
                  Ürün/Hizmet sipariş, fatura bilgileriniz, talep ve şikayet
                  bilgileriniz, Çağrı merkezi/hizmet kalitesi ses kaydı, IP
                  adresi, Mac ID, gezinme bilgileri, kullanıcı adı, şifre
                  bilgileriniz, ticari iletişim izinleri, onay verilen hukuki
                  metin ve/veya Sözleşmeler, pazarlama faaliyetlerine ilişkin
                  veriler,&nbsp;
                  <br /> &nbsp; &nbsp;<strong>ÇEREZ BİLGİLERİ:</strong> Çerez,
                  ziyaret ettiğiniz bir web sitesi tarafından cihazınızda
                  (bilgisayar, telefon vb.) depolanan bilgilerdir. Çerezler
                  genellikle ilgili web sitesine ait dil tercihiniz veya
                  konumunuz gibi ayarlarınızı saklamak için kullanılır. Ayrıca
                  çerezler, kişisel bilgilerinizi (adınız, e-posta adresiniz,
                  telefon numaranız, parolanız, konumunuz) ve izin verdiğiniz
                  diğer bilgileri saklamak için kullanılabilir. Sitenin
                  ulaşabileceği bilgiler sizin sunduklarınızla sınırlıdır. Web
                  siteleri onlara vermediğiniz bilgilere erişemez.&nbsp;
                  <br />
                  Çerez türleri;&nbsp;
                  <br />- &nbsp; &nbsp;Oturum çerezleri: Geçici çerezler olarak
                  da bilinir. Oturumun sürekliliğinin sağlanması için
                  kullanılır, sadece oturum sırasında geçici olarak depolanır ve
                  tarayıcı penceresinin kapanması ile silinir.
                  <br />- &nbsp; &nbsp;Kalıcı çerezler: Tarayıcı veya uygulamayı
                  kapattıktan sonra bilgisayar/mobil cihazda kalır ve web
                  sitesine döndüğümüzde sizi tanımak için kullanılır. Belirli
                  bir tarihte veya belirli bir süre sonra kendiliğinden silinir.
                  <br />- &nbsp; &nbsp;Zorunlu çerezler: İnternet sitesinin
                  çalışması için gerekli ve önemli olan çerezlerdir. Kullanıcı
                  hesabı oluşturmanıza, giriş yapmanıza ve web sitemizde gezinti
                  yapmanıza olanak sağlar. Zorunlu çerezlerin engellenmesi
                  halinde, internet sitesinin bazı bölümleri çalışmayacaktır.
                  Devredışı bırakılamaz.&nbsp;
                  <br />- &nbsp; &nbsp;İşlevsel çerezler. Web sitesi veya
                  uygulamalarda (masaüstü̈, mobil veya IOT cihazlardaki
                  uygulamalar da dahil olmak üzere) kullanılan kişiselleştirme
                  ve tercihlerin hatırlanması amaçları ile kullanılan
                  çerezlerdir.
                  <br />- &nbsp; &nbsp;Performans - analitik çerezleri:
                  Kullanıcıların web siteleri ve uygulamalardaki genel
                  çalışmasını geliştirmek, iyileştirmek için web siteleri ve
                  uygulamaları nasıl kullandığınız hakkında davranışlarınızı
                  analiz etmek amacıyla istatistiki bilgi toplamak için
                  kullanılır.
                  <br />- &nbsp; &nbsp;Reklam/Pazarlama çerezleri: Reklam ve
                  pazarlama amaçlı çerezler ile internet ortamında
                  kullanıcıların hareketleri takip edilerek kişisel ilgi
                  alanlarının saptanıp bu ilgi alanlarına yönelik internet
                  ortamında kullanıcılara reklam gösterilmesine ilişkindir.
                  <br />- &nbsp; &nbsp;Birinci taraf çerezler: Doğrudan
                  kullanıcının ziyaret ettiği siteden, internet sayfasından
                  yerleştirilen çerezlerdir.&nbsp;
                  <br />- &nbsp; &nbsp;Üçüncü taraf çerezler; Kullanıcıların
                  ziyaret ettiği internet sitesi dışında üçüncü kişi tarafından
                  yerleştirilen çerezlerdir.
                  <br />
                  &nbsp;
                  <a href="https://www.Bilet 48.com.tr">
                    www.Bilet 48.com.tr
                  </a>{" "}
                  web sitesi, mobil uygulaması ve mobil sitesi oturum çerezleri
                  ve kalıcı çerezleri kullanmaktadır. Yukarıda da ayrıntılı
                  olarak açıklandığı üzere, oturum çerezleri, tarayıcınızı
                  kapattığınızda sona erer. Kalıcı çerezler ise sabit diskinizde
                  uzun bir süre kalır. Bilet 48 web sitesi (ve mobil uygulama
                  sitesi) çerezleri; internet vasıtası ile topladığı bilgileri
                  tercihlerinizle ilgili bir özet oluşturmak amacıyla depolar,
                  hesabınızı doğrulamak ve hesabınıza giriş yaptığınızı
                  belirlemek için kullanabilir.{" "}
                  <a href="https://www.Bilet 48.com.tr">www.Bilet 48.com.tr</a>{" "}
                  web sitesi ve mobil uygulama sitesi size özel tanıtım yapmak,
                  promosyonlar ve pazarlama teklifleri sunmak, web sitesinin
                  veya mobil uygulamanın içeriğini size göre iyileştirmek
                  ve/veya tercihlerinizi belirlemek, hizmet kalitesini
                  arttırmak, internet kullanım alışkanlıklarınızı depolamak
                  amacıyla; site üzerinde gezinme bilgilerinizi ve/veya site
                  üzerindeki kullanım geçmişinizi izleyebilmekte, bu verileri
                  saklayabilmektedir. Bilet 48, çerezleri ayrıca; arama
                  motorlarını, web sitesi, mobil uygulamasını ve/veya web
                  sitesinin reklam verdiği internet sitelerini ziyaret
                  ettiğinizde ilginizi çekebileceğini düşündüğü reklamları size
                  sunabilmek için kullanabilir, site üzerinde toplanan bilgileri
                  eşleştirebilir ve bu bilgileri üçüncü taraflar gibi başka
                  kaynaklardan alınan bilgilerle birlikte kullanabilir.
                  &nbsp;İnternet tarayıcınızın "yardım" dosyasında verilen
                  talimatları izleyerek veya “www.allaboutcookies.org” veya
                  “www.youronlinechoices.eu” adresini ziyaret ederek kalıcı
                  çerezleri kaldırabilir, devre dışı bırakabilir ve hem oturum
                  çerezlerini hem de kalıcı çerezleri reddedebilirsiniz. Kalıcı
                  çerezleri veya oturum çerezlerini reddederseniz, web sitesini,
                  mobil uygulamayı ve mobil sitesini kullanmaya devam
                  edebilirsiniz, fakat web sitesinin, mobil uygulamanın ve mobil
                  sitesinin tüm işlevlerine erişemeyebilirsiniz veya erişiminiz
                  sınırlı olabilir. Detaylı bilgiye “
                  <a href="https://www.Bilet 48.com.tr/cerez-aydinlatma-metni">
                    Çerez Politikası
                  </a>
                  ”ndan ulaşabilirsiniz.
                </p>
                <p>
                  <strong>3. KİŞİSEL VERİLERİNİZİN İŞLENME AMACI</strong>
                  <br />
                  Yukarıda sayılı kişisel verileriniz sadece bu madde kapsamında
                  belirtilen amaçlarla sınırlı olarak açık rızanız ve/veya
                  mevzuatta belirtilen sebeplerle işlenmektedir. Buna göre
                  verileriniz;
                  <br />
                  1. &nbsp; &nbsp;Müşteri/Kullanıcı ile yapılacak olan
                  sözleşmenin kurulması ve/veya ifası, sona erdirilmesi
                  işlemlerinin yerine getirilmesi, sözleşmenin ifası sonrasında
                  Ürün/ Hizmet satışı sonrası hizmetlerinin yerine getirilmesi,
                  üyelik kaydı oluşturabilmesi ve üyelik oluşturulması esnasında
                  kimlik doğrulaması yapılabilmesi
                  <br />
                  2. &nbsp; &nbsp;Ön Bilgilendirme Formu, Mesafeli Satış
                  Sözleşmesi ve Tüketicinin Korunması Hakkında Kanunu başta
                  olmak üzere mevzuat hükümleri uyarınca sözleşmelerin
                  koşulları, güncel durumu ve güncellemeler ile ilgili iletişime
                  geçilmesi ve gerekli bilgilendirmelerin yapılması,
                  <br />
                  3. &nbsp; &nbsp;Ürün, hizmet satışı, faturalandırılması ve
                  devamındaki süreçlerinin yürütülmesi, olması halinde iade ve
                  değişim işlemlerinin yapılması
                  <br />
                  4. &nbsp; &nbsp;Ürün ve hizmetler hakkında
                  müşterilere/kullanıcılara bilgi verilmesi, reklam, çekiliş,
                  kampanya ve promosyonları aktarılması,
                  <br />
                  5. &nbsp; &nbsp;Müşteri memnuniyetini artırılması, web sitesi
                  ve/veya mobil uygulamalardan ürün/ hizmet satın alan
                  müşterilerin tanınabilmesi ve müşteri çevresi analizinde
                  kullanabilmesi, çeşitli pazarlama ve reklam faaliyetlerinde
                  kullanılması ve bu kapsamda anlaşmalı kuruluşlar aracılığıyla
                  elektronik ortamda ve/veya fiziki ortamda anketler
                  düzenlenmesi,
                  <br />
                  6. &nbsp; &nbsp;Bilgi güvenliği süreçlerinin planlanması,
                  denetimi ve icrası, bilgi teknolojileri alt yapısının
                  oluşturulması ve yönetilmesi
                  <br />
                  7. &nbsp; &nbsp; Finans ve/veya muhasebe işlerinin takibi,
                  hukuk işlerinin takibi, Lojistik faaliyetlerinin planlanması
                  ve icrası
                  <br />
                  8. &nbsp; &nbsp;İnsan kaynakları işleyişinin yürütülmesi
                  <br />
                  9. &nbsp; &nbsp;Bankacılık ve Elektronik Ödeme alanında
                  zorunlu olan ödeme sistemleri, elektronik sözleşme veya kağıt
                  ortamında işleme dayanak olacak tüm kayıt ve belgelerin
                  düzenlenmesi; mevzuat gereği ve diğer otoritelerce öngörülen
                  bilgi saklama, raporlama, bilgilendirme yükümlülüklerine
                  uyulması,
                  <br />
                  10. &nbsp; &nbsp;İş faaliyetlerinin etkinlik/verimlilik
                  ve/veya yerindelik analizlerinin gerçekleştirilmesi
                  faaliyetlerinin planlanması ve/veya icrası, pazarlama
                  faaliyetlerinin yapılması, iş geliştirme ve planlama
                  faaliyetlerinin gerçekleştirilmesi
                  <br />
                  11. &nbsp; &nbsp;İş ortakları ve/veya tedarikçi gibi
                  kişi/kurum ile olan ilişkilerin kurulması, &nbsp;yönetimi,
                  sözleşme faaliyetlerinin icrası,
                  <br />
                  12. &nbsp; &nbsp;Ürün, hizmet ve faaliyet ile ilgili müşteri
                  talep, şikâyet ve önerilerinin değerlendirilmesi ve işbu
                  sürecin yürütülmesi,
                  <br />
                  13. &nbsp; &nbsp;Resmî kurum ve kuruluşlarca veya mahkemelerce
                  yani adli – idari makamlarca talep edilmesi halinde işbu
                  sürecin yürütülmesi,
                  <br />
                  14. &nbsp; &nbsp;Yasal yükümlülüklerin yerine getirilmesi ve
                  yürürlükteki mevzuat/ sözleşmeden doğan hakların
                  kullanılabilmesi
                </p>
                <p>
                  <strong>
                    4. KİŞİSEL VERİLERİNİZİN AKTARILABİLECEĞİ TARAFLAR
                  </strong>
                  <br />
                  İşlenen kişisel verileriniz Kanunun kişisel verilerin
                  aktarılması ve yurt dışına aktarılmasına ilişkin hükümleri
                  kapsamında işbu aydınlatma metninin 3. Maddesinde yer alan
                  amaçlarla, yurt içindeki resmi kurum ve kuruluşlara, kolluk
                  kuvvetlerine, mahkemeler ve icra müdürlüklerine, ilişkili
                  olduğumuz üçüncü taraf konumundaki gerçek ve tüzel kişilere,
                  hizmet sağlayıcı firmalar ve yetkililerine, iş ortaklarına,
                  hizmet satıcısı - sağlayıcısı firmalara, verilerin bulut
                  ortamında saklanması hizmeti aldığımız yurtiçi/yurtdışı kişi
                  ve kurumlara, müşterilerimize ticari elektronik iletilerin
                  gönderilmesi konusunda anlaşmalı olduğumuz
                  yurtiçi/yurtdışındaki kuruluşlara, Bankalararası Kart
                  Merkezine, anlaşmalı olduğumuz bankalara, online ödeme
                  sistemlerine ve sizlere daha iyi hizmet sunabilmek ve müşteri
                  memnuniyetini sağlayabilmek için çeşitli pazarlama
                  faaliyetleri kapsamında yurtiçi ve yurtdışındaki çeşitli
                  ajans, reklam şirketleri ve anket şirketleriyle ve
                  yurtiçi/yurtdışı diğer üçüncü kişilere, grup şirket ve
                  iştiraklerimize, tedarikçiler ve destek hizmeti
                  sağlayıcılarına, şirket faaliyetlerimizi yürütmek amacıyla
                  çalışanlarımıza, hizmet aldığımız hukuk birimlerine, vergi
                  danışmanlarına, denetçilere, mali müşavirlere, hizmet
                  aldığımız diğer 3. Kişilere ve Kanun’da açıkça izin verilen
                  kişi ve kuruluşlara aktarılabilecektir.
                  <br />
                  Üçüncü kişilere veri aktarımı sırasında hak ihlallerini
                  önlemek için gerekli teknik ve hukuki önlemler alınmakta olup
                  kişisel verileri alan üçüncü kişinin, veri koruma
                  politikalarından dolayı ve üçüncü kişinin sorumluluğundaki
                  risk alanında meydana gelen ihlallerden Bilet 48 sorumlu
                  değildir.
                </p>
                <p>
                  <br />
                  <strong>
                    5. KİŞİSEL VERİ TOPLAMANIN YÖNTEMİ VE HUKUKİ SEBEBİ
                  </strong>
                  <br />
                  Kişisel verileriniz,
                  <br />• &nbsp; &nbsp;Firmamız internet sitesi ve mobil
                  uygulamalarındaki formlar aracılığıyla ad, soyadı, T.C. kimlik
                  numarası, adres, telefon, iş veya özel e-posta adresi gibi
                  bilgiler ile; kullanıcı adı ve şifresi kullanılarak giriş
                  yapılan sayfalardaki tercihleri, gerçekleştirilen işlemlerin
                  IP kayıtları, tarayıcı tarafından toplanan çerez verileri ile
                  gezinme süre ve detaylarını içeren veriler, konum verileri
                  şeklinde;
                  <br />• &nbsp; &nbsp;Satış ve pazarlama departmanı
                  çalışanlarımız ile diğer şirket yetkilisi ve çalışanlarımız,
                  şubelerimiz, tedarikçilerimiz, diğer satış kanalları, kağıt
                  üzerindeki formlar, kartvizitler, dijital pazarlama ve çağrı
                  merkezi gibi kanallarımız aracılığıyla sözlü, yazılı veya
                  elektronik ortamdan;
                  <br />• &nbsp; &nbsp;Firmamız ile ticari ilişki kurmak, iş
                  başvurusu yapmak, teklif vermek gibi amaçlarla, kartvizit,
                  özgeçmiş (cv), teklif vermek ve sair yollarla kişisel
                  verilerini paylaşan kişilerden alınan, fiziki veya sanal bir
                  ortamda, yüz yüze ya da mesafeli, sözlü veya yazılı ya da
                  elektronik ortamdan;
                  <br />• &nbsp; &nbsp;Ayrıca farklı kanallardan dolaylı yoldan
                  elde edilen, web sitesi, blog, yarışma, anket, oyun, kampanya
                  ve benzeri amaçlı kullanılan (mikro) web sitelerinden ve
                  sosyal medyadan elde edilen veriler, e-bülten okuma veya
                  tıklama hareketleri, kamuya açık veri tabanlarının sunduğu
                  veriler, sosyal medya platformlarından paylaşıma açık profil
                  ve verilerden;&nbsp;
                  <br />
                  işlenebilmekte ve toplanabilmektedir.
                  <br />
                  Bilet 48 nezdinde kişisel verileriniz şirketimizle hukuki
                  ilişki kurulması esnasında ve söz konusu ilişkinin devamı
                  süresince, sizden, üçüncü kişilerden ve yasal mercilerden
                  olmak kaydı ile yukarıda yer verilen internet, telefon,
                  e-posta aracılığıyla ve fiziki, sözlü ve elektronik mecralar,
                  mobil uygulama gibi yukarıda yer verilen araçlar ve yukarıdaki
                  amaçlar dahilinde, KVKK’nın &nbsp;ilgili madde hükümlerinde
                  sayılan ve aşağıda belirtilen hukuka uygunluk sebeplerine
                  dayanılarak toplanmakta, saklanmakta ve işlenmektedir.&nbsp;
                  <br />
                  KVKK’nın (5/2.) maddesi uyarınca aşağıdaki şartlardan birinin
                  varlığı halinde kişisel verileriniz açık rıza aranmaksızın
                  işlenebilecektir:
                  <br />
                  1. &nbsp; &nbsp;Açık rızanın bulunması
                  <br />
                  2. &nbsp; &nbsp;Kişisel Verilerin Korunması Kanunu, Vergi Usul
                  Kanunu, Türk Borçlar Kanunu, Türk ticaret kanunu, 6563 Sayılı
                  Elektronik Ticaretin Düzenlenmesi Hakkında Kanun, 6502 sayılı
                  Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler
                  Yönetmeliği başta olmak üzere şirketimizin tabi olduğu
                  mevzuatta açıkça öngörülmüş olması
                  <br />
                  3. &nbsp; &nbsp;Fiili imkânsızlık nedeniyle rızasını
                  açıklayamayacak durumda bulunan veya rızasına hukuki
                  geçerlilik tanınmayan kişinin kendisinin ya da bir başkasının
                  hayatı veya beden bütünlüğünün korunması için zorunlu olması
                  <br />
                  4. &nbsp; &nbsp;Üyelik ve satış sözleşmelerimiz başta olmak
                  üzere, bir sözleşmenin kurulması veya ifasıyla doğrudan
                  doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait
                  kişisel verilerin işlenmesinin gerekli olması, talep edilen
                  ürün ve hizmetleri sunabilmek ve akdettiğiniz sözleşmelerin
                  gereğinin yerine getirilmesi
                  <br />
                  5. &nbsp; &nbsp;Hukuki yükümlülüğün yerine getirilebilmesi
                  için zorunlu olması
                  <br />
                  6. &nbsp; &nbsp;Bir hakkın tesisi, kullanılması ve korunması
                  için veri işlemenin zorunlu olması
                  <br />
                  7. &nbsp; &nbsp;İlgili kişinin temel hak ve özgürlüklerine
                  zarar vermemek kaydı ile veri sorumlusunun meşru menfaatleri
                  için veri işlenmesinin zorunlu olması
                  <br />
                  8. &nbsp; &nbsp;Kişisel veri sahibinin kişisel verisini
                  alenileştirmesi
                  <br />
                  Özel nitelikli kişisel veri; kişilerin ırkı, etnik kökeni,
                  siyasi düşüncesi, felsefi inancı, dini, mezhebi veya diğer
                  inançları, kılık ve kıyafeti, dernek, vakıf ya da sendika
                  üyeliği, sağlığı, cinsel hayatı, ceza mahkûmiyeti ve güvenlik
                  tedbirleriyle ilgili verileri ile biyometrik ve genetik
                  verilerini ifade etmektedir. Şirketimizce hiçbir şekilde özel
                  nitelikli kişisel veriniz işlenmemektedir.
                </p>
                <p>
                  <br />
                  <strong>6. KİŞİSEL VERİLERİNİZİN SAKLANMA SÜRESİ</strong>
                  <br />
                  Kişisel verileriniz, işbu Kişisel Verilerin İşlenmesine
                  İlişkin Aydınlatma Metni’nde belirtilen amaçların ve ilgili
                  mevzuatın gerektirdiği süre boyunca saklanacaktır.
                  &nbsp;Kanunun (5.) ve (6.) maddelerinde yer alan kişisel
                  verilerin işlenme amacının tamamının ortadan kalkması halinde,
                  kişisel verileriniz veri sorumlusu tarafından resen veya
                  talebiniz üzerine silinmekte, yok edilmekte veya anonim hâle
                  getirilmektedir.
                </p>
                <p>
                  <br />
                  <strong>
                    7. KİŞİSEL VERİ SAHİBİ OLARAK 6698 SAYILI KANUN’UN 11.
                    MADDESİNDE SAYILAN HAKLARINIZ VE BU HAKLARI KULLANMA
                    YÖNTEMİNİZ
                  </strong>
                  <br />
                  Kişisel verilerinizin işlenmesine ilişkin olarak 6698 sayılı
                  Kişisel Verilerin Korunması Hakkında Kanunu’nun (11.)
                  maddesinde düzenlenmiş haklarınızın bulunduğunu siz değerli
                  müşterilerimizin bilgisine sunmaktayız. Bu kapsamda kanunun
                  “İstisnalar” başlıklı (28.) Maddesinde öngörülen haller saklı
                  kalmak kaydı ile Kanunun (11.) maddesi çerçevesinde
                  şirketimize başvurarak kullanabileceğiniz haklarınız şu
                  şekildedir;
                  <br />
                  a. &nbsp; &nbsp;Kişisel verilerinizin işlenip işlenmediğini
                  öğrenme
                  <br />
                  b. &nbsp; &nbsp;Kişisel verileriniz işlenmişse bunlara ilişkin
                  bilgi talep etme
                  <br />
                  c. &nbsp; &nbsp;Kişisel verilerinizin işlenme amacını ve
                  bunların amacına uygun kullanılıp kullanılmadığını öğrenme
                  <br />
                  d. &nbsp; &nbsp;Yurt içinde veya yurt dışında kişisel
                  verilerinizin aktarıldığı üçüncü kişileri bilme
                  <br />
                  e. &nbsp; &nbsp;Kişisel verilerinizin eksik veya yanlış
                  işlenmiş olması halinde bunların düzeltilmesini isteme
                  <br />
                  f. &nbsp; &nbsp;Kanun’un 7. Maddesinde öngörülen şartlar
                  çerçevesinde kişisel verilerin silinmesini veya yok edilmesini
                  isteme
                  <br />
                  g. &nbsp; &nbsp;Yukarıdaki (d) ve (e) bentleri uyarınca
                  yapılan işlemlerin kişisel verilerinizin aktarıldığı üçüncü
                  kişilerin bildirilmesini isteme
                  <br />
                  h. &nbsp; &nbsp;İşlenen verilerinizin münhasıran otomatik
                  sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir
                  sonucun ortaya çıkmasına itiraz etme
                  <br />
                  i. &nbsp; &nbsp;Kişisel verilerinizin kanuna aykırı olarak
                  işlenmesi sebebiyle zarara uğramanız halinde zararınızın
                  giderilmesini talep etme
                  <br />
                  Kişisel verilerinizin korunması kapsamında sahip olduğunuz hak
                  ve talepleriniz için bizimle iletişime geçmek istemeniz
                  durumunda; İlgili kanun ve sair mevzuat dâhilinde öngörülen
                  yasal haklarınız uyarınca taleplerinizi dilekçe ile “Çınarlı
                  Mah. Ozan Abay Cad. No: 10 İç Kapı No: 084 Konak/ İzmir”
                  adresimize bizzat elden iletebilir, noter kanalıyla
                  ulaştırabilirsiniz. Bunun yanında, Veri Sorumlusuna Başvuru
                  Usul ve Esasları Hakkına Tebliği’nin (5.) maddesi uyarıca
                  kayıtlı elektronik posta (KEP) adresi, güvenli elektronik
                  imza, mobil imza ya da Şirketimize daha önce bildirdiğiniz ve
                  sistemlerimizde kayıtlı bulunan elektronik posta adresini
                  kullanmak suretiyle destek@bilet48.com.tr adresine
                  iletebilirsiniz.
                  <br />
                  Bu kapsamda yapılacak olan başvurular tarafımızdan yapılacak
                  kimlik doğrulamasını takiben kabul edilecek olup,
                  talepleriniz, talebin niteliğine göre en kısa sürede ve en geç
                  30 gün içinde ücretsiz olarak sonuçlandırılacaktır. Ancak
                  işlemin ayrıca bir masraf gerektirmesi halinde, &nbsp;Kanun’un
                  “Veri Sorumlusuna Başvuru” başlıklı (13/2.) maddesinde
                  belirtilen Kurulca belirlenen tarifeye göre tarafınızdan ücret
                  talep etme hakkımız saklı olduğunu belirtmek isteriz. Veri
                  sorumlusu talebi kabul eder veya gerekçesini açıklayarak
                  reddeder ve cevabını ilgili kişiye yazılı olarak veya
                  elektronik ortamda bildirir. Başvuruda yer alan talebin kabul
                  edilmesi halinde veri sorumlusuna gereği yerine getirilir.
                  Başvurunun veri sorumlusunun hatasından kaynaklanması halinde
                  alınan ücret ilgiliye iade edilir.
                  <br />
                  Başvurunun reddedilmesi, verilen cevabın yetersiz bulunması
                  veya süresinde başvuruya cevap verilmemesi hallerinde; ilgili
                  kişi, veri sorumlusunun cevabını öğrendiği tarihten itibaren
                  30 (otuz) ve herhalde başvuru tarihinden itibaren altmış gün
                  içinde Kurula şikayette bulunabilir. 6698 sayılı Kanunun
                  (14/2.) maddesi uyarınca Şirketimize başvuru yolu tüketilmeden
                  şikayet yoluna başvurulamaz. Kişilik hakları ihlal
                  edilenlerin, genel hükümlere göre tazminat hakkı
                  saklıdır.&nbsp;
                </p>
                <p>
                  <br />
                  <strong>8. TEDBİRLER</strong>
                  <br />
                  Bilet 48, kişisel verilerinizin hukuka aykırı olarak
                  işlenmemesini/erişilmemesini ve hukuka uygun şekilde
                  muhafazasını sağlamak, gizliliğini – bütünlüğünü korumak,
                  &nbsp;amacıyla uygun güvenlik düzeyini temin etmeye yönelik
                  gerekli teknik ve idari tedbirleri almayı, gerekli denetimleri
                  yaptırmayı taahhüt etmektedir.
                  <br />
                  Bilet 48 işbu Kişisel Verilerin Korunması Politikası –
                  Aydınlatma Metni’ni mevzuattaki değişiklikler kapsamında
                  değiştirme/güncelleme hakkını saklı tutar. İşbu Kişisel
                  Verilerin Korunması Politikası – Aydınlatma Metni
                  sitemizde/sayfamızda yayınlandığı tarihte yürürlük
                  kazanacaktır.
                  <br />
                  Verilerinizin herhangi bir surette değişikliğe uğraması
                  halinde bizimle iletişime geçerek verilerinizi güncellemenizi
                  rica ederiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
