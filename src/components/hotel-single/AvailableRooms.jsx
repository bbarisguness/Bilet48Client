import Image from "next/image";
import Travellers from "../home/home-2/Travellers";
import Link from "next/link";
import { MdOutlinePreview } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const AvailableRooms = ({ event }) => {
  return (
    <>
      <div className="border-light rounded-4 px-30 py-30 sm:px-20 sm:py-20 container eventDetailContainer">
        <div className="row y-gap-20">
          <div className="col-12">
            <h3 className="fw-500 mb-15">
              {event?.eventLocation || "Mekan yok"}
            </h3>
            <span>{event?.eventLocationAddress || "Adres yok"}</span>
            <div className="col-auto">
              <div className="row x-gap-10 y-gap-10 justify-end">
                <div className="col-sm-auto col-12">
                  <Link
                    href="javascript:;"
                    className="button px-15 py-10 -blue-1 bg-blue-1 mt-10 text-white"
                  >
                    <SlLocationPin className="mr-10" size={20} />
                    KONUM
                  </Link>
                </div>
                <div className="col-sm-auto col-12">
                  <Link
                    href="javascript:;"
                    className="button px-15 py-10 -blue-1 bg-blue-1 mt-10 text-white"
                  >
                    <MdOutlinePreview className="mr-10" size={20} />
                    MEKANI İNCELE
                  </Link>
                </div>
              </div>
            </div>
            <div className="roomGrid p-4">
              <div className="container">
                <div className="row y-gap-20 justify-between items-end">
                  <div className="col-auto">
                    <div className="sectionTitle -md">
                      <h4>Sahnedeki diğer etkinlikler</h4>
                      {/* <p className=" sectionTitle__text mt-5 sm:mt-0">
                        These popular destinations have a lot to offer
                      </p> */}
                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-auto">
                    <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
                      <div className="col-auto">
                        <button className="d-flex items-center text-24 arrow-left-hover js-places-prev">
                          <i className="icon icon-arrow-left" />
                        </button>
                      </div>
                      {/* End prev */}

                      <div className="col-auto">
                        <div className="pagination -dots text-border js-places-pag" />
                      </div>
                      {/* End pagination */}

                      <div className="col-auto">
                        <button className="d-flex items-center text-24 arrow-right-hover js-places-next">
                          <i className="icon icon-arrow-right" />
                        </button>
                      </div>
                      {/* End Next */}
                    </div>
                  </div>
                  {/* End .col for navigation and pagination */}
                </div>
                {/* End .row */}

                <Travellers />
                {/* End travellers component */}
              </div>
            </div>
            {/* End .roomGrid */}
          </div>
          {/* End .col-12 */}
        </div>
        {/* End .row */}
      </div>
      {/* End standard twin room */}
    </>
  );
};

export default AvailableRooms;
