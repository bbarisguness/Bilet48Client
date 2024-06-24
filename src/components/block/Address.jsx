const Address = () => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-3",
      title: "Adres",
      content: (
        <>328 Queensberry Street, North Melbourne VIC 3051, Australia.</>
      ),
    },
    {
      id: 2,
      colClass: "col-auto",
      title: "Ücretsiz Müşteri Hizmetleri",
      content: (
        <>
          <a href="tel:+903121262">+(90) 312 12 62</a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-auto",
      title: "Desteğe mi ihtiyacınız var ?",
      content: (
        <>
          {" "}
          <a href="mailto:bilet48@gmail.com">bilet48@gmail.com</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div className={`${item.colClass}`} key={item.id}>
          <div className="text-14 text-light-1">{item.title}</div>
          <div className="text-18 fw-500 mt-10">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default Address;
