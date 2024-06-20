import FilterBox from "@/components/tour-single/filter-box";

const SidebarRight = ({ tour }) => {
  return (
    <div className="d-flex justify-end js-pin-content">
      <div className="w-360 lg:w-full d-flex flex-column items-center">
        <div className="px-30 py-30 rounded-4 border-light bg-white shadow-4">
          <div className="text-14 text-light-1">
          <span className="text-20 fw-500 text-dark-1 ml-5">
          {tour?.price} TL'den
            </span>
        
          {" "}Başlayan Fiyatlarla
          </div>
          {/* End div */}

          <div className="row y-gap-20 pt-30">
            <FilterBox />
          </div>

          <div className="d-flex items-center pt-20">
            <div className="size-40 flex-center bg-light-2 rounded-full">
              <i className="icon-heart text-16 text-green-2" />
            </div>
            <div className="text-14 lh-16 ml-10">
              Biletler tükenmeden hemen yerini ayırt..
            </div>
          </div>
        </div>
        {/* End px-30 */}

        <div className="px-30">
          <div className="text-14 text-light-1 mt-30">
          </div>
        </div>
        {/* End div */}
      </div>
    </div>
  );
};

export default SidebarRight;
