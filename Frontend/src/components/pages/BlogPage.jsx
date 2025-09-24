import HeroSection from "../sub-compnents/blogSections/HeroSection";
import BlogPostsSection from "../sub-compnents/blogSections/BlogPostsSection";

const BlogPage = () => {
  return (
    <main className="flex flex-col gap-7">
      <>
        <HeroSection />
      </>
      <div className="lg:px-20 md:px-10 px-6 ">
        <>
          <BlogPostsSection />
        </>
      </div>
    </main>
  );
};

export default BlogPage;
