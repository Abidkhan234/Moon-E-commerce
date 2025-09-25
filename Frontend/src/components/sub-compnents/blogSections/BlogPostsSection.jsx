import { categories, postData, tags } from "../../../constant/data";
import BlogPostCard from "../../ui/cards/BlogPostCard";
import SearchInput from "../../ui/forms/inputs/SearchInput";

const BlogPostsSection = () => {
  return (
    <section className="grid grid-cols-12 gap-5">
      <div className="md:col-span-8 col-span-12 md:order-1 order-2 grid lg:grid-cols-2 grid-cols-1 gap-5">
        {postData.map((v, i) => (
          <BlogPostCard
            key={i}
            postImage={v.postImage}
            title={v.title}
            description={v.description}
            postOwnerName={v.postOwnerName}
            postOwnerAvatar={v.postOwnerAvatar}
            postTime={v.postTime}
          />
        ))}
      </div>
      <div className="md:col-span-4 col-span-12 md:order-2 order-1">
        <BlogFilterPanel />
      </div>
    </section>
  );
};

const BlogFilterPanel = () => {
  return (
    <div className="flex flex-col gap-5 md:max-w-[400px] max-w-[100%]">
      <div className="flex items-center gap-2  ">
        <SearchInput />
      </div>
      <div>
        <h3 className="mb-4 text-2xl font-bold uppercase tracking-wider text-[#3A3845]">
          Categories
        </h3>
        <div className="flex md:flex-col flex-row gap-5 flex-wrap md:flex-nowrap">
          {categories.map((v, i) => (
            <button
              className="flex items-center gap-1 text-[#374151] cursor-pointer"
              key={i}
            >
              {v.text}
              <span>({v.totalPosts})</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-2xl font-bold uppercase tracking-wider text-[#3A3845]">
          Tags Post
        </h3>
        <div className="flex items-center gap-3.5 flex-wrap">
          {tags.map((v, i) => (
            <button
              className="p-2 cursor-pointer font-medium text-sm border border-[#3A3845] text-[#807F86] lg:grow-0 md:grow"
              key={i}
            >
              {v.tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostsSection;
