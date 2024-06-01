import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import TermsConent from "@/components/common/TermsConent";

export const metadata = {
  title: "Terms & Conditions || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const Terms = () => {
  return (
    <>
      {/* End Page Title */}
      <div className="header-margin"></div>
      {/* header top margin */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="tabs js-tabs">
            <TermsConent />
          </div>
        </div>
      </section>
      {/* End terms section */}

      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Terms), { ssr: false });
