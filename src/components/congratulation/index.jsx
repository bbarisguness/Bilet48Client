import Link from "next/link";
import { FaCheck } from "react-icons/fa";

export default function CongratulationPage() {
  return (
    <>
      <div className="text-center mt-5">
        <div className="container">
          <div className="congratulation-wrapper">
            <div className="congratulation-contents center-text">
              <div className="congratulation-contents-icon">
                <FaCheck />
              </div>
              <h4 className="congratulation-contents-title">
                {" "}
                Congratulations!{" "}
              </h4>
              <p className="congratulation-contents-para">
                {" "}
                Your account is ready to submit proposals and get work.{" "}
              </p>
              <div className="btn-wrapper mt-4">
                <Link href="/" className="cmn-btn btn-bg-1">
                  {" "}
                  Go to Home{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
