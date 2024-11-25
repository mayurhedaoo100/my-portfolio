import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Home from "./pages/Home"; // Import the Home component
import Project1 from "./pages/Project1"; // Import your individual project pages
import Project2 from "./pages/Project2"; // Import Project2 page

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Set Home as the initial page */}
        <Route path="/project1" element={<Project1 />} /> {/* Project1 page */}
        <Route path="/project2" element={<Project2 />} /> {/* Project2 page */}
      </Routes>
    </div>
  );
};

export default App;