import Hero6 from "@/components/hero/hero-6";
import AddBanner from "@/components/home/AddBanner";

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
      <section className="layout-pt-lg layout-pb-md">
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
      </section>
    </>
  );
}
