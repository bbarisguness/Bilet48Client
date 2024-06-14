"use client";

import React, { useState } from "react";
import FilterHotels2 from "./FilterHotels2";
import Link from "next/link";
import { eventsData } from "@/data/events";

export default function FilterHotels4() {
  return (
    <div className="tabs -pills-2 pt-40">
      <div className="row y-gap-30">
        <FilterHotels2 eventsData={eventsData} />
      </div>
      {/* End .tabs__content */}
    </div>
  );
}
