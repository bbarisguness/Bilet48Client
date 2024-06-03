import React from "react";

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
        backgroundColor: "black",
        color: "white",
      }}
    >
      loading..
    </div>
  );
}
