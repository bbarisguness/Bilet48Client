const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Ücretsiz Müşteri Hizmetleri",
      action: "tel:+(90) 312 12 62",
      text: "+(90) 312 12 62",
    },
    {
      id: 2,
      title: "Desteğe mi ihtiyacınız var?",
      action: "mailto:bilet48@gmail.com",
      text: "bilet48@gmail.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mb-20" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-dark-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
