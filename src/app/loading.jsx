import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#13357b",
        color: "white",
      }}
    >
      <Image
        src="/img/general/logo-light-without-text.png"
        width={50}
        height={50}
        alt="Loading"
      />
      <span style={{ marginLeft: 10 }}>Bilet48</span>
    </div>
  );
}
