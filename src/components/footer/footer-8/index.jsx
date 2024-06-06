import AppButton from "./AppButton";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";
import Social from "../../common/social/Social";
import Subscribe from "./Subscribe";

const Footer8 = () => {
  return (
    <footer className="footer -type-2 bg-dark-3 text-white">
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-4 col-lg-6">
              <img src="/img/general/logo-light.svg" alt="image" />
              <div className="row y-gap-30 justify-between pt-30">
                <ContactInfo />
              </div>
              {/* End .row */}

              {/* End .row */}

            </div>
            {/* End .col */}

            <div className="col-lg-6">
              <div className="row y-gap-30">
               
                <FooterContent />
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-white-15">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default Footer8;
