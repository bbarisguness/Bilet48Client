import CallToActions from "@/components/common/CallToActions";
import RelatedBlog from "@/components/blog/blog-details/RelatedBlog";
import DetailsContent from "@/components/blog/blog-details/DetailsContent";
import BlogNavigator from "@/components/blog/blog-details/BlogNavigator";
import blogs from "@/data/blogs";
import NotFound from "@/components/common/NotFound";
import TopBreadCrumb from "@/components/rental-single/TopBreadCrumb";

export async function generateMetadata({ params }) {
  const blog = blogs.find((item) => item?.slug == params?.slug);

  return {
    title: `${blog?.title || "Not Found"} | Bilet 48`,
    description: "Blog Detay açıklama",
  };

  //   if (eventData?.data?.length > 0) {
  //     return {
  //       title:
  //         eventData?.data[0]?.attributes?.seo?.metaTitle + " | SkyFall Arena",
  //       description: eventData?.data[0]?.attributes?.seo?.metaDescription,
  //     };
  //   } else {
  //     return {
  //       title: "Not Found Data",
  //       description: "Not Found Data desc",
  //     };
  //   }
}

const Page = ({ params }) => {
  const slug = params.slug;
  const blog = blogs.find((item) => item?.slug == slug);

  const getNextBlog = (id) => {
    if (id == blogs[blogs?.length - 1]?.id) {
      return blogs[0];
    } else {
      return blogs.find((item) => item?.id == id + 1);
    }
  };

  const getPrevBlog = (id) => {
    if (id == 1) {
      return blogs[blogs.length - 1];
    } else {
      return blogs.find((item) => item?.id == id - 1);
    }
  };

  if (blog) {
    return (
      <>
        <div className="header-margin"></div>
        {/* header top margin */}

        <TopBreadCrumb submenu="Blog" title={blog.title} />

        <section className="layout-pt-md layout-pb-md">
          <div className="container">
            <div className="row y-gap-40 justify-center text-center">
              <div className="col-auto">
                <div className="text-15 fw-500 text-blue-1 mb-8 text-capitalize">
                  {blog?.tag}
                </div>
                <h1 className="text-30 fw-600">{blog?.title}</h1>
                <div className="text-15 text-light-1 mt-10">{blog?.date}</div>
              </div>
              <div className="col-12">
                <img
                  src={blog?.img}
                  alt={blog?.title}
                  className="col-12 rounded-8 w-100 img_large_details"
                />
              </div>
            </div>
            {/* End .row top bar image and title */}

            <div className="row y-gap-30 justify-center">
              <div className="col-xl-8 col-lg-10 layout-pt-md">
                <DetailsContent />
                {/* Details content */}

                <div className="border-bottom-light py-30">
                  <BlogNavigator
                    nextBlogData={getNextBlog(blog.id)}
                    prevBlogData={getPrevBlog(blog.id)}
                  />
                </div>
                {/* End BlogNavigator */}
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
        {/* Details Blog Details Content */}

        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title">Related content</h2>
                  <p className=" sectionTitle__text mt-5 sm:mt-0">
                    Interdum et malesuada fames
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row y-gap-30 pt-40">
              <RelatedBlog />
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
        {/* End Related Content */}

        <CallToActions />
        {/* End Call To Actions Section */}
      </>
    );
  } else {
    return (
      <>
        <div className="header-margin"></div>
        {/* header top margin */}

        <NotFound />
        {/* End 404 section */}
      </>
    );
  }
};

export default Page;
