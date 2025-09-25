import { useState } from "react";

const BlogPostCard = ({
  description,
  title,
  postOwnerAvatar,
  postImage,
  postTime,
  postOwnerName,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="xl:h-[350px] lg:h-[250px] w-full">
        <img src={postImage} className="h-full w-full object-cover" alt="" />
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-[#E5E5E5] sm:size-[35px] size-[30px] rounded-full flex items-center justify-center shrink-0">
          <img src={postOwnerAvatar} className="size-[17px]" alt="" />
        </div>
        <div className="flex items-center lg:gap-3 gap-2 sm:text-base text-sm">
          <span>{postOwnerName}</span>
          <span className="h-[2px] lg:w-[23px] w-[20px] bg-[#CAC9CF] inline-block"></span>
          <span>{postTime}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold xl:text-2xl lg:text-xl text-lg text-[#3A3845]">{title}</h2>
        <>
          <Description description={description} />
        </>
      </div>
    </div>
  );
};

const Description = ({ description }) => {
  const [expanded, setExpanded] = useState(false);
  const words = description.split(" ").filter((v) => v);
  const isLong = words.length > 18;

  const displayedText = expanded ? description : words.slice(0, 18).join(" ");

  return (
    <p className="text-[#595667] lg:text-sm text-[13px]">
      {displayedText}
      {isLong && (
        <button
          className="ml-1 underline text-[#3A3845] cursor-pointer"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </p>
  );
};

export default BlogPostCard;
