import LeftMenu from "@/components/footerLinks/leftmenu";
import Link from "next/link";

export const metadata = {
  title: "Kullanım koşulları | Bilet 48",
  description: "Kullanım koşulları description",
};

export default function Page() {
  return (
    <>
      <div className="header-margin"></div>
      <div className="container mb-50">
        <div className="row">
          <LeftMenu activeLink="kullanim-kosullari" />
          <div className="col-lg-9">
            <div className="page-detail typography">
              <div>
                <p>
                  <strong>
                    <span lang="TR">
                      I.KULLANIM – ÖN BİLGİLENDİRME KOŞULLARI
                    </span>
                  </strong>
                  <span lang="TR"></span>
                </p>
                <p>
                  <span lang="TR">
                    İş bu kullanım, ön bilgilendirme ve satış koşullarında yer
                    alan,
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Bilet 48, Bilet 48&nbsp; ve "www.Bilet 48.com.tr" adlı
                    internet sitesini,
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    SİTE, "www.Bilet 48.com.tr" adlı alan adında bulunan web
                    sitesini,
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, SİTE'ye üye olan ve SİTE aracılığı ile İŞLETME
                    tarafından sağlanan/sunulan/ifa edilecek olan hizmetlerden
                    faydalanan gerçek kişiyi,
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    İŞLETME, SİTE'de ilan edilecek ve Site aracılığı ile İŞLETME
                    tarafından satışa sunulacak hizmetleri, KULLANICI'ya bedeli
                    karşılığında yine SİTE'de ilan edilecek koşul ve şartlarla
                    sağlamayı kabul ve taahhüt eden gerçek ve tüzel kişileri,
                  </span>
                </p>
                <p>
                  <span lang="TR">ifade eder.</span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    İŞLETME ve Bilet 48 birbirinden bağımsız ve ayrı
                    tüzel/gerçek kişilerdir. Bilet 48, KULLANICI ile İŞLETME'yi
                    biraraya getiren bir platform olup; Bilet 48 hiçbir surette
                    Hizmetler'in Sağlayıcısı/sunucusu/ifa edicisi ve/veya
                    İŞLETME'nin acentesi, bayii, vekili, temsilcisi vb. olarak
                    addedilemez.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    İŞLETME, KULLANICI'ya HİZMET'i sağlamakla tek mükellef ve
                    HİZMET'in satıcısı ile sağlayıcısıdır. Diğer taraftan Bilet
                    48 yalnızca KULLANICI'ya ve İŞLETME'ye aracılık eder ve
                    KULLANICI ile İŞLETME'nin tarafı olduğu temel hizmet satış
                    ilişkisinin tarafı değildir. Hizmetin satıcısı tarafından
                    sağlanacak/sunulacak/ifa edilecek hizmetler Bilet 48'in
                    taahhüt ve garantisi altında değildir. Yukarıda da ifade
                    edildiği üzere, Bilet 48’in rolü İŞLETME ve KULLANIYI'yı
                    buluşturan platform olarak yorumlanmalıdır. Dolayısıyla her
                    bir HİZMET özelinde İŞLETME yani satıcı/sağlayıcı bilgileri
                    değişiklik göstermektedir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Aracı hizmet sağlayıcı olarak tarafımızla hızlı bir şekilde
                    irtibat kurabileceğiniz ve şikayetlerinizi aktarabileceğiniz
                    bilgiler aşağıda yer almaktadır. Ayrıca Site’de yer alan
                    “Destek Formu”nu doldurarak da hızlıca irtibat kurarak varsa
                    şikayetlerinizi ulaştırabilirsiniz.
                  </span>
                </p>
                <p>
                  <b>
                    <span lang="TR">Aracı Hizmet Sağlayıcı Bilgileri:</span>
                  </b>
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
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, SİTE'yi ziyaret etmekle veya kullanmakla veya üye
                    olmakla, SİTE'nin kullanılmasına ilişkin bu koşulları
                    okuduğunu, anladığını ve bu koşullarla bağlı olduğunu ve hem
                    bu koşullara hem de SİTE ile ilgili yürürlükte bulunan tüm
                    kanunlara, yönetmeliklere ve sair mevzuata uyacağını açıkça
                    kabul ve taahhüt etmiş bulunmaktadır.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    Bilet 48, SİTE'de ilan edilir edilmez yürürlüğe girmek
                    üzere, herhangi bir zamanda bu koşullarda değişiklik yapma
                    hakkını saklı tutar. KULLANICI'nın, Bilet 48 bu koşullarda
                    değişiklik yaptıktan sonra SİTE'yi üye olarak kullanmaya
                    devam etmesi ve/veya SİTE aracılığı ile İŞLETME tarafından
                    ilan ve teklif edilen satışlara katılması bu koşullardaki
                    değişiklikleri kabul etmiş olduğu anlamına gelecektir.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, bu Kullanım – Ön Bilgilendirme Koşulları ile
                    kabul ve taahhüt ettiği yükümlülüklerini ihlâl ettiği
                    takdirde, Bilet 48 tarafından üyeliğinin iptal edilerek
                    SİTE'yi kullanımına son verilebileceğini, gelecekte SİTE'yi
                    kullanmasına engel olunabileceğini, ve/veya aleyhine hukuki
                    dava veya takip yoluna gidebileceğini kabul eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Bilet 48 bu Kullanım – Ön Bilgilendirme Koşulları'nın ihlal
                    edildiğini tespit ettiği durumlarda KULLANICI'nın hesabını
                    herhangi bir sebep ya da kanıt göstermeksizin iptal
                    edebilir. Bu durumda KULLANICI'nın SİTE aracılığı ile elde
                    etmiş olduğu tüm haklar da iptal edilmiş sayılacaktır.
                    KULLANICI, bu şekilde iptal edilen haklarına ilişkin Bilet
                    48'ten herhangi bir tazminat ya da geri ödeme talep etme
                    hakkı bulunmadığını kabul, beyan ve taahhüt eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, bu SİTE'yi sadece kişisel kullanımı için ziyaret
                    etme, görüntüleme ve bu SİTE'nin sayfalarını sadece kişisel
                    kullanımı için kopyalama hakkına ve yetkisine sahip olduğunu
                    kabul ve taahhüt eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    Bilet 48, SİTE'de yer alan üyeliğe ilişkin KULLANICI kimlik
                    ve şahıs bilgilerini, KULLANICI güvenliği ve kendi
                    yükümlülüğünü ifa etmesi sırasında veya bazı istatistiki
                    değerlendirmeler için dilediği biçimde kullanabilir.
                    KULLANICI, bu bilgilerin Bilet 48 tarafından anılan
                    amaçlarla kullanımına muvafakat eder. Bunları bir veritabanı
                    üzerinde tasnif ve muhafaza edebilir.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, Bilet 48 aracılığı ile İŞLETME tarafından
                    sunulan, ifa edilecek olan ve sağlanan hizmetlerden
                    yararlanabilmek amacıyla kullandığı sisteme erişim
                    araçlarının (kullanıcı ismi, şifre v.b.) güvenliği,
                    saklanması, üçüncü kişilerin bilgisinden uzak tutulması ve
                    izinsiz kullanılmasıyla ilgili hususların tamamen kendi
                    sorumluluğunda olduğunu kabul eder. KULLANICI'nın sisteme
                    giriş araçlarının güvenliği, saklanması, üçüncü kişilerin
                    bilgisinden uzak tutulması, kullanılması gibi hususlardaki
                    tüm ihmal ve kusurlarından dolayı KULLANICI'nın ve/veya
                    üçüncü kişilerin uğradığı veya uğrayabileceği zararlar
                    dolayısıyla Bilet 48’in, doğrudan veya dolaylı, herhangi bir
                    sorumluluğu yoktur.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, Bilet 48 tarafından kendisine bu konuda özel ve
                    yazılı olarak yetki verilmedikçe, bu SİTE'de yayınlanan
                    bilgi ve içeriği, etkinlikleri izlemek ve tanıtıcı bilgileri
                    almak, ve başka kişisel kullanım amaçları dışında herhangi
                    bir amaçla kopyalamayacağını, yüklemeyeceğini,
                    yayınlamayacağını, değiştirmeyeceğini veya başka bir şekilde
                    dağıtmayacağını kabul ve taahhüt eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, Bilet 48 tarafından kendisine bu konuda özel ve
                    yazılı olarak yetki verilmedikçe, SİTE'ye derin
                    bağlanmayacağını kabul ve taahhüt etmektedir. Bu SİTE'nin
                    içeriği ve yazılımı, Bilet 48'e aittir ve telif hakkı
                    korunmaktadır. SİTE sayfalarına kanuni telif hakkı uyarısı
                    ve çeşitli tanıtma yazıları konulmuştur. Bu uyarı ve
                    yazıların silinmesi veya kaldırılması yasaktır. KULLANICI,
                    bu uyarı veya tanıtma yazılarını ya da bunlarla birlikte
                    verilen ek bilgileri silmeyeceğini veya kaldırmayacağını
                    kabul ve taahhüt eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, SİTE'yi veya içindekileri izlemek veya kopyalamak
                    amacıyla ya da izin ve yetki verilmeyen başka amaçlarla ve
                    önceden Bilet 48’in açık ve yazılı iznini almadan herhangi
                    bir robot, örümcek veya başka otomatik aletler ya da manuel
                    prosesler kullanmayacağını kabul ve taahhüt eder. KULLANICI,
                    SİTE'nin çalışmasına müdahale etmek veya müdahaleye teşebbüs
                    etmek amacıyla herhangi bir alet, yazılım veya yordam
                    kullanmayacağını da kabul ve taahhüt eder.&nbsp;
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, Bilet 48’in altyapısı üzerine makul olmayan veya
                    orantısız büyüklükte yük getiren herhangi bir işlem
                    yapmayacağını da kabul ve taahhüt etmektedir.&nbsp;
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, Bilet 48’in açık ve yazılı iznini almadan,
                    SİTE'nin içeriğini kopyalamayacağını, çoğaltmayacağını,
                    değiştirmeyeceğini, bu içerikten türev eserler
                    yaratmayacağını ya da bunları kamuya teşhir etmeyeceğini
                    (ticari olmayan ve kişisel amaçlarla kullanım durumları
                    hariç) kabul ve taahhüt etmektedir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Bunlarla sınırlı kalmaksızın ve fakat, SİTE'nin yetkisiz
                    çerçevelenmesi veya SİTE'ye yetkisiz bağlantı ya da SİTE'de
                    bulunan bir robot, örümcek veya başka otomatik aletin
                    yetkisiz kullanımı da dahil olmak üzere SİTE'nin her türlü
                    yasadışı ve/veya yetkisiz kullanımı yasaktır ve bu tür
                    kullanım halinde, gerekli araştırmalar yapılacak ve medeni
                    hukuk ve ceza hukuku tedbirleri ve ihtiyati tedbirler de
                    dahil olmak üzere gereken bütün uygun hukuki tedbirler
                    alınacaktır.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    Bu SİTE'yi, telif hakkına konu olan bilgi ve materyalleri
                    açıkça yazılı izin almadan, geçerli bir savunması veya haklı
                    bir sebebi olmadan yasadışı yollarla iletmek amacıyla
                    kullanan KULLANICI'ların hak ve imtiyazları sona
                    erdirilecektir. Özellikle, bu SİTE'ye makaleler, görüntüler,
                    öyküler, yazılım veya telif hakkına konu olan veya benzeri
                    içerik koyan KULLANICI'lar, SİTE'ye yükledikleri içeriğin
                    üçüncü şahısların telif haklarına veya başka haklarına (özel
                    hayatın gizliliği veya ifşayı men etme hakları gibi) tecavüz
                    etmediğinden veya bu hakları ihlâl etmediğinden emin
                    olmalıdırlar. Bir KULLANICI'nın bu SİTE'yi yasadışı bir hak
                    tecavüzünün veya hak ihlâlinin bir aracı olarak kullandığı
                    konusunda ilgili telif hakkı sahibinin veya onun
                    temsilcisinin bize bildirimde bulunması ya da bunun bir
                    mahkeme kararıyla veya ilgili KULLANICI'nın ikrarıyla sabit
                    olması halinde, ihlâlde bulunan KULLANICI'nın bu SİTE'ye
                    erişim ve/veya SİTE'yi kullanım hakları iptal edilecektir.
                    Bilet 48’in ileri sürülen tecavüzü veya hak ihlâlinin
                    gerçekten yapıldığına inanması halinde, kendi mutlak
                    takdirine göre, o KULLANICI'nın bu SİTE'ye erişim veya
                    SİTE'yi kullanım haklarını böyle bir bildirim, mahkeme
                    kararı veya ikrardan önce de iptal etme hakkı saklıdır.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI'nın, SİTE'yi başka bir SİTE'ye bağlanmak amacıyla
                    ya da SİTE'ye içerik veya başka bilgiler yüklemek amacıyla
                    kullanması da dahil, SİTE'yi kullanmasından dolayı üçüncü
                    şahısların maruz kalabileceği zarar ve ziyanları, ileri
                    sürebileceği talepleri, KULLANICI bizzat üçüncü şahıslara,
                    bağlı şirketlerine, memur ve temsilcilerine, diğer
                    ortaklarına ve çalışanlarına bu zararları tazmin edeceğini
                    ve onların bu zararlarını gidereceğini de kabul ve taahhüt
                    etmektedir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Bilet 48, SİTE'nin kesintisiz veya hatasız olacağını ya da
                    SİTE'nin veya içeriğinin kullanılmasıyla ya da SİTE'ye
                    bağlantı yapılmasıyla belirli sonuçların elde edileceğini
                    garanti etmez. SİTE ve içeriği "olduğu gibi" ve "mevcut
                    haliyle" esasında sunulmaktadır. Bilet 48, KULLANICI'nın
                    SİTE'den yüklediği dosyalarda virüs ya da kirletici veya
                    bozucu özellikler bulunmadığını da garanti edemez. Bilet 48,
                    SİTE'nin belirli bir amaca uygunluğu ve ticari değerine
                    ilişkin garantiler de dahil her türlü başka aleni veya zımni
                    garantiyi reddeder. Bilet 48, bunlarla sınırlı kalmaksızın
                    ve fakat, doğrudan, dolaylı veya arızi zararlar, netice
                    kabilinden doğan zararlar ve cezai tazminatlar da dahil
                    olmak üzere, bu SİTE'nin kullanılmasından kaynaklanabilecek
                    zararlar için sorumlu tutulamaz.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    Bilet 48, SİTE üzerinde, Bilet 48’in kendi kontrolünde
                    olmayan üçüncü kişi İŞLETME'nin sahip olduğu ve işlettiği
                    başka web SİTE'lerine ve/veya portallara, dosyalara veya
                    içeriklere 'link' verebilir. Bu 'link'ler, Bilet 48
                    tarafından, sahibinden izin alınmak suretiyle referans
                    kolaylığı nedeniyle sağlanmış olabilir ve web SİTE'sini veya
                    SİTE'yi işleten kişiyi desteklemek amacı veya web SİTE'si
                    veya içerdiği bilgilere yönelik herhangi bir türde bir beyan
                    veya garanti niteliği taşımamaktadır. SİTE üzerindeki
                    'link'ler vasıtasıyla erişilen portallar, web SİTE' leri,
                    dosyalar ve içerikler, bu 'link'ler vasıtasıyla erişilen
                    portallar veya web SİTElerinden sunulan hizmetler veya
                    ürünler veya bunların içeriği hakkında Bilet 48’in herhangi
                    bir sorumluluğu yoktur.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    Bilet 48, SİTE'nin kullanılmasından ya da Bilet 48
                    hizmetinin kullanılmasından beklenebilecek sonuçlar
                    konusunda hiçbir garanti vermez.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    Bilet 48; SİTE'nin üçüncü şahıs KULLANICI'ları, Bilet 48
                    KULLANICI'ları, reklamcıları ve/veya sponsorlarının Bilet 48
                    hizmetiyle ilgili ve Bilet 48 aracılığı ile kullanılan
                    hizmetlerle ilgili ya da KULLANICI'nın SİTE'yi ve/veya Bilet
                    48 hizmetini kullanmasıyla ilgili fiil, ihmal ve
                    davranışları için her türlü sorumluluğu reddeder. Bilet 48,
                    herhangi bir etkinliği organize eden kişiler, icracılar,
                    kurumlar veya başka üçüncü şahısların SİTE'yle bağlantılı
                    veya SİTE'ye atıfta bulunan ürünleri, hizmetleri, fiil veya
                    ihmalleri nedeniyle de sorumlu tutulamaz.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    Bu sorumluluk sınırlamalarına izin verilmeyen ülkeler hariç,
                    Bilet 48, bu tip zararların olabileceği kendisine önceden
                    bildirilmiş olsa bile, kâr kaybı da dahil dolaylı, arızi ve
                    özel zararlar veya netice kabilinden doğan zararlar veya
                    cezai tazminatlar için KULLANICI'ya karşı hiçbir durumda
                    sorumlu tutulamaz. İş bu koşulların Bilet 48’in
                    sorumluluğunu sınırlayan hükümlerinden birinin ilgili
                    mahkeme tarafından ilgili mevzuata aykırı bulunması halinde
                    söz konusu hüküm mevzuata uygun olan ve sorumluluğu en fazla
                    sınırlayan hali ile geçerli sayılacak ve Bilet 48’in
                    sorumluluğu buna göre belirlenecektir.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI SİTE'yi kullanmakla, SİTE hakkında veya SİTE ile
                    ilgili bir ihtilâfın çıkması halinde, bu ihtilâfın kanunlar
                    ihtilâfı kurallarına bakılmaksızın Türkiye Cumhuriyeti
                    kanunlarına tâbi olacağını ve bu kanunlara göre
                    çözümleneceğini ve İstanbul Merkez mahkemelerinin görev ve
                    yer olarak yetkili olacağını kabul etmektedir.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <strong>
                    <span lang="TR">II.SATIŞ ve İADE KOŞULLARI</span>
                  </strong>
                  <span lang="TR"></span>
                </p>
                <p>
                  <span lang="TR">
                    SİTE aracılığı ile İŞLETME tarafından ilan ve teklif edilen
                    hizmetleri satın almak için SİTE'ye üye olmak gerekmektedir.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    Bilet 48in kullancılarına verdiği hizmet, SİTE aracılığı ile
                    İŞLETME tarafından satışa sunulan hizmetlerin KULLANICI'lar
                    tarafından satın alınması ve SİTE'de ilan edilen koşul ve
                    şartlarla kullanılması ile sınırlıdır.{" "}
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
                    etkinliği/hizmeti düzenleyen İŞLETME’dir. Bilet 48’in
                    etkinliğin/hizmetin kapsamı bilet adedi, fiyatı, oturma
                    düzeni, Etkinlik Kuralları vs. ilan edilen etkinlik koşul
                    şart veya bedeli konularında hak ve yetkisi bulunmamaktadır.
                    KULLANICI, Bilet 48’in hizmeti sunan kişi olmayıp, yalnızca
                    İŞLETME ile KULLANICI arasında aracılık yapmakta olduğunu
                    kabul etmektedir. Bilet 48, KULLANICI tarafından
                    KULLANICI'ya sunulan ve/veya sağlanan hizmetin kusurlu ya da
                    ayıplı olması ve/veya belirlenen süre içerisinde
                    sunul(a)maması/sağlan(a)maması gibi etkinlik/hizmetin
                    içerik, koşul, şartları, mekanı, bedeli vs. dolayısıyla
                    sorumlu değildir. KULLANICI, bu türlü talepleri yalnızca
                    İŞLETME’ye karşı ileri süreceğini, Bilet 48’in bu yönde bir
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
                    herhangi bir yükümlülüğü kalmayacaktır.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    SİTE aracılığı ile İŞLETME tarafından satılan hizmetin
                    kullanılmasının İŞLETME'den randevu alınması ya da
                    rezervasyon yaptırılması yoluyla kullanılacak olması
                    halinde, randevu ve rezervasyon saat ve günleri, KULLANICI
                    ile İŞLETME arasında belirlenecektir. Rezervasyon iptal ve
                    değişiklikleri için KULLANICI'ya tanınmış olan süreler
                    fırsat detaylarında belirtilmiştir. Bu sürelerin aşılması
                    durumunda yaptırılan rezervasyon ve randevulara ilişkin
                    fırsat kodları KULLANICI tarafından hizmete dönüştürülmüş
                    sayılacaktır. Bu durumda Bilet 48’in KULLANICI'ya herhangi
                    bir geri ödeme yükümlülüğü bulunmamaktadır.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    Zaman zaman, etkinlikleri düzenleyen kişiler, spor, dans ve
                    müzik toplulukları, yeme içme mekanları, spor merkezleri,
                    tatil yerleri, kişisel gelişim kursları bu etkinlikleri
                    muhtelif sebeplerle iptal edebilir veya erteleyebilirler. Bu
                    gibi hallerde, eğer ilgili hizmete ilişkin bedel Bilet 48
                    tarafından İŞLETME'ye ödenmişse KULLANICI'dan tahsil edilen
                    bedelin KULLANICI’ya iadesi İŞLETME tarafından yapılacaktır.
                    Eğer İŞLETME'ye aktarılan bedel ile Bilet 48’in tahsil
                    ettiği bedel arasında bir fark varsa, Bilet 48’in
                    yükümlülüğü bu fark bedeli ile sınırlıdır. Bilet 48’in
                    İŞLETME'ye aktardığı tutara ilişkin herhangi bir geri ödeme
                    sorumluluğu bulunmamaktadır.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, SİTE aracılığı ile İŞLETME tarafından ilan ve
                    teklif edilen hizmeti yine SİTE'de ilan edilen satış koşul
                    ve şartları ile sınırlı olarak İŞLETME'den satın aldığını
                    kabul ve taahhüt eder. KULLANICI'nın satın almış olduğu
                    hizmetin ilan edilen koşul ve şartlarında değişiklik
                    talepleri kabul edilemez.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, Bilet 48&nbsp;aracılığı ile İŞLETME'den satın
                    aldığı hizmeti tek seferde kullanacaktır. KULLANICI'nın
                    ödediği bedele ilişkin fatura veya fiş, hizmetin ifa
                    edilmesi sırasında veya en geç 7 (yedi) gün içinde İŞLETME
                    tarafından düzenlenerek KULLANICI'ya verilecektir. Bilet
                    48&nbsp;hizmetin sağlayıcısı/sunucusu veya ifa edicisi
                    olmadığından bundan dolayı herhangi bir sorumluluk kabul
                    etmez.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    Cayma hakkı, fiyatı borsa ya da teşkilatlanmış diğer
                    piyasalarda belirlenen mal ya da hizmetlere yönelik ilan ve
                    teklifler için geçerli değildir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Cayma hakkı, KULLANICI'nın taleplerine bağlı olarak
                    hazırlanmış ve geri alınması mümkün olmayan ya da çabuk
                    bozulmaya müsait veya son kullanma tarihi geçme olasılığı
                    bulunan malların satın alınmasına yönelik ilan ve teklifler
                    için geçerli değildir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Cayma hakkı, İŞLETME tarafından sunulan hizmetin elektronik
                    ortamda anında ifasının söz konusu olduğu durumlarda geçerli
                    değildir.
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
                  <span lang="TR">&nbsp;</span>
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
                    tahsil edilmiş olan tutar KULLANICI'ya iade edilecektir.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    Seyahat, konaklama, eğlence sektörü alanlarında faaliyet
                    gösteren İŞLETME'lerin SİTE aracılığı ile KULLANICI'ya
                    satışını yaptıkları hizmetlerin belirli bir tarihte ya da
                    zaman diliminde ifa edilmesi söz konusu olduğu (gösteri,
                    konser, tur, uçuş vb. hizmetler) durumlarda, cayma hakkı
                    geçerli değildir. Bu gibi hizmetlerin çeşitli koşullara
                    bağlı olarak İŞLETME tarafından ifa edilemediği durumlarda,
                    İŞLETME'nin ilgili hizmeti ifa edilebileceği tarihin ya da
                    tarihlerin tayin edilmesi KULLANICI ile İŞLETME arasında
                    yürütülecek iletişime dayalıdır. KULLANICI, bu gibi
                    hizmetlerin İŞLETME tarafından ifasının mümkün olmadığı
                    durumlarda yüklenmiş olabileceği ek harcamalara ilişkin
                    Bilet 48’in herhangi bir sorumluluğu bulunmadığını kabul,
                    beyan ve taahhüt eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, İŞLETME'nin münferit ve tek sorumlu olarak,
                    Hizmetler'e ilişkin, başta 4077 sayılı Tüketicinin Korunması
                    Hakkında Kanun ve bu Kanun kapsamındaki ilgili mevzuat ve
                    kapsamına giren Hizmetler için Mesafeli Sözleşmeler Uygulama
                    Usul ve Esasları Hakkında Yönetmelik hükümleri de dahil
                    olmak üzere, bu kanunlar uyarınca çıkarılmış tüm
                    Yönetmeliklere, Tebliğlere ve sair ilgili mevzuata, ayrıca
                    Hizmetler'in kapsamına girdiği her türlü kanun ve ilgili
                    mevzuata uymakla yükümlü olduğunu, bu mevzuatın satıcıya
                    veya sağlayıcıya yüklediği her türlü borcun ifası ve her
                    türlü KULLANICI talebinden dolayı tek sorumlu olduğunu,
                    İŞLETME'nin ilgili yükümlülüklerini ihlal etmesi halinde
                    Bilet 48’in hiçbir sorumluluğu bulunmadığını, Bilet 48’in
                    İŞLETME'nin Hizmetler'i mevzuata uygun ve/veya taahhüt
                    ettiği biçimde sağlayacağı yönünde hiçbir garantisi ve
                    taahhüdü bulunmadığını ve Bilet 48'ten bu nedenlerle
                    herhangi bir talepte bulunmayacağını, ilgili taleplerini
                    yalnızca İŞLETME'ye yönelteceğini kabul, beyan ve taahhüt
                    eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, İŞLETME tarafından SİTE aracılığı ile satılan ya
                    da sağlanan ürün ve hizmetler alkollü içki tüketimini
                    içerebileceği durumlarda, Türkiye Cumhuriyeti kanunlarına
                    göre, söz konusu ürün ve hizmette yer alan alkollü içkiyi
                    tüketebilecek ve satın alabilecek yaşta (18 yaş ve üzeri)
                    olduğunu ve söz konusu ürün ve hizmetlerin görsellerinin
                    hiçbir şekilde KULLANICI'yı alkol tüketimine özendirir
                    nitelikte olmadığını kabul, beyan ve taahhüt eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    Bilet 48’in, ilgili Hizmet'in kapsamına girdiği Seyahat
                    Acentaları Yönetmeliği ve benzeri özel kanun veya ilgili
                    mevzuatta düzenlenen Seyahat Acentası İşletme Belgesi ve
                    benzeri izin, ruhsat ve sair belgeyi temin etmesi; hiçbir
                    surette Seyahat Acentası ve benzeri acente, satıcı veya
                    sağlayıcı olduğu şeklinde yorumlanamaz. Bilet 48’in işbu
                    belgeleri temin etmesi, İŞLETME'nin, başta Türkiye'de
                    satılan paket turlara ilişkin zorunlu sigorta yapma
                    yükümlülüğü olmak üzere, ilgili özel kanun ve sair mevzuatta
                    düzenlenen yasal yükümlülüklerini ortadan kaldırmaz.
                    KULLANICI, özel kanunlarda düzenlenen bu ve benzeri hak ve
                    taleplerinin tek sorumlusunun İŞLETME olduğunu, Bilet 48’in
                    Hizmet'in satıcısı, sağlayıcısı, acentesi, bayii, seyahat
                    acentası ve benzeri özel kanunlarda düzenlenen yasal
                    sorumlusu olmadığından, yalnızca aracılık vasfını haiz
                    olması dolayısıyla, bunlara ait hiçbir yasal yükümlülüğün
                    yerine getirilmesi ile sorumlu olmadığını, zorunlu sigorta
                    da dahil olmak üzere KULLANICI'nın yasal hak ve taleplerinin
                    muhatabı ve yükümlüsü olmadığını ve ilgili talepleri
                    yalnızca İŞLETME'ye yönelteceğini kabul, beyan ve taahhüt
                    eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, Bilet 48’in hizmeti sunan kişi olmayıp, yalnızca
                    İŞLETME ile KULLANICI arasında aracılık yapmakta olduğunu
                    kabul etmektedir. Bilet 48, İŞLETME tarafından KULLANICI'ya
                    sunulan ve/veya sağlanan hizmetin kusurlu ya da ayıplı
                    olması ve/veya belirlenen süre içerisinde
                    sunul(a)maması/sağlan(a)maması dolayısıyla sorumlu değildir.
                    KULLANICI, bu türlü talepleri yalnızca İŞLETME'ye karşı
                    ileri süreceğini, Bilet 48’in bu yönde bir garantisi veya
                    taahhüdü bulunmadığını, Bilet 48'e karşı her hangi bir
                    talepte bulunmayacağını kabul ve taahhüt eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI'nın Bilet 48 aracılığı ile satın aldığı hizmet,
                    İŞLETME veya 3. kişiler tarafından düzenlenen başka
                    kampanyalarla birleştirilemez.
                  </span>
                </p>
                <p>
                  <span lang="TR">&nbsp;</span>
                </p>
                <p>
                  <span lang="TR">
                    KULLANICI, hizmetin kullanımı için verilen şifrenin
                    çalınması veya 3. kişilerce kullanılması halinde Bilet 48’in
                    ya da İŞLETME'nin sorumlu olmayacağını kabul eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Bilet 48 çekinin geçerli olacağı tarih ve süreler SİTE'de
                    satış koşul ve şartları ile birlikte ilan edilecek olup; bu
                    süre içerisinde kullanılmayan kuponlar geçerliliğini
                    yitirecektir. KULLANICI, süresinde kullanılmayan kuponlarr
                    nedeniyle herhangi bir talepte bulunmayacağını kabul ve
                    taahhüt eder.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    İşbu Ön Bilgilendirmeden veya Sözleşmeye konu hizmetin satın
                    alma işlemlerinden doğacak uyuşmazlıkların öncelikle sulh
                    ile çözümlenmesi esastır. Sulh ile çözülemeyen hallerde,
                    Ticaret Bakanlığınca ilan edilen parasal değere göre,
                    Kullanıcı’nın hizmeti satın aldığı veya ikametgahının
                    bulunduğu yerdeki Tüketici Hakem Heyetleri veya Tüketici
                    Mahkemeleri yetkilidir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    İşbu Ön Bilgilendirme Formu elektronik ortamda Kullanıcı
                    tarafından okunarak kabul edildikten sonra Mesafeli Sözleşme
                    kurulması aşamasına geçilecektir.{" "}
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Kullanıcı, işbu Form’da ayrıntıları ile belirtilen, Bilet 48
                    ile ilgili gerekli tüm bilgi ve iletişim adreslerini, satışa
                    konu hizmetin/etkinliğin temel niteliklerini, içeriğini,
                    vergiler dahil satış fiyatı ve olması halinde ek
                    masraflarını, ödeme, teslimat ve ifaya, cayma hakkına
                    ilişkin bilgileri şikayetlere ilişkin çözüm yöntemlerini ve
                    tüm hükümleri mesafeli sözleşmeler kurulmadan önce okuyup
                    bilgi sahibi olduğunu ve elektronik ortamda onayladığını
                    beyan etmektedir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    Kullanıcı, işbu Ön Bilgilendirme Formu’nu elektronik ortamda
                    onaylaması ile onayladığı Form’un Satış Sözleşmesinin
                    ayrılmaz bir parçası olduğunu kabul etmektedir.
                  </span>
                </p>
                <p>
                  <span lang="TR">
                    İşbu Sözleşme KULLANICI tarafından okunarak kabul edilmiş ve
                    yürürlüğe girmiştir.
                    <span>
                      <br />
                    </span>
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
