const Faq = () => {
  const faqContent = [
    {
      id: 1,
      collapseTarget: "One",
      title: "Biletlerimi iptal etmek istiyorum, ne yapabilirim?",
      content: `Etkinlik Detayında ve/veya Kurallarında aksi belirtilmediği hallerde Etkinlikten 48 saat öncesine kadar iade talebinde bulunabilirsiniz. İade etmek için iade formunuzu doldurmanız yeterlidir.`,
    },
    {
      id: 2,
      collapseTarget: "Two",
      title: "Etkinlik günü bilet aldım, biletimi iptal edebilir miyim?",
      content: `Bilet iptallerinizi Etkinlik Detayında ve/veya Kurallarında aksi belirtilmediği hallerde etkinlik gününden 48 saat öncesine kadar gerçekleştirebilirsiniz.`,
    },
    {
      id: 3,
      collapseTarget: "Three",
      title:
        "Etkinliğin iptali ya da değişikliği durumunda tarafımıza bilgilendirme yapılıyor mu?",
      content: `Etkinlik iptallerinde sistemde kayıtlı olan telefon numaranıza ve e-mail adresinize bilgilendirme yapılmaktadır.`,
    },
    {
      id: 4,
      collapseTarget: "Four",
      title: "Biletlerimde tarih-saat-mekân değişikliği oldu. Ne yapmalıyım?",
      content: `Alınan biletler aksi belirtilmediği sürece yeni tarih için geçerlidir.`,
    },
    {
      id: 5,
      collapseTarget: "Five",
      title:
        "Bilet aldığım etkinlik iptal oldu, ücret iadesi için ne yapmam gerekiyor?",
      content: `Bilet iadeleriniz tarafımızca otomatik olarak yapılmaktadır. Ücret iadeleriniz bankanıza bağlı olarak 3 -20 iş günü içerisinde işlem yaptığınız kartınıza aktarılacaktır.`,
    },
    {
      id: 6,
      collapseTarget: "Six",
      title:
        "Param çekildi ancak hesabımda biletlerimi göremiyorum. Ne yapmalıyım?",
      content: `Biletlerinizi görüntülemede ya da ödeme ekranında yaşadığınız bir sorunda destek@bubilet.com.tr ile iletişime geçebilirsiniz.`,
    },
    {
      id: 7,
      collapseTarget: "Seven",
      title:
        "İade tutarı hesabıma yansımamış görünüyor, nasıl bir yol izleyebilirim?",
      content: `Ücret iadeleriniz bankanıza bağlı olarak 3 -20 iş günü içerisinde işlem yaptığınız kartınıza aktarılmaktadır. Bir sorun yaşadığınızı düşünüyorsanız bankanızla görüşebilirsiniz.`,
    },
    {
      id: 8,
      collapseTarget: "Eight",
      title: "Etkinliğe girişte kimlik kontrolü yapılıyor mu?",
      content: `18 yaş üstü olan etkinliklerde kimlik kontrolü zorunluluğu vardır.`,
    },
    {
      id: 9,
      collapseTarget: "Nine",
      title: "18 yaşı doldurmama az süre var. Etkinliğe giriş yapabilir miyim?",
      content: `18 yaş tam olarak doldurulmadan etkinliklere giriş yapılamamaktadır.`,
    },
    {
      id: 10,
      collapseTarget: "Ten",
      title:
        "18 yaş altı ebeveynli girişlerde etkinlik alanına kimlerle giriş yapabilirim?",
      content: `18 yaş altı ebeveynli girişlerde etkinlik alanına, sadece birinci dereceden (anne, baba) yakınlarla giriş yapılabilmektedir.`,
    },
    {
      id: 11,
      collapseTarget: "eleven",
      title: "Etkinliklere 7 yaş altı çocuklar giriş yapabiliyor mu?",
      content: `Etkinliklere çocukların giriş hakkı mekân uygunluğuna ve etkinliğe göre farklılık gösterebilir. Öğrenmek için etkinlik satış sayfasında “Etkinlik Kuralları” bölümünü ziyaret edebilirsiniz.`,
    },
    {
      id: 12,
      collapseTarget: "twelve",
      title:
        "Aynı e-posta adresinden arkadaşlarım için de birden fazla bilet aldım, girişte bir sorun yaşar mıyız?",
      content: `Aynı e-posta adresi üzerinden birden fazla bilet satın alma işlemi gerçekleştirebilirsiniz. Size iletilen bilet kodlarıyla etkinlik alanına giriş yapabilirsiniz.`,
    },
    {
      id: 13,
      collapseTarget: "thirteen",
      title:
        "Biletleri kendi hesabımdan, kendi adıma aldım arkadaşım girebilir mi?",
      content: `Elinizdeki bilet kodlarıyla etkinlik alanına giriş yapabilirsiniz.`,
    },
    {
      id: 14,
      collapseTarget: "fourteen",
      title:
        "Biletimin üstünde başkasının ismi yazıyor girişte sorun yaşar mıyım?",
      content: `Elinizdeki bilet kodlarıyla etkinlik alanına giriş yapabilirsiniz.`,
    },
    {
      id: 15,
      collapseTarget: "fifteen",
      title: "Biletin üstündeki ismi/yanlış yazdım ne yapabilirim?",
      content: `Üyelik bilgileri kısmında “düzenle” adımını kullanarak gerekli düzenlemeleri yapabilirsiniz.`,
    },
    {
      id: 16,
      collapseTarget: "sixteen",
      title: "İletişim bilgilerimi yanlış yazdım ne yapabilirim?",
      content: ` Üyelik bilgileri kısmında “düzenle” adımını kullanarak gerekli düzenlemeleri yapabilirsiniz. Bileti satın aldığınız mail adresinin yanlış olduğunu düşünüyorsanız, müşteri hizmetleriyle iletişime geçebilirsiniz.`,
    },
  ];
  return (
    <>
      {faqContent.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.collapseTarget}`}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="icon-plus" />
                <i className="icon-minus" />
              </div>
              <div className="button text-dark-1 text-start">{item.title}</div>
            </div>
            {/* End accordion button */}

            <div
              className="accordion-collapse collapse"
              id={item.collapseTarget}
              data-bs-parent="#Faq1"
            >
              <div className="pt-15 pl-60">
                <p className="text-15">{item.content}</p>
              </div>
            </div>
            {/* End accordion conent */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
