import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Index";
import HomeDapp from "./pages/dapp/home/Index";
import Dapp from "./pages/dapp/Index";
import Swap from "./pages/dapp/exchange/Swap";
import Liquidity from "./pages/dapp/exchange/Liquidity";
import Farm from "./pages/dapp/farm/Index";
import Launch from "./pages/dapp/launch/Index";
import DripStore from "./pages/dapp/store/Index";
import Nft from "./pages/dapp/store/Nft";
import Wallet from "./pages/dapp/store/Wallet";
import DripRef from "./pages/dapp/ref/Index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dapp" element={<Dapp />}>
          <Route path="" index element={<HomeDapp />} />
          <Route path="farm" index element={<Farm />} />
          <Route path="launch" index element={<Launch />} />
          <Route path="ref" index element={<DripRef />} />
          <Route path="exchange">
            <Route path="swap" element={<Swap />} />
            <Route path="liquidity" element={<Liquidity />} />
          </Route>
          <Route path="store" element={<DripStore />}>
            <Route path="nft" element={<Nft />} />
            <Route path="wallet" element={<Wallet />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
