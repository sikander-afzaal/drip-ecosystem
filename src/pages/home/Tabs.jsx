const Tabs = () => {
  return (
    <div className="w-full overflow-x-auto pb-4 sm:px-0 px-6">
      <div className="flex  justify-center min-w-max items-center gap-2">
        <button className="px-6 py-[10px] bg-button text-white rounded-full shadow-blueShadow text-base font-bold">
          Swap
        </button>
        <button className="px-6 py-[10px] bg-transparent text-neutral rounded-full shadow-none text-base font-bold">
          Liquidity
        </button>
        <a
          href="#"
          target="blank"
          className="flex justify-center items-center gap-2 px-6 py-[10px] bg-transparent text-neutral rounded-full shadow-none text-base font-bold"
        >
          Perpetual{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
        <a
          href="#"
          target="blank"
          className="flex justify-center items-center gap-2 px-6 py-[10px] bg-transparent text-neutral rounded-full shadow-none text-base font-bold"
        >
          Bridge{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
        <button className="px-6 py-[10px] bg-transparent text-neutral rounded-full shadow-none text-base font-bold">
          Limit (v2)
        </button>
      </div>
    </div>
  );
};

export default Tabs;
