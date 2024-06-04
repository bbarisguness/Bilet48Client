import AddBanner from "@/components/home/AddBanner";

export const metadata = {
  title: "Events | Bilet 48",
  description: "Event list",
};

export default function Page() {
  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Events</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">
                These popular destinations have a lot to offer
              </p>
            </div>
          </div>
        </div>
        {/* End .row */}
        <div className="row y-gap-20 pt-40">
          <AddBanner />
        </div>
        {/* End .row */}
      </div>
      {/* End container */}
    </section>
  );
}
