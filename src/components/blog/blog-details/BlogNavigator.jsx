const BlogNavigator = ({ nextBlogData, prevBlogData }) => {
  console.log("nextBlogData", nextBlogData);
  console.log("prevBlogData", prevBlogData);
  return (
    <div className="row y-gap-30 justify-between">
      <div className="col-12 col-md-5">
        <a href={prevBlogData.slug}>
          <div className="d-flex items-center">
            <div className="icon-arrow-left text-20 mr-20" />
            <div className="text-18 fw-500">Prev</div>
          </div>
          <div className="text-15 ml-40" style={{ wordBreak: "break-word" }}>
            {prevBlogData.title}
          </div>
        </a>
      </div>
      <div className="col-12 col-md-2 d-flex justify-center align-center">
        <img
          src="/img/general/menu.svg"
          alt="image"
          className="pt-20"
          width={50}
          height={50}
        />
      </div>
      <div className="col-12 col-md-5 text-right">
        <a href={nextBlogData.slug}>
          <div className="d-flex items-center justify-end">
            <div className="text-18 fw-500">Next</div>
            <div className="icon-arrow-right text-20 ml-20" />
          </div>
          <div className="text-15 mr-40" style={{ wordBreak: "break-word" }}>
            {nextBlogData.title}
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlogNavigator;
