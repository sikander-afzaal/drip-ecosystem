import { useState } from "react";

const FilterBar = () => {
  const [live, setLive] = useState(true);
  return (
    <div className="w-full xl:flex-row flex-col md:flex-row lg:flex-col gap-5 xl:gap-0 flex justify-between md:items-center items-start">
      <div className="flex justify-between w-full md:w-auto md:justify-start items-center gap-3">
        <div className="flex justify-start items-center gap-3">
          <input
            type="checkbox"
            id="stake"
            className="w-3 h-3 accent-primaryDark"
          />
          <label htmlFor="stake" className="text-lightGray">
            Staked only
          </label>
        </div>
        <div className="flex h-[40px] relative isolate bg-[#E1E8EF] justify-center items-center rounded-full overflow-hidden">
          <div
            className={`bg-primaryDark absolute px-4 h-full -z-10 rounded-full ${
              live ? "translate-x-0" : "translate-x-[64px] "
            }  top-0 left-0 transition-all duration-300 transform-gpu`}
          >
            <p className="opacity-0">{live ? "Live" : "Finished"}</p>
          </div>
          <button
            onClick={() => setLive(true)}
            className={`px-4 focus:outline-none focus-visible:outline-none font-bold text-base ${
              live ? "text-white" : "text-lightGray"
            }`}
          >
            Live
          </button>
          <button
            onClick={() => setLive(false)}
            className={`px-4 focus:outline-none focus-visible:outline-none font-bold text-base ${
              live ? "text-lightGray" : "text-white"
            }`}
          >
            Finished
          </button>
        </div>
      </div>
      <div className="flex justify-start md:w-auto w-full items-center gap-3">
        <select className="border border-solid border-[#9FD6F3] text-lightGray text-base rounded-full px-4 w-full md:w-[155px] outline-none bg-primary py-2 bg-transparent ">
          <option className="text-black" value="Sort by">
            Sort by
          </option>
        </select>
        <input
          placeholder="Search farm"
          type="text"
          className="border border-solid placeholder:text-lightGray border-[#9FD6F3] text-lightGray text-base rounded-full px-4 w-full md:w-[200px] outline-none bg-primary py-2 bg-transparent "
        />
      </div>
    </div>
  );
};

export default FilterBar;
