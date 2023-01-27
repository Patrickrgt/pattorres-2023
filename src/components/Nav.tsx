import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { projects } from "./Project";
import { useState } from "react";
import projectsIcon from "../assets/img/apps-add.png";
import resumeIcon from "../assets/img/edit.png";
import aboutIcon from "../assets/img/user.png";
import homeIcon from "../assets/img/home.png";

const tabs = [
  {
    name: "Home",
    project: false,
    link: "",
    icon: homeIcon,
  },
  {
    name: "About",
    project: false,
    link: "about",
    icon: aboutIcon,
  },
  {
    name: "Projects",
    project: true,
    link: "",
    icon: projectsIcon,
  },
  {
    name: "Resume",
    project: false,
    link: "resume",
    icon: resumeIcon,
  },
];

// const projects = [
//   {
//     name: "Home",
//   },
//   {
//     name: "About",
//   },
//   {
//     name: "Projects",
//   },
//   {
//     name: "Resume",
//   },
// ];

const Container = styled.nav`
  width: 100%;
  position: fixed;
  margin: 2rem 0 0 4rem;
  z-index: 3;
  @media (max-width: 768px) {
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    bottom: 0;
  }
`;

const NavContainer = styled.nav`
  width: fit-content;
  border: 1px solid #212121;
  padding: 0.5rem;
  @media (max-width: 768px) {
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
`;

const TabContainer = styled.ul`
  color: white;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    background: linear-gradient(to bottom, #313131, #131313);
    border-bottom: 1px groove #161616;
    padding: 1rem 0;
  }
`;

const TabsIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: auto;
  @media (min-width: 768px) {
    display: none;
  }
`;

const TabsText = styled.p`
  font-size: 1.75rem;
  color: white;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Tabs = styled.li`
  display: inline-block;
  background-color: #222222;
  padding: 0.5rem 1.25rem;
  cursor: pointer;
  &:hover {
    background-color: #424242;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    background: linear-gradient(#414141, #222222);
    border-radius: 15%;
  }
`;

const DropDown = styled.span`
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 0.25rem;
  transform: rotate(45deg);
  color: white;
  margin: 0 0 0.5rem 0.5rem;
`;

const ProjectListContainer = styled.div<NavProps>`
  visibility: ${(props: NavProps) => (props.active ? "visible" : "hidden")};
  background-color: #212121;
  position: absolute;
  width: fit-content;
  height: fit-content;
  margin-top: 0.5rem;
  @media (max-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -100%;
  }
`;

const ProjectList = styled.div`
  background-color: #212121;
  font-size: 1.75rem;
  padding: 0.5rem 3rem;
  color: white;
  position: relative;
  &:hover {
    background-color: #424242;
    border-radius: 5px;
  }
`;

interface NavProps {
  active?: boolean;
}

const Nav = () => {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <NavContainer>
        <TabContainer>
          {tabs.map((tab, id) => (
            <Link to={`/${tab.link}`}>
              <Tabs
                key={id}
                onMouseEnter={() => {
                  if (id == 2) {
                    setActive(true);
                  }
                }}
                onMouseLeave={() => {
                  if (id == 2) {
                    setActive(false);
                  }
                }}
              >
                <TabsText>
                  {tab.name}{" "}
                  {tab.project && (
                    <>
                      <DropDown />
                      <ProjectListContainer active={active}>
                        {projects.map((project) => (
                          <Link to={`/project/${project.link}`}>
                            <ProjectList>{project.title}</ProjectList>
                          </Link>
                        ))}
                      </ProjectListContainer>
                    </>
                  )}
                </TabsText>
                {tab.project && (
                  <>
                    <ProjectListContainer active={active}>
                      {projects.map((project) => (
                        <Link to={`/project/${project.link}`}>
                          <ProjectList>{project.title}</ProjectList>
                        </Link>
                      ))}
                    </ProjectListContainer>
                  </>
                )}
                <TabsIcon src={tab.icon} />
              </Tabs>
            </Link>
          ))}
        </TabContainer>
      </NavContainer>
    </Container>
  );
};

export default Nav;
