import Hero6 from "@/components/hero/hero-6";
import AddBanner from "@/components/home/AddBanner";
import FilterHotels4 from "@/components/hotels/FilterHotels4";
import Hero4 from "@/components/hero/hero-4";
import Hero7 from "@/components/hero/hero-7";
import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Bilet 48",
    description: "Bilet 48 description",
  };
}

export default function Home({ params, searchParams }) {
  return (
    <>
      {/* <Hero6 /> */}
      <div className="header-margin"></div>
      {/* <Hero4 /> */}
      <Hero7 />

      {/* <section className="pt-30 layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Special Offers</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          <div className="row y-gap-20 pt-40">
            <AddBanner />
          </div>
        </div>
      </section> */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Events</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}
          <FilterHotels4 />
          <div className="row justify-center pt-60">
            <div className="col-auto">
              <Link
                href="/event"
                className="button px-40 h-50 -outline-blue-1 text-blue-1"
              >
                View All <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
    </>
  );
}
