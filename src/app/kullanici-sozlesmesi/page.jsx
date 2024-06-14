import LeftMenu from "@/components/footerLinks/leftmenu";
import Link from "next/link";

export const metadata = {
  title: "Kullanıcı sözleşmesi | Bilet48",
  description: "Kullanıcı sözleşmesi description",
};

export default function Page() {
  return (
    <>
      <div className="header-margin"></div>
      <div className="container mb-50">
        <div className="row">
          <LeftMenu activeLink="kullanici-sozlesmesi" />
          <div className="col-lg-9">
            <div className="page-detail typography">
              <div>
                <p>
                  <strong>GİRİŞ</strong>
                </p>
                <p>
                  <span lang="TR">
                    Bilet 48'e Hoşgeldiniz. Aşağıda Bilet 48 servisleri için
                    kullanım şartları, kuralları ve yasal sorumluluklar
                    açıklanmıştır. İşbu Kullanıcı Sözleşmesi ve Kullanım
                    Şartları (“Sözleşme”), www.bilet48.com.tr sitesine üye
                    olunmadan önce kullanıcı tarafından okunmalı ve aşağıda yer
                    alan kutucuk işaretlenerek onay verilmelidir. Bilet 48
                    sitesini kullanarak (verdiği servislerden yararlanarak ve
                    kişisel bilgilerinizin yer alacağı formu doldurarak)&nbsp;
                    da İşbu Sözleşme’deki şartları kabul etmiş sayılmaktadır.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    Kullanıcı Sözleşmesi'nin tüm maddelerini ve sözleşmenin
                    eklerini tam olarak okuduğunu ve bunları kabul ettiğini
                    beyan eder. Kullanıcı sözleşmesini kabul ederek ve/veya
                    Bilet 48 sitesini her kullandığınızda İşbu Sözleşme’nin
                    ayrılmaz bir parçasını oluşturan Gizlilik Beyanına da
                    uyacağınızı kabul etmiş olmaktasınız.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Kullanıcı; Kullanıcı Sözleşmesi’nin tüm maddelerini ve
                    Kullanım-Ön Bilgilendirme Koşulları,&nbsp;
                  </span>
                  <Link href="/kvkk">
                    Kişisel VerilerinKorunması Hakkında Aydınlatma Metni
                  </Link>
                  <span lang="TR"></span>
                  <span lang="TR">
                    &nbsp;başta olmak üzere sözleşmenin eklerini tam olarak
                    okuduğunu ve bunları kabul ettiğini beyan eder. Kullanıcı
                    sözleşmesini kabul ederek üyelik işleminin sağlanması veya
                    üyelik kurulmaksızın Bilet 48 sitesini her kullandığında
                    İşbu Sözleşme’nin ayrılmaz bir parçasını oluşturan Gizlilik
                    Beyanına uyacağını da beyan etmektedir.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    Kullanıcı, üyeliğin tesis edilip edilmediğine bakmaksızın,
                    Bilet 48 sitesinde yapacağı her işlem için; sitede yer alan
                    Kişisel Verilerin Korunması Kanunu Hakkında Aydınlatma
                    Metni’ni okuduğunu, kişisel verilerinin şirketimiz nezdinde
                    Aydınlatma Metni'nde belirtilen amaç ve kapsamda
                    kaydedilmesini, kullanılmasını, saklanmasını, işlenmesini,
                    güncellenmesini, 3. kişilerle paylaşılmasını ONAYLADIĞINI
                    kabul, beyan ve taahhüt eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <strong>
                    <span lang="TR">TARAFLAR</span>
                  </strong>
                  <span lang="TR"></span>
                </p>
                <p>
                  <span lang="TR">
                    İşbu Kullanıcı Sözleşmesi ve Kullanım Şartları aşağıdaki
                    taraflar arasında elektronik ortamda teyit verilerek
                    yürürlüğe girmiştir:
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Bilet 48, Firma tarafından düzenlenen farklı kategorilerdeki
                    etkinlikleri/hizmetleri Bilet 48 Dijital Kanallarını
                    kullanarak Kullanıcılara sunan/ulaştıran yeni nesil online
                    bilet satış sitesidir. Bilet 48'in Bilet 48 Dijital
                    Kanalları içeriğinde sağlamış olduğu hizmetin kapsamı,
                    Kullanıcı ile Firma’yı bir araya getirilerek Firma’nın
                    düzenlemiş olduğu etkinliklerin/hizmetlerin Kullanıcılar
                    tarafından Bilet 48 Dijital Kanallarında belirtilen
                    koşullarla satın alınmasıyla sınırlıdır. Firma ve Bilet 48
                    birbirinden bağımsız ve ayrı tüzel/gerçek kişilerdir. Bilet
                    48, Kullanıcı ile Firma’yı bir araya getiren bir platform
                    olup; Bilet 48 hiçbir surette Hizmetler'in
                    Sağlayıcısı/sunucusu/ifa edicisi ve/veya Firma’nın acentesi,
                    bayii, vekili, temsilcisi vb. olarak addedilemez.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Bilet 48, Firmalar tarafından sağlanacak/sunulacak/ifa
                    edilecek Hizmetlerin Kullanıcılara satışında aracılık
                    ettiğinden her bir etkinlik/hizmet özelinde satıcı/Sağlayıcı
                    bilgileri değişiklik göstermektedir.{" "}
                  </span>
                </p>
                <p>
                  <span lang="TR">1. Aracı Hizmet Sağlayıcı Bilgileri:</span>
                </p>
                <table
                  border={1}
                  cellSpacing={0}
                  cellPadding={0}
                  className="MsoTableGrid mytable"
                >
                  <tbody>
                    <tr>
                      <td width="151" valign="top">
                        <p>
                          <span lang="TR">Ticaret Unvanı</span>
                        </p>
                      </td>
                      <td width="453" valign="top">
                        <p>
                          <span lang="TR">
                            Bilet 48 Organizasyon Reklam Kültür ve Turizm Sanayi
                            Ticaret Anonim Şirketi (Bundan böyle “Bilet 48”
                            olarak anılacaktır.)
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width="151" valign="top">
                        <p>
                          <span lang="TR">Vergi Dairesi-No </span>
                        </p>
                      </td>
                      <td width="453" valign="top">
                        <p>
                          <span lang="TR">
                            Bornova/Karşıyaka V.D. 3810468072
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width="151" valign="top">
                        <p>
                          <span lang="TR">Mersis No</span>
                        </p>
                      </td>
                      <td width="453" valign="top">
                        <p>
                          <span lang="TR">0381046807200001</span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width="151" valign="top">
                        <p>
                          <span lang="TR">Adres&nbsp;&nbsp;&nbsp;&nbsp; </span>
                        </p>
                      </td>
                      <td width="453" valign="top">
                        <p>
                          <span lang="TR">
                            Çınarlı Mah. Ozan Abay Cad. No: 10 İç Kapı No: 084
                            Konak/ İzmir
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width="151" valign="top">
                        <p>
                          <span lang="TR">Telefon</span>
                        </p>
                      </td>
                      <td width="453" valign="top">
                        <p>
                          <span lang="TR">0850 303 8782</span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width="151" valign="top">
                        <p>
                          <span lang="TR">E-posta Adresi</span>
                        </p>
                      </td>
                      <td width="453" valign="top">
                        <p>
                          <span lang="TR">destek@bilet48.com.tr</span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  <span lang="TR">
                    <br />
                  </span>
                  <span lang="TR">
                    2. Kullanıcı: Kayıtlı Kullanıcı
                    <span>
                      <br />
                    </span>
                    Bilet 48'in servislerinden faydalanmaya başlayan ve/veya
                    devam eden kişi veya kuruluşlar.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <strong>
                    <span lang="TR">KISALTMALAR</span>
                  </strong>
                  <span lang="TR"></span>
                </p>
                <p>
                  <span lang="TR">
                    İşbu Kullanım Şartları'nda yer alan aşağıdaki ifadeler
                    kendilerine aşağıda verilen anlamları ifade eder:
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    “Bilet 48”, Bilet 48. ve "www.Bilet 48.com.tr" adresindeki
                    internet sitesini (“Site”),
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    “Kullanıcı”, İşbu Kullanım Şartlarını kabul ederek Site'ye
                    üye olan ve Site vasıtasıyla veya Site üzerinden, Firma
                    tarafından sağlanan ve/veya tedarik edilen hizmetlerden
                    faydalanan gerçek kişiyi,
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    “Firma”, Site’de veya Site aracılığı ile Firma tarafından
                    satışa sunulacak hizmetleri, Kullanıcı’ya Site’de yer alan
                    ilan koşul ve şartlarla sağlamayı kabul ve taahhüt eden
                    gerçek ve tüzel kişileri,
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <strong>
                    <span lang="TR">KONU VE KAPSAM</span>
                  </strong>
                  <span lang="TR"></span>
                </p>
                <p>
                  <span lang="TR">
                    İşbu Sözleşme'nin konusu Kullanıcı'nın,&nbsp; Bilet 48’in
                    Sitesi vasıtasıyla Firma tarafından sağlanan ve sunulan
                    hizmetlerden ve bu hizmetlere ilişkin fırsatlardan ücreti
                    karşılığında faydalanmasıdır. Bilet 48'in Site içeriğinde
                    sağlamış olduğu hizmetin kapsamı Kullanıcı ile Firma’nın bir
                    araya getirilerek Firma’nın satmakta olduğu hizmetlerin
                    Kullanıcılar tarafından Site’de belirtilen koşullarla satın
                    alınmasıyla sınırlıdır. Dolayısıyla Kullanıcı Bilet 48’in
                    Sitede yer alan ürünlerin satıcısı, sağlayıcısı veya
                    sunucusu olmadığının ve hizmetleri asıl sağlayan Firma ile
                    Bilet 48’in birbirinden tamamen bağımsız ve farklı kişiler
                    olduğunun bilincindedir. Kullanıcı, Site’de yer alan
                    hizmetler ve ürünlerin satışına ilişkin olarak tek
                    sorumlunun Firma olduğunun bilincinde olduğunu ve Bilet
                    48’in Sitede yer alan hizmetlerin sunulması, sağlanması ve
                    satılması ile ilgili olarak herhangi bir taraf sıfatının ve
                    dolayısı ile de bir sorumluluğunun bulunmadığını kabul,
                    beyan ve taahhüt eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    &nbsp;<b>SATIŞA KONU HİZMET</b>
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Satışa sunulan ve satın almayı planladığınız hizmete ilişkin
                    KDV dahil toplam bedel ve olması halinde ek masrafları her
                    bir hizmet/etkinlik özelinde satın almayı planladığınız
                    etkinlik sayfasında ayrıntıları ile tek tek yer almaktadır.
                    Belirtilen/ilan edilen fiyatlar güncelleme yapılana veya
                    değiştirilene kadar geçerlidir. Kampanyalı olarak belirtilen
                    fiyatlar kampanyanın sona ereceği tarihe kadar ya da
                    kampanyalı olarak satışa çıkan bilet adedi tükenene kadar
                    geçerlidir.&nbsp; Bilet 48, Kullanıcı’dan bilet başına
                    hizmet bedeli alır. Kullanıcı’nın kendi isteği ile iade
                    taleplerinde işbu hizmet bedeli iade edilmez. Bilet 48’in
                    Kullanıcı’dan aldığı hizmet bedeli herhangi bir garanti
                    oluşturmamakta, bilet/hizmet ile ilgili tek sorumlu
                    etkinliği/hizmeti düzenleyen FİRMA’dır. Bilet 48’in
                    etkinliğin/hizmetin kapsamı bilet adedi, fiyatı, oturma
                    düzeni, Etkinlik Kuralları vs. ilan edilen etkinlik koşul
                    şart veya bedeli konularında hak ve yetkisi bulunmamaktadır.
                    KULLANICI, Bilet 48’in hizmeti sunan kişi olmayıp, yalnızca
                    FİRMA ile KULLANICI arasında aracılık yapmakta olduğunu
                    kabul etmektedir. Bilet 48, KULLANICI tarafından
                    KULLANICI'ya sunulan ve/veya sağlanan hizmetin kusurlu ya da
                    ayıplı olması ve/veya belirlenen süre içerisinde
                    sunul(a)maması/sağlan(a)maması gibi etkinlik/hizmetin
                    içerik, koşul, şartları, mekanı, bedeli vs. dolayısıyla
                    sorumlu değildir. KULLANICI, bu türlü talepleri yalnızca
                    FİRMA’ya karşı ileri süreceğini, Bilet 48’in bu yönde bir
                    garantisi veya taahhüdü bulunmadığını, Bilet 48'e karşı her
                    hangi bir talepte bulunmayacağını kabul ve taahhüt eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Ödemeler kredi kartı, EFT veya havale yöntemlerinden birisi
                    kullanılarak yapılabilir. KULLANICI’nın taksitli ödemeyi
                    seçmesi halinde vade farkı uygulanabileceğini kabul
                    etmiştir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Hizmet satın alınması işleminin gerçekleşmesi, bedelin Bilet
                    48’in hesabına geçmesi ile birlikte satın alınan hizmete
                    ilişkin bilet, dijital ortamda düzenlenerek KULLANICI’nın
                    elektronik posta adresi ve/veya telefon numarasına SMS yolu
                    ile gönderilir. KULLANICI etkinliğin gerçekleşeceği zaman ve
                    mekanda QR kodlu biletini okutarak/göstererek hizmetten
                    yararlanabilir. Herhangi bir nedenle hizmet bedeli ödenmez
                    ve/veya banka kayıtlarında iptal edilirse, Bilet 48’in
                    herhangi bir yükümlülüğü kalmayacaktır
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <strong>
                    <span lang="TR">BUBİLET SİTE KULLANIM ŞARTLARI</span>
                  </strong>
                  <span lang="TR"></span>
                </p>
                <p>
                  <span lang="TR">
                    www.Bilet 48.com.tr&nbsp;tüm üyelerin kullanımına açıktır.
                    Aşağıdaki yazılı durumlarda, site yönetimi üyenin site
                    kullanımını engelleyebilir ve aşağıdaki girişimlere karışan
                    kişi veya kişiler hakkında kanuni haklarını saklı tutar:
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Siteye üyelik formlarında veya Site içeriğine daha sonra
                    eklenerek yanlış, eksik veya yanıltıcı bilgi beyan edilmesi,
                    genel ahlak kurallarına uygun olmayan ifadeler ve başta 5651
                    sayılı Internet Ortamında Yapılan Yayınların Düzenlenmesi ve
                    Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi
                    Hakkında Kanun olmak üzere Türkiye Cumhuriyeti yasalarıyla
                    ve bunlara ilişkin sair mevzuata ters düşen bilgilerin
                    siteye kaydedilmesi kesinlikle yasaktır.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Kullanıcılara kendi belirledikleri kullanıcı adı, şifre
                    gibi bilgilerin kullanım haklarının, üçüncü kişi ya da
                    kuruluşlarla paylaşılmasından (bu bilgilerin kullanıcı
                    dışındaki kişiler tarafından kullanılmasından) kaynaklanacak
                    her türlü zarardan doğrudan Kullanıcı sorumludur.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Kullanıcı, internet ortamında bir başkasına ait IP adresi,
                    elektronik posta adresi, kullanıcı adı gibi kişisel
                    bilgileri kullanamayacağı gibi diğer kullanıcıların özel
                    bilgilerine de izinsiz olarak ulaşamaz veya bunları
                    kullanamaz. Kullanıcı bu şekilde bir kullanımdan dolayı
                    doğabilecek her türlü hukuki ve cezai yükümlülüğün asli
                    sorumlusudur.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Sitenin güvenliğini tehdit edecek Bilet 48’e veya
                    Kullanıcılara zarar verecek virus, trojan, program kırma
                    (hacking) yazılımları ve diğer teknolojilerin kullanılması
                    yasaktır. Kullanıcı, bu yasağa aykırı hareket etmesi halinde
                    Bilet 48’in maruz kalacağı her türlü zararı ve ziyanı tazmin
                    etmekle mükelleftir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Kullanıcı satın aldığı ürünün ücretini ödemekle
                    yükümlüdür. Ödemediği takdirde Bilet 48 bu Kullanıcı'nın
                    Site'yi kullanmasını engeller ve Kullanıcı aleyhinde sair
                    yasa yollarına başvurabilir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Sitenin güvenliğini tehdit edecek, sitenin ve kullanılan
                    yazılımların çalışmasını engelleyecek yazılımların
                    kullanılması, faaliyetlerin yapılması, yapılmaya çalışılması
                    ve bilgilerin alınması, silinmesi ve değiştirilmesi halinde
                    Bilet 48 Kullanıcı’nın üyeliğini derhal iptal edebileceği
                    gibi ayrıca Kullanıcı'nın bu tarz eylemleri sebebiyle yol
                    açtığı her türlü zarar ve ziyanı Kullanıcı’dan tazmini için
                    her türlü yasal yollara başvurabilir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Yasal olarak reşit olmayan kullanıcılar Site'yi
                    kullanamaz. Fark edildiği takdirde Bilet 48 bu kullanıcının
                    Site'yi kullanmasını geçici olarak ya da tamamen
                    engelleyebilir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Site içeriğinin izinsiz olarak kısmen veya tümüyle
                    kopyalanması, yayınlanması ve çoğaltılması veya Bilet 48’in
                    izni olmadan link vermesi kesinlikle yasaktır.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Bilet 48.com.tr'de sunulan görsel ve yazılı içerik,
                    kişisel kullanım içindir. Bilet 48, içeriğinde yer alan
                    teknik veriler, uygulanan satış sistemi, iş metodu ve iş
                    modeli de dahil tüm materyallerin (“Materyaller”) ve bunlara
                    ilişkin fikri ve sınai mülkiyet haklarının sahibi veya
                    lisans sahibidir ve yasal koruma altındadır. Aksi
                    belirtilmedikçe ticari ya da kişisel amaçlarla izinsiz veya
                    kaynak göstermeksizin kullanılamaz. Bu sitede yer alan
                    herhangi bir unsuru diğer bir mecrada veya internet
                    sitesinde yayınlamak veya Bilet 48’in izni olmadan link
                    vermek yasaktır.
                    <span>
                      <br />
                    </span>
                    Bu sayfaların tasarımında ve veritabanı oluşturulmasında
                    kullanılan yazılımın hakkı Bilet 48’e aittir. Bahsi geçen
                    yazılımın kopyalanması veya kullanılması kesinlikle
                    yasaktır. Bilet 48'in bilcümle fikri mülkiyet haklarının
                    Kullanıcı tarafından ihlal edilmesi halinde Bilet 48'in
                    ilgililer aleyhine suç duyurusunda bulunmak da dahil
                    kanundan doğan tüm hakları saklıdır.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Bilet 48’e iletilen tüm geri bildirimlerin kullanım hakkı
                    Bilet 48'e aittir. İstenildiği takdirde Bilet 48 tarafından
                    pazarlama amacıyla kullanılabilir. Kullanıcı bu bilgilerin
                    pazarlama amacıyla Bilet 48 tarafından kullanılabileceğini
                    peşinen kabul eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <strong>
                    <span lang="TR">SMS VE E-MAIL GÖNDERİM ŞARTLARI</span>
                  </strong>
                  <span lang="TR"></span>
                </p>
                <p>
                  <span lang="TR">
                    1. Bilet 48, üyelerine satın aldıkları fırsatların kodlarını
                    ve sipariş numarasını Mail ve SMS olarak göndermektedir.
                    <span>
                      <br />
                      <br />
                    </span>
                    2. Bilet 48, üyelerine sadece bilgi amaçlı (fırsatın iptal
                    olması, tarihinin değişmesi, web sitesinde yapılan
                    değişiklikler vb.) SMS ve Mail gönderimi yapmaktadır.
                    <span>
                      <br />
                      <br />
                    </span>
                    3. Bilet 48, İşbu Sözleme uyarınca, Üyeleri'nin kendisine
                    kayıtlı e-posta adreslerine bilgilendirme mailleri ve cep
                    telefonlarına bilgilendirme SMS'leri gönderme yetkisine
                    sahiptir. Üye İşbu Sözleşme'yi onaylamakla beraber
                    bilgilendirme e-maillerini de e-posta adresine ve
                    bilgilendirme SMS'lerini cep telefonuna gönderilmesine rıza
                    göstermiş sayılacaktır. Üye e-posta ve/veya SMS almaktan
                    vazgeçmek istemesi durumunda bu talebini gerekçe
                    belirtmeksizin Bilet 48'e ücretsiz olarak ileterek, e-posta
                    ve/veya SMS gönderim iptal işlemini gerçekleştirebilir.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <strong>
                    <span lang="TR">SORUMLUKLAR</span>
                  </strong>
                  <span lang="TR"></span>
                </p>
                <p>
                  <span lang="TR">1. Kullanıcı Sorumlulukları</span>
                </p>
                <p>
                  <span lang="TR">
                    • Kullanıcı, www.Bilet 48.com.tr sitesi ve hizmetlerinden
                    yararlanırken, Türk Ceza Kanunu, Tüketicinin Korunması
                    Hakkında Kanun, Türk Ticaret Kanunu, Fikir ve Sanat Eserleri
                    Kanunu, Marka ve Patent Haklarının Korunması ile ilgili
                    Kanun Hükmünde Kararnameler ve yasal düzenlemeler, Borçlar
                    Yasası, diğer ilgili mevzuat hükümleri ile Bilet
                    48.com.tr'nin hizmetlerine ilişkin olarak yayımlayacağı her
                    türlü duyuru ve bildirimlere uymayı kabul eder. Bu
                    bildirimlere ve yasalara aykırı kullanım sebebiyle
                    doğabilecek hukuki, cezai ve mali her türlü sorumluluk
                    Kullanıcı'ya aittir. Kullanıcı ayrıca satın almış olduğu
                    hizmetlere ilişkin yürürlükteki özel kanunlar tahtında
                    aranan hüküm ve şartlara uyacağını kabul, beyan ve taahhüt
                    eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Kullanıcı, diğer kullanıcıların ve ziyaretçilerin Bilet
                    48.com.tr'i&nbsp;kullanmasını önleyici veya zorlaştırıcı
                    hareketlerde bulunamaz, sunucuları ya da veritabanlarını
                    otomatik programlar yükleyip zorlayamaz/kilitleyemez. Hile
                    girişimlerinde bulunamaz. Bulunması halinde üyeliğinin
                    sonlandırılacağını ve durumdan doğabilecek her türlü hukuki,
                    cezai sorumluluğu kabul eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Bilet 48 ile yapılan yazışmaların yedeğinin alınması
                    kişilerin sorumluluğundadır ve Bilet 48 tarafından
                    önerilmektedir. Yazışmaların yedeklenmemesinden dolayı
                    kaybolmasından, silinmesinden veya hasar görmesinden Bilet
                    48 sorumlu tutulamaz.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Kullanıcı Site üzerinden veya Site vasıtasıyla almış
                    olduğu hizmetlerin Sitede o hizmet için belirtilen hizmet
                    koşullarına tabi olduğunu, bu hizmeti satın almakla bu
                    koşullara bağlı kalacağını ve herhangi bir değişiklik talep
                    etmeyeceğini kabul, beyan ve taahhüt eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Kullanıcı, www.Bilet 48.com.tr'den kopyalanmış veya yazıcı
                    ile yazdırılmış hiçbir materyal üzerinden Telif Hakkı,
                    Ticari Marka ve her türlü Fikir ve Sanat Eserleri Kanunu
                    kapsamındaki haklara ilişkin uyarıları ve notları silemez
                    veya çıkartamaz.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Üyelik iptali ve hesap silme işlemi, kullanıcı tarafından
                    www.Bilet 48.com.tr üzerinden yapılabilir. Üyeliğini bitiren
                    kullanıcının siteye giriş yetkisi iptal edilecektir.
                    Üyeliğini iptal eden kişi bu işlemin geri dönüşü olmadığını
                    kabul eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Sitenin belirli yerlerinde o bölüme özel veya satın alınan
                    Hizmet’e ilişkin Firma tarafından belirlenen farklı kurallar
                    ve yükümlülükler belirtilebilir. Bu bölümleri kullanan kişi
                    ve kuruluşlar peşinen belirtilen bu kuralları kabul etmiş
                    sayılır. Satın alınan Hizmete ilişkin Firma tarafından
                    belirlenen kural ve yükümlülükler satın alma öncesi
                    Kullanıcıların rahatlıkla görebileceği şekilde yer almakta
                    ve Kullanıcılar bilgilendirilmektedir. Kullanıcıların söz
                    konusu kural ve yükümlülüklere aykırılığı halinde hizmet
                    bedeli iade hakkı olmamakta ve Bilet 48’in herhangi bir
                    sorumluluğu bulunmamaktadır.{" "}
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <strong>
                    <span lang="TR">CAYMA HAKKI – İPTAL - İADE DURUMU</span>
                  </strong>
                  <span lang="TR"></span>
                </p>
                <p>
                  <span lang="TR">
                    • Herhangi bir şekilde Site üzerinden satın alınan hizmetin
                    Firma’dan kaynaklanan sebeplerle aksaması veya Firma
                    tarafından hiç yerine getirilmemesi veya ertelenmesi halinde
                    bu aksaklığın ve yerine getirmemenin tek sorumlusu satış
                    yapan Firma olup bu gibi durumlarda ücret iadesinin söz
                    konusu olması halinde bu ücret iadesi Kullanıcı’ya firma
                    tarafından yapılır.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Kullanıcı, servisten faydalanmaya başlandığı andan
                    itibaren bu sözleşmenin tüm hükümlerini kabul etmiş
                    sayılacağını ve sözleşmenin kendisi hakkında hüküm ifade
                    edeceğini kabul eder. Kullanıcı İşbu Sözleşme ile üstlenmiş
                    olduğu yükümlülüklere aykırı hareketi nedeniyle Bilet 48'in
                    uğrayacağı her türlü zararı aynen tazmin etmeyi kabul eder.
                    Bilet 48, Kullanıcı'nın sözleşmeye aykırı davranışları
                    nedeniyle kamu kurumlarına ve/veya üçüncü şahıslara ödemek
                    zorunda kalabileceği her türlü tazminat ve/veya idari/adli
                    para cezaları için Kullanıcı'ya aynen rücu hakkına sahiptir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Kullanıcı, 4077 sayılı Tüketici Kanunu, Mesafeli Satışlar
                    Uygulama Yönetmeliği ve bu konuda yürürlükte bulunan diğer
                    mevzuat hükümleri tahtında Firma tarafından verilen her
                    türlü hizmete ilişkin olarak Firma’nın aslen ve tek başına
                    sorumlu olduğunu, hizmetlerdeki herhangi bir ayıp ve
                    eksiklik sebebiyle veya Firma'nın üzerine düşen
                    yükümlülüklerini Kullanıcı’ya karşı yerine getirmemesi
                    sebebiyle yönelteceği her türlü talebin de muhatabının Firma
                    olduğunu ve&nbsp; Bilet 48’in bu hususlarda herhangi bir
                    sorumluluğu olmadığını veya herhangi bir garanti taahhüdü
                    altında bulunmadığını kabul, beyan ve taahhüt eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Cayma hakkı, Mesafeli Sözleşmeler Yönetmeliği 15. Maddesinin
                    g bendinde belirtilen, belirli bir tarihte veya dönemde
                    yapılması gereken, konaklama, eşya taşıma, araba kiralama,
                    yiyecek-içecek tedariki ve eğlence veya dinlenme amacıyla
                    yapılan boş zamanın değerlendirilmesine ilişkin
                    sözleşmelerde geçerli değildir.{" "}
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Satın alınan etkinlik biletlerinde, aksi belirtilmedikçe,
                    etkinliğe 48 saat kalaya kadar iade ve değişim&nbsp;işlemi
                    yapılabilmektedir.&nbsp;
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Cayma hakkının kullanılabileceği durumlarda, kullanımına
                    ilişkin talep Bilet 48'e faks, iadeli taahhütlü posta ya da
                    e-posta yoluyla (destek@bilet48.com.tr) veya Site’de yer
                    alan “Destek Formu” doldurularak yazılı olarak
                    iletilmelidir. Cayma hakkının kullanılması durumunda, eğer
                    cayma hakkının kullanılmasına imkan veren koşullar
                    sağlanmaktaysa, cayma bildiriminin Bilet 48'e ulaştığı
                    tarihten itibaren 10 (on) gün içinde Bilet 48 tarafından
                    tahsil edilmiş olan tutar KULLANICI'ya iade edilecektir.{" "}
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    2. Bilet 48 Sorumlulukları: Bu bilgiler, gizlilik şartlarına
                    bağlı kalınarak, içeriği genişletmek ve iyileştirmek amacı
                    ile reklam vb. konularda işbirliği yaptığımız firmalarla
                    paylaşılmaktadır. Buradaki amaç, sitenin kullanıcılarına
                    sunduğu deneyimi geliştirmek ve www.Bilet 48.com.tr’yi
                    geliştirmektir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • www.Bilet 48.com.tr kullanıcısı, kayıt için gerekli olan
                    bölümleri doldurup elektronik posta adresini onayladıktan
                    sonra işbu sözleşmede belirtilen şartlara uymak koşulu ile,
                    elektronik posta adresini ve şifresini girerek www.Bilet
                    48.com.tr sitesini kullanmaya başlayabilir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Bilet 48, sitesinde direkt ya da dolaylı yoldan diğer
                    sitelere bağlantı (link) verebilir. Bu bağlantıların amacı
                    bilgi vermek ya da reklamdır. Bilet 48 sitesi üzerinden
                    bağlanılan diğer sitelerin içerikleri, bağlanılan sitelerin
                    sorumluluğu altındadır. Bu sitelerin içeriklerinden, bu
                    sitelerle ilgili doğabilecek hiçbir sorundan Bilet 48
                    sorumlu tutulamaz.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Bilet 48, kullanıcının sözleşme konusu hizmetlerden,
                    teknik arızalar dışında, yararlandırılacağını, kullanıcının
                    paylaşıma açtığı kişisel bilgileri dışındaki bilgilerin
                    hiçbir şekilde yasal zorunluluklar hariç üçüncü kişi ya da
                    kuruluşlarla paylaşılmayacağını kabul ve taahhüt eder.
                    Kullanıcının www.Bilet 48.com.tr sitesinin çalışmasına engel
                    olacak herhangi bir elektronik sabotaj, kazançlara müdahale
                    amaçlı girişimler ve/veya saldırıya neden olduğunun tespit
                    edilmesi veya resmi makamlardan, üyeye yönelik suç duyurusu
                    ya da resmi soruşturma talebi gelmesi halinde, Bilet 48
                    ilgili üyenin kimlik bilgilerini araştırma ve açıklama
                    hakkına sahiptir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    • Bilet 48’in Kullanıcılara verdiği hizmet Firma tarafından
                    Kullanıcılara sağlanacak hizmetlerin satın alınması ve bu
                    hizmetlerin koşullarının belirlenmesi için uygun bir ortam
                    sağlanması ile sınırlıdır. Kullanıcı tarafından Firma’dan
                    satın alınan hizmetin Firma’dan randevu alınmasını
                    gerektirecek veya Firma ile rezervasyon yaptırılması
                    gerekecek bir hizmet olması durumunda bu randevu ve
                    rezervasyonlara ilişkin işlemler ve muameleler Kullanıcı ve
                    Firma arasında yapılacak ve Bilet 48’in bu hususta
                    Kullanıcı’ya karşı herhangi bir sorumluluğu olmayacaktır.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Sitemizin kullanıcı sözleşmelerini, kullanıcılarımız
                    diledikleri zaman web sitemizi ziyaret ederek site kullanım
                    şartnamesi ve koşullarını oturum açtıktan sonra görüntüleyip
                    okuyabilirler. Ayrıca, kullanıcılarımız siteye giriş yaparak
                    geçmiş tarihlerde faydalanmış oldukları hizmetler hakkındaki
                    detayları inceleyebilirler.
                    <span>
                      <br />
                    </span>
                    Bilet 48 taahhüt ettiği hizmetlerin sürekliliğini sağlamak
                    için, İşbu Sözleşme'de herhangi bir bildirimde bulunmaksızın
                    tek taraflı değişiklik yapabilir. Bilet 48 her zaman
                    herhangi bir gerekçe göstermeksizin, tek taraflı olarak
                    verdiği hizmeti sürekli veya geçici olarak durdurma,
                    servisin içeriğini değiştirme veya iptal etme hakkını saklı
                    tutar. Kullanıcı, Bilet 48’in İşbu Sözleşme koşullarını her
                    zaman tek taraflı olarak değiştirmeye hakkı olduğunu ve
                    Sözleşme ve Kullanım Koşulları'ndaki her türlü tadilin
                    Site’ye konulmakla taraflar arasında yürürlük kazanacağını
                    kabul, beyan ve taahhüt eder. Bilet 48, herhangi bir
                    değişiklik olması halinde güncel kullanım şartlarını aynı
                    link altında yeni tarih güncellemesi ile sitesinde
                    yayınlayacak, gerek görmesi halinde düzeltmeler ana sayfada
                    yayınlanacaktır. Yenilenmiş güncel kullanım şartları,
                    www.Bilet 48.com.tr 'de yayınlandığı andan itibaren geçerli
                    olacak ve Bilet 48.com.tr sitesinin veya hizmetlerinin
                    kullanımı o andan itibaren yenilenmiş kullanım şartlarına
                    bağlı olacaktır.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <strong>
                    <span lang="TR">UYUŞMAZLIKLARIN ÇÖZÜMÜ</span>
                  </strong>
                  <span lang="TR"></span>
                </p>
                <p>
                  <span lang="TR">
                    İşbu Sözleşmeye veya Kullanım Ön Bilgilendirme Koşullarına
                    konu hizmetin satın alma işlemlerinden doğacak
                    uyuşmazlıkların öncelikle sulh ile çözümlenmesi esastır.
                    Sulh ile çözülemeyen hallerde, Ticaret Bakanlığınca ilan
                    edilen parasal değere göre, Kullanıcı’nın hizmeti satın
                    aldığı veya ikametgahının bulunduğu yerdeki Tüketici Hakem
                    Heyetleri veya Tüketici Mahkemeleri yetkilidir.
                  </span>
                </p>
                <p>
                  <b>
                    <span lang="TR">&nbsp;</span>
                  </b>
                </p>
                <p>
                  <span lang="TR">
                    Kullanıcı bu Sözleşme’de ve ayrılmaz parçasını oluşturan
                    Kullanım – Ön Bilgilendirme Koşullarında yazılı tüm
                    koşulları ve açıklamaları okuduğunu, Bilet 48 ile ilgili
                    gerekli tüm bilgi ve iletişim adreslerini, satışa konu
                    hizmetin/etkinliğin temel niteliklerini, içeriğini, vergiler
                    dahil satış fiyatı ve olması halinde ek masraflarını, ödeme,
                    teslimat ve ifaya cayma hakkına ilişkin bilgileri,
                    şikayetlere ilişkin çözüm yöntemlerini ve tüm hükümleri
                    kabul ettiğini beyan, kabul ve taahhüt eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    İşbu sözleşmesi, Kullanıcı tarafından her bir hükmü okunarak
                    ve bütünüyle anlaşılarak elektronik ortamda onaylanmak
                    suretiyle, onaylandığı an itibariyle yürürlüğe girmiştir.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
