import TopBreadCrumb from "@/components/rental-single/TopBreadCrumb";
import rentalsData from "@/data/rentals";
import SlideGallery from "@/components/rental-single/SlideGallery";
import PropertyHighlights from "@/components/rental-single/PropertyHighlights";
import Overview from "@/components/rental-single/Overview";
import SidebarRight from "@/components/rental-single/SidebarRight";
import NotFound from "@/components/common/NotFound";
import Link from "next/link";
import TourGallery from "@/components/tour-single/TourGallery";

export async function generateMetadata({ params }) {
  const eventData = rentalsData.find((item) => item.slug == params.slug);

  return {
    title: `${eventData?.title || "Not Found"} | Bilet 48`,
    description: "Detay açıklama",
  };

  //   if (eventData?.data?.length > 0) {
  //     return {
  //       title:
  //         eventData?.data[0]?.attributes?.seo?.metaTitle + " | SkyFall Arena",
  //       description: eventData?.data[0]?.attributes?.seo?.metaDescription,
  //     };
  //   } else {
  //     return {
  //       title: "Not Found Data",
  //       description: "Not Found Data desc",
  //     };
  //   }
}

export default function Page({ params }) {
  const slug = params.slug;
  const rental = rentalsData.find((item) => item.slug == slug);
  if (rental) {
    return (
      <>
        <div className="header-margin"></div>
        <TopBreadCrumb submenu="Event" title={rental.title} />

        <section className="pt-40">
          <div className="container">
            <div className="row y-gap-30">
              <div className="col-12">
                <div className="row justify-between items-end">
                  <div className="col-auto">
                    <h1 className="text-26 fw-600">{rental?.title}</h1>
                    <div className="row x-gap-20 y-gap-20 items-center pt-10">
                      <div className="col-auto">
                        <div className="row x-gap-10 items-center">
                          <div className="col-auto">
                            <div className="d-flex x-gap-5 items-center">
                              <i className="icon-clock text-16 text-light-1" />
                              <div className="text-15 text-light-1">
                                {rental?.location}
                              </div>
                            </div>
                          </div>
                          {/* <div className="col-auto">
                            <button
                              data-x-click="mapFilter"
                              className="text-blue-1 text-15 underline"
                            >
                              Show on map
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End .col-auto */}

                  <div className="col-auto">
                    <div className="row x-gap-10 y-gap-10">
                      {/* <div className="col-auto">
                              <button className="button px-15 py-10 -blue-1 mt-10">
                                <i className="icon-share  mr-10" />
                                Share
                              </button>
                            </div> */}

                      {/* End .col-auto */}

                      {/* <div className="col-auto">
                        <Link
                          href="/buy"
                          className="button px-15 py-10 -blue-1 bg-light-2 mt-10"
                        >
                          <i className="icon-ticket mr-10" />
                          BİLET AL
                        </Link>
                      </div> */}
                      {/* End .col-auto */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .col-auto */}
                </div>
                {/* End .row */}
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
        {/* End sections pt-40 */}

        {/* <section className="pt-40">
          <div className="container">
            <SlideGallery rental={rental} />
          </div>
        </section> */}

        {/* End gallery grid wrapper */}

        <TourGallery tour={rental} />
        {/* End single page content */}
      </>
    );
  } else {
    return (
      <>
        <div className="header-margin"></div>
        {/* header top margin */}

        <NotFound />
        {/* End 404 section */}
      </>
    );
  }
}
