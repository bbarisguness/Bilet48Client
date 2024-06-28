"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import CongratulationPage from "@/components/congratulation";
import QRCode from "react-qr-code";

export default function Buy() {
  const randomNumber = new Date().getTime();
  const router = useRouter();
  const data = useSelector((state) => state.buyPageSelectedTicket);
  if (data.categoryId < 1) {
    router.push("/");
    return;
  }

  return (
    <main id="tt-pageContent">
      <div className="header-margin"></div>
      <div
        className="subpages-inner section-marker"
        style={{ padding: "50px" }}
      >
        <div className="container container-fluid-lg">
          <div
            style={{
              height: "auto",
              margin: "0 auto",
              maxWidth: 128,
              width: "100%",
            }}
          >
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={randomNumber.toString()}
              viewBox={`0 0 256 256`}
            />
          </div>
          <CongratulationPage />
        </div>
      </div>
    </main>
  );
}
