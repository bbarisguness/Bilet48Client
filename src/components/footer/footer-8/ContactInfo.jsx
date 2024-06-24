const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Çağrı Merkezi",
      action: "tel:+(90)2163121262",
      text: "+(90) 312 12 62 ",
    },
    {
      id: 2,
      title: "Desteğe mi ihtiyacınız var?",
      action: "mailto:destek@bilet48.com",
      text: "destek@bilet48.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="col-sm-6" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
