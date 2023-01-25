import { Suspense } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Animation from "./components/animation/Animation";
import Nav from "./components/Nav";
import Experience from "./components/Experience";
import ProjectDetails from "./components/ProjectDetails";
import Project from "./components/Project";
import ScrollToTop from "./ScrollToTop";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  flex-shrink: 0;
  background-color: black;
`;

function App() {
  return (
    <Suspense>
      <StyledApp>
        <Outlet />
        <ScrollToTop />
      </StyledApp>
    </Suspense>
  );
}

export default App;
