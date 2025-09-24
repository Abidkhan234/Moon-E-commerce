import SearchInput from "../../forms/inputs/SearchInput";

const tags = [
  {
    tag: "Ceramic",
  },
  {
    tag: "Kitchen",
  },
  {
    tag: "Gifts sets",
  },
  {
    tag: "Flower vase",
  },
  {
    tag: "Plate",
  },
  {
    tag: "Kitchen",
  },
];

const categories = [
  {
    text: "Dinnerware",
    totalPosts: 3,
  },
  {
    text: "Ceramic",
    totalPosts: 3,
  },
  {
    text: "Furniture",
    totalPosts: 3,
  },
  {
    text: "Decor Art",
    totalPosts: 3,
  },
];

const BlogPostsSection = () => {
  return (
    <section className="grid grid-cols-12 gap-5">
      <div className="col-span-8 border border-red-600"></div>
      <div className="col-span-4 border border-red-600">
        <BlogFilterPanel />
      </div>
    </section>
  );
};

const BlogFilterPanel = () => {
  return (
    <div className="flex flex-col gap-5 max-w-[400px]">
      <div className="flex items-center gap-2  ">
        <SearchInput />
      </div>
      <div>
        <h3 className="mb-4 text-2xl font-bold uppercase tracking-wider text-[#3A3845]">
          Categories
        </h3>
        <div className="flex flex-col gap-5">
          {categories.map((v, i) => (
            <button className="flex items-center gap-1 text-[#374151] cursor-pointer" key={i}>
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
              className="p-2 cursor-pointer font-medium text-sm border border-[#3A3845] text-[#807F86]"
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
