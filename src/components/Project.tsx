import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import reactIcon from "../assets/img/react.svg";
import angularIcon from "../assets/img/angular.svg";

import salvex from "../assets/img/salvex.png";
import wellness from "../assets/img/wellness.png";
import pso2 from "../assets/img/pso2.png";
import shvrkboy from "../assets/img/shvrkboy.png";
import psyche from "../assets/img/psyche.png";
import aiko from "../assets/img/aiko.png";
import lunar from "../assets/img/lunarcapital.png";
import gc from "../assets/img/gc.png";
import starStore from "../assets/img/starStore.png";
import hex from "../assets/img/hexDisplay.png";
import montreality from "../assets/img/montrealityDisplay.png";
import dangycam from "../assets/img/dangycamDisplay.png";


import alpha from "../assets/img/alpha.svg";

import {
  setGlobalColor,
  setGlobalColor2,
  setGlobalColor3,
} from "../state/uiSlice";

export const projects = [
  {
    title: "Dangycam",
    link: "dangycam",
    subtitle: "Ecommerce",
    image: dangycam,
    tech: "Hydrogen, Remix, GraphQL, Typescript, Tailwind",
    techIcon: reactIcon,
    primary: "#EE404F",
    colors: ["#C3E74E", "#EE404F", "#6375CF"],
  },
  {
    title: "Montreality",
    link: "montreality",
    subtitle: "Ecommerce",
    image: montreality,
    tech: "Hydrogen, Remix, GraphQL, Typescript, Tailwind",
    techIcon: reactIcon,
    primary: "#F24D70",
    colors: ["#FFF9D5", "#FFBEB5", "#F24D70"],
  },
  {
    title: "Hex Termina",
    link: "hex",
    subtitle: "Ecommerce",
    image: hex,
    tech: "Hydrogen, Remix, GraphQL, Typescript, Tailwind",
    techIcon: reactIcon,
    primary: "#5577F8",
    colors: ["#F2F8FF", "#5577F8", "#94B1FE"],
  },
  {
    title: "Star Odyssey Store",
    link: "star",
    subtitle: "Ecommerce",
    image: starStore,
    tech: "Hydrogen, Remix, GraphQL, Typescript, Tailwind",
    techIcon: reactIcon,
    primary: "#1e77f4",
    colors: ["#fdfdfd", "#1e77f4", "#92e6fe"],
  },
  {
    title: "GC Investments",
    link: "gc",
    subtitle: "Capital Firm",
    image: gc,
    tech: "Next, Typescript, Tailwind, Firebase",
    techIcon: reactIcon,
    primary: "#000000",
    colors: ["#343131", "#ffffff", "#000000"],
  },
  {
    title: "Lunar Capital",
    link: "lunar",
    subtitle: "Capital Firm",
    image: lunar,
    tech: "Next, Typescript, Tailwind, Firebase",
    techIcon: reactIcon,
    primary: "#343131",
    colors: ["#100E0E", "#343131", "#D9D9D9"],
  },
  {
    title: "Aiko Virtual",
    link: "aiko",
    subtitle: "NFT Project",
    image: aiko,
    tech: "React, Typescript, Styled-Components, Discord.js, useDApp, Ethers, SQLite",
    techIcon: reactIcon,
    primary: "#4492FF",
    colors: ["#ef758d", "#4492FF", "#FFBE1C"],
  },
  {
    title: "Salvex",
    link: "salvex",
    subtitle: "NYIT Capstone Project",
    image: salvex,
    tech: "React, Express, Puppeteer, Firebase, Firestore",
    techIcon: reactIcon,
    primary: "#4A40EB",
    colors: ["#ffffff", "#4A40EB", "#312632"],
  },
  {
    title: "Wellness",
    link: "wellness",
    subtitle: "NYIT M.S. Project",
    image: wellness,
    tech: "Angular, Typescript.js, SpoonacularAPI",
    techIcon: angularIcon,
    primary: "#FF9100",
    colors: ["#e6142d", "#ff9100", "#5f1209"],
  },
  {
    title: "PSO2 Ticket Database",
    link: "pso2db",
    subtitle: "NYIT B.S. Project",
    image: pso2,
    tech: "React, Python, Puppeteer, Firebase, Firestore",
    techIcon: reactIcon,
    primary: "#467DD2",
    colors: ["#382E2B", "#467DD2", "#FFFFFF"],
  },
  {
    title: "Shvrkboy Sneakers",
    link: "shvrkboy",
    subtitle: "Freelance LLC",
    image: shvrkboy,
    tech: "React, Puppeteer, TwitterAPI",
    techIcon: reactIcon,
    primary: "#2a8ae3",
    colors: ["#ffffff", "#2a8ae3", "#51c328"],
  },
  {
    title: "PSYCHE OF PAT",
    link: "psycheofpat",
    subtitle: "Hobby Website",
    image: psyche,
    tech: "React",
    techIcon: reactIcon,
    primary: "#bfa8df",
    colors: ["#240351", "#bfa8df", "#FAC80E"],
  },
];

const gradient = keyframes`
    0%{background-position:10% 0%}
    50%{background-position:91% 100%}
    100%{background-position:10% 0%}
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const BackgroundContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
  height: 90%;
  filter: drop-shadow(0 0 4rem #00000075);
  background: ${(props: ColorProps) =>
    `linear-gradient(125deg, ${props.grad1}, ${props.grad2}, ${props.grad3})`};
  background-size: 200% 200%;
  animation: ${gradient} 5s ease infinite;
  border-radius: 5px;
  opacity: ${(props: ColorProps) => (props.active ? "0.5" : "1")};
  transition: opacity ease-in-out 0.25s;
  @media (max-width: 768px) {
    width: 100%;
    height: 60%;
  }
`;

