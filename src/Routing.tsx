import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="project/:project" element={<ProjectPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="resume" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
