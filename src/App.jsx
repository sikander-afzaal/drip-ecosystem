import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Index";
import HomeDapp from "./pages/dapp/home/Index";
import Dapp from "./pages/dapp/Index";
import Swap from "./pages/dapp/exchange/Swap";
import Liquidity from "./pages/dapp/exchange/Liquidity";
import Farm from "./pages/dapp/farm/Index";
import Launch from "./pages/dapp/launch/Index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dapp" element={<Dapp />}>
          <Route path="" index element={<HomeDapp />} />
          <Route path="farm" index element={<Farm />} />
          <Route path="launch" index element={<Launch />} />
          <Route path="exchange">
            <Route path="swap" element={<Swap />} />
            <Route path="liquidity" element={<Liquidity />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
