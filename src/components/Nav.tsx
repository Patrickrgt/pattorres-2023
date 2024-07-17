import styled from "styled-components";
import { Link } from "react-router-dom";
import { projects } from "./Project";
import { useState } from "react";
import { useDispatch } from "react-redux";
import projectsIcon from "../assets/img/apps-add.png";
import resumeIcon from "../assets/img/edit.png";
import aboutIcon from "../assets/img/user.png";
import homeIcon from "../assets/img/home.png";

import {
  setGlobalColor,
  setGlobalColor2,
  setGlobalColor3,
} from "../state/uiSlice";

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
    border: none;
    justify-content: space-evenly;
    width: 100%;
  }
`;

const TabContainer = styled.ul`
  color: white;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    width: 95%;
    border-radius: 25px;
    background-color: rgba(23, 21, 21, 0.613);
    padding: 2rem 0;
    margin-bottom: 12px;
  }
`;

const TabsIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: auto;
  filter: drop-shadow(0 0 0.15rem black);
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
  padding: 1rem 1rem;
  cursor: pointer;
  @media (min-width: 768px) {
    &:hover {
      background-color: #424242;
      border-radius: 5px;
    }
  }
  @media (max-width: 768px) {
    background: linear-gradient(to bottom, #77797b, #0f1012, #282b2f);
    box-shadow: 0 0.5px 0 0.5px rgba(14, 12, 12, 0.5);
    border-top: 1px solid rgba(237, 232, 232, 0.5);
    border-radius: 15%;
    position: relative;
    z-index: 0;
    overflow: hidden;

    &:after {
      content: "";
      mix-blend-mode: color-dodge;
      position: absolute;
      top: 0;
      bottom: 0;
      display: none;
      width: 75px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      background-color: #ffffff;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.1;
    }
  }
`;

const LinkContainer = styled.div`
  display: inline;
  @media (max-width: 768px) {
    display: static;
    overflow: hidden;
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
  margin-top: 1rem;
  @media (max-width: 768px) {
    top: 0;
  }
`;

const ProjectListContainerMobile = styled.div`
  visibility: ${(props: NavProps) => (props.active ? "visible" : "hidden")};
  background-color: #212121;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(-10%, -54%);
  width: fit-content;
  height: fit-content;
  z-index: 3;
  @media (min-width: 768px) {
    visibility: hidden;
  }
`;

const ProjectList = styled.div`
  background-color: #212121;
  font-size: 1.75rem;
  padding: 0.5rem 3rem;
  color: white;
  position: relative;
  @media (min-width: 768px) {
    &:hover {
      background-color: #424242;
      border-radius: 5px;
    }
  }
`;

interface NavProps {
  active?: boolean;
}

const Nav = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  return (
    <Container>
      <NavContainer>
        <TabContainer>
          {tabs.map((tab, id) => (
            <>
              {tab.project && (
                <ProjectListContainerMobile active={active}>
                  {projects.map((project) => (
                    <Link
                      to={`/project/${project.link}`}
                      onClick={() => {
                        setActive(false);
                      }}
                    >
                      <ProjectList>{project.title}</ProjectList>
                    </Link>
                  ))}
                </ProjectListContainerMobile>
              )}
              <LinkContainer>
                <Link to={`/${tab.link}`}>
                  <Tabs
                    key={id}
                    onMouseEnter={() => {
                      if (id === 2) {
                        setActive(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (id === 2 && window.innerWidth > 768) {
                        setActive(false);
                      }
                    }}
                    onClick={() => {
                      if (id === 2) {
                        console.log(window.innerWidth);
                        setActive(!active);
                      } else if (id === 0 || 1) {
                        dispatch(setGlobalColor("#000000"));
                        dispatch(setGlobalColor2("#191818"));
                        dispatch(setGlobalColor3("#2a2727"));
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
                                <ProjectList
                                  onClick={() => {
                                    dispatch(setGlobalColor(project.colors[0]));
                                    dispatch(
                                      setGlobalColor2(project.colors[1])
                                    );
                                    dispatch(
                                      setGlobalColor3(project.colors[2])
                                    );
                                  }}
                                >
                                  {project.title}
                                </ProjectList>
                              </Link>
                            ))}
                          </ProjectListContainer>
                        </>
                      )}
                    </TabsText>

                    <TabsIcon src={tab.icon} />
                  </Tabs>
                </Link>
              </LinkContainer>
            </>
          ))}
        </TabContainer>
      </NavContainer>
    </Container>
  );
};

export default Nav;
