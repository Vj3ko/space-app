import "./App.scss";

//import components
import CrewLayout from "./components/CrewLayout";
import DestinationLayout from "./components/DestinationLayout";
import HomeLayout from "./components/HomeLayout";
import Navbar from "./components/Navbar";
import TechnologyLayout from "./components/TechnologyLayout";

//import animation
import { AnimatePresence } from "framer-motion";

//import routing
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  if (location.pathname === "/destination") {
    document.body.className = "destination bg-style";
  } else if (location.pathname === "/crew") {
    document.body.className = "crew bg-style";
  } else if (location.pathname === "/technology") {
    document.body.className = "technology bg-style";
  } else {
    document.body.className = "home bg-style";
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <AnimatePresence mode='wait' initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<HomeLayout />} />
          <Route path='/destination/*' element={<DestinationLayout />} />
          <Route path='/crew' element={<CrewLayout />} />
          <Route path='/technology' element={<TechnologyLayout />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
