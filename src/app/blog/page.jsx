import React from "react";
import Blog1 from "@/components/blog/Blog1";

export const metadata = {
  title: "Blogs | Bilet 48",
  description: "Blog detay",
};

const BlogListV1 = () => {
  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Travel articles</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Lorem ipsum is placeholder text commonly used in site.
                </p>
              </div>
            </div>
          </div>
          <Blog1 />
        </div>
      </section>
    </>
  );
};

export default BlogListV1;
