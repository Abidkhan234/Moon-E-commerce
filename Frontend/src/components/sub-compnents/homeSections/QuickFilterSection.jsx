import { quickFilterSecCardData } from "../../../constant/data";

const QuickFilterSection = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-7 gap-5">
      {quickFilterSecCardData.map((v, i) => (
        <div className="flex flex-col text-center gap-4 items-center" key={i}>
          <div className="w-full sm:h-[350px] h-[300px]">
            <img
              src={v.image}
              className="w-full h-full object-cover object-center"
              alt=""
            />
          </div>
          <h4 className="font-semibold text-2xl uppercase tracking-wider">
            {v.title}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default QuickFilterSection;
