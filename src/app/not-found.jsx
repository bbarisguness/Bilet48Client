import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import NotFound from "@/components/common/NotFound";

export const metadata = {
  title: "404 | Bilet 48",
  description: "Bilet 48 not found page",
};

const index = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <NotFound />
      {/* End 404 section */}

      <CallToActions />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
