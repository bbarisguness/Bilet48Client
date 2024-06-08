const PropertyHighlights = () => {
  const propertyContent = [
    {
      id: 1,
      icon: "icon-price-label",
      name: "Price",
      content: "40$",
      ml: 0
    },
    {
      id: 2,
      icon: "icon-beach-umbrella",
      name: "Table",
      content: "120$",
      ml: 0
    },
    // {
    //   id: 3,
    //   icon: "icon-customer",
    //   name: "Guests",
    //   content: "11",
    // },
    // {
    //   id: 4,
    //   icon: "icon-day-night",
    //   name: "Night minimum",
    //   content: "2",
    // },
  ];

  return (
    <div className="row y-gap-30 pt-20">
      {propertyContent.map((item) => (
        <div style={{ marginLeft: item.ml }} className="col-md-auto col-6" key={item.id}>
          <div className="d-flex">
            <i className={`${item.icon} text-22 text-blue-1 mr-10`}></i>
            <div className="text-15 lh-15">
              {item.name}
              <br /> {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyHighlights;