const ProjectContainer = styled.div<ColorProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all ease-in-out 0.3s;
  border: 1px solid #2f2f2f;
  border-radius: 5px;
  width: 46.66%;
  &:hover {
    filter: ${(props) => `drop-shadow(0 0 4rem ${props.color})`};
  }
  @media (max-width: 768px) {
    filter: drop-shadow(0 0 2px #000000);
    width: 88.88%;
  }
  @media (min-width: 768px) {
    filter: drop-shadow(0 0 1rem #000000);
    &:hover {
      top: 49.5%;
    }
  }
`;

// const ProjectContainer = styled.div<ColorProps>`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   transition: all ease-in-out 0.3s;
//   border: 1px solid #2f2f2f;
//   border-radius: 5px;
//   filter: drop-shadow(0 0 6rem #000000);
//   width: 46.66%;
//   &:hover {
//     filter: ${(props) => ` drop-shadow(0 0 4rem ${props.color})`};
//   }
//   @media (max-width: 768px) {
//     width: 88.88%;
//   }
//   @media (min-width: 768px) {
//     &:hover {
//       top: 49.5%;
//     }
//   }
// `;

const ProjectTitleContainer = styled.div`
  color: white;
  background-color: #2f2f2f;
  display: flex;
  border-radius: 5px 5px 0 0;
  box-sizing: border-box;
  outline: 1px solid #2f2f2f;
  box-shadow: inset 0 0.5px 0.5px rgba(255, 255, 255, 1);
  align-items: center;
  padding-left: 0.75rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const ProjectTitle = styled.p`
  color: white;
  font-size: 1.75rem;
  display: inline;
  padding: 0.75rem 0.5rem;
`;

const ProjectSubtitle = styled.span`
  color: #707070;
  font-size: 1.75rem;
  display: inline;
`;

const ColorContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 768px) {
    padding: 0.75rem 0 0 0.5rem;
    position: static;
  }
`;

const Color = styled.div<ColorProps>`
  border-radius: 50%;
  background-color: ${(props) => `${props.color}`};
  width: 20px;
  height: 20px;
  margin: 0.25rem;
`;

const SquareContainer = styled.div`
  position: absolute;
  display: flex;
  right: 0px;
  bottom: 25px;
  margin-right: -25px;
  z-index: -1;
  @media (max-width: 768px) {
    top: 80px;
    right: 15px;
  }
`;

const Square = styled.div<ColorProps>`
  background-color: ${(props) => `${props.color}`};
  width: 50px;
  height: 50px;
  margin: 0.25rem;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const ProjectImgContainer = styled.div`
  position: relative;
  padding-top: 75%;
  display: flex;
  justify-content: center;

  &:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${alpha});
    z-index: -1;
    opacity: 0.6;
    &:hover {
      opacity: 0.1;
    }
  }
`;

const ProjectImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  object-fit: contain;
`;

const ProjectFooterContainer = styled.div`
  color: white;
  background: linear-gradient(to bottom, #313131, #131313);
  padding: 1.25rem 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 0 0 5px 5px;
  box-shadow: inset 0 0.25px rgba(255, 255, 255, 1);
  padding-left: 0.75rem;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const ProjectFooterSub = styled.p`
  color: #707070;
  font-size: 1.75rem;
  display: inline;
  @media (max-width: 768px) {
    font-size: 1.65rem;
  }
`;

const Icon = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    margin-right: 1rem;
    position: static;
  }
`;

interface ColorProps {
  color?: string;
  image?: string;
  active?: boolean;
  grad1?: string;
  grad2?: string;
  grad3?: string;
}

const Project = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {projects.map((project) => (
        <Container key={project.title}>
          <BackgroundContainer
            grad1={project.colors[0]}
            grad2={project.colors[1]}
            grad3={project.colors[2]}
            color={project.primary}
            image={project.image}
            active={active}
          />
          <Link to={`/project/${project.link}`}>
            <ProjectContainer
              color={project.primary}
              onClick={async () => {
                dispatch(await setGlobalColor(project.colors[0]));
                dispatch(await setGlobalColor2(project.colors[1]));
                dispatch(await setGlobalColor3(project.colors[2]));
              }}
              onMouseEnter={async () => {
                dispatch(await setGlobalColor(project.colors[0]));
                dispatch(await setGlobalColor2(project.colors[1]));
                dispatch(await setGlobalColor3(project.colors[2]));
                setActive(true);
              }}
              onMouseLeave={async () => {
                dispatch(await setGlobalColor("#000000"));
                dispatch(await setGlobalColor2("#191818"));
                dispatch(await setGlobalColor3("#2a2727"));
                setActive(false);
              }}
            >
              <ProjectTitleContainer>
                <ColorContainer>
                  {project.colors.map((color, id) => (
                    <Color key={id} color={color} />
                  ))}
                </ColorContainer>
                <TextContainer>
                  <ProjectTitle>
                    📁{project.title}{" "}
                    <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                  </ProjectTitle>
                </TextContainer>
              </ProjectTitleContainer>
              <ProjectImgContainer>
                <ProjectImg src={project.image} />
              </ProjectImgContainer>
              <SquareContainer>
                {project.colors.map((color, id) => (
                  <Square key={id} color={color} />
                ))}
              </SquareContainer>
              <ProjectFooterContainer>
                <Icon src={project.techIcon} />
                <FooterContainer>
                  <ProjectFooterSub>{project.tech}</ProjectFooterSub>
                </FooterContainer>
              </ProjectFooterContainer>
            </ProjectContainer>
          </Link>
        </Container>
      ))}
    </>
  );
};

export default Project;
