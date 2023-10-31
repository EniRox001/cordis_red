import HomePage from "./pages/homepage";
import HomePageFour from "./pages/homepage_four";
import HomePageThree from "./pages/homepage_three";
import HomepageTwo from "./pages/homepage_two";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage_two" element={<HomepageTwo />} />
        <Route path="/homepage_three" element={<HomePageThree />} />
        <Route path="/homepage_four" element={<HomePageFour />} />
      </Routes>
    </>
  );
}

export default App;
