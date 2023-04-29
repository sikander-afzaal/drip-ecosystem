const NftBox = ({ earn }) => {
  return (
    <div className="w-full gap-5 max-w-[324px] flex justify-start items-start flex-col bg-white rounded-[20px] bg-opacity-50 backdrop-blur-[28px] py-4 px-8">
      <p className="text-neutral text-lg font-bold">NFT #1</p>
      <img src="/nft-image.png" className="w-full object-cover" alt="" />
      <div className="flex justify-start items-start flex-col gap-2 w-full">
        <p className="flex justify-between items-center gap-2 w-full text-neutral">
          Current Price <strong>0.03 ETH</strong>
        </p>
        <p className="flex justify-between items-center gap-2 w-full text-neutral">
          Token Standard <strong>DRIP-1144</strong>
        </p>
        <p className="flex justify-between items-center gap-2 w-full text-neutral">
          Chain <strong>Sui</strong>
        </p>
      </div>
      <button className="cta-btn w-full">{earn ? "Earn" : "Buy Now"}</button>
    </div>
  );
};

export default NftBox;
