const Banner = ({ title, img, desc }) => {
  return (
    <div className="wrapper bg-[#9FD6F380] backdrop-blur-[28px] px-5 rounded-3xl sm:rounded-[40px]">
      <div className="flex justify-start sm:flex-row flex-col-reverse py-5 sm:p-0 sm:h-[120px] xl:h-[150px] max-w-[1020px] items-start gap-4  sm:items-center w-full relative">
        <div>
          <h3 className="text-button text-3xl mb-2 xl:text-[42px] font-bold">
            {title}
          </h3>
          <p className="text-base sm:text-lg xl:text-2xl font-bold text-white">
            {desc}
          </p>
        </div>
        <img
          src={img}
          alt=""
          className="sm:absolute w-[140px] self-center xl:w-[175px] object-contain right-0 bottom-0"
        />
      </div>
    </div>
  );
};

export default Banner;
