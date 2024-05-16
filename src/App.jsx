// Import npm packages
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Import pages
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFound from "./pages/NotFound";
import Tpage from "./pages/Home2.0"
import { Navbar } from "react-bootstrap";
import Home2 from "./pages/Home2.0";


function App() {
  return (
    <div className="App">
      <Routes>
        {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
        <Route path="/" element={<Layout />}>
          {/* MAIN PAGES */}
          <Route index element={<Home2 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          
          {/* ERROR 404 PAGE */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
