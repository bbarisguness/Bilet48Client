"use client";

import React, { useState } from "react";
import FilterHotels2 from "./FilterHotels2";
import Link from "next/link";

export default function FilterHotels4() {
  const [filterOption, setFilterOption] = useState("new_york");
  return (
    <div className="tabs -pills-2 pt-40">
      <div className="row y-gap-30">
        <FilterHotels2 filterOption={filterOption} />
      </div>
      {/* End .tabs__content */}

      <div className="row justify-center pt-60">
        <div className="col-auto">
          <Link
            href="/event"
            className="button px-40 h-50 -outline-blue-1 text-blue-1"
          >
            View All <div className="icon-arrow-top-right ml-15" />
          </Link>
        </div>
      </div>
    </div>
  );
}
