import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Index";
import HomeDapp from "./pages/dapp/home/Index";
import Dapp from "./pages/dapp/Index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dapp" element={<Dapp />}>
          <Route path="" element={<HomeDapp />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
