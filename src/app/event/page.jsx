import AddBanner from "@/components/home/AddBanner";
import BlogPagination from "@/components/blog/BlogPagination";
import FilterHotels4 from "@/components/hotels/FilterHotels4";

export const metadata = {
  title: "Events | Bilet48",
  description: "Event list",
};

export default function Page() {
  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Tüm Etkinlikler</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">
              Birbirinden değerli etkinlikleri Muğla'da yaşa..
              </p>
            </div>
          </div>
        </div>
        {/* End .row */}
        <div className="row y-gap-20 pt-40">
          <FilterHotels4 />
        </div>
        <BlogPagination />
        {/* End .row */}
      </div>
      {/* End container */}
    </section>
  );
}
