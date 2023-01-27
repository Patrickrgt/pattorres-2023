import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import Animation from "./components/animation/Animation";
import Nav from "./components/Nav";
import Experience from "./components/Experience";
import Project from "./components/Project";
import waveImg from "./assets/img/waveImg.svg";

import {
  selectGlobalColor,
  selectGlobalColor2,
  selectGlobalColor3,
} from "./state/uiSlice";

const gradient = keyframes`
    0%{background-position:10% 0%}
    50%{background-position:91% 100%}
    100%{background-position:10% 0%}
`;

const wave = keyframes`
 0% {
    transform: translateX(0) translateZ(0) scaleY(1)
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(2)
  }
  100% {
    transform: translateX(-45%) translateZ(0) scaleY(1)
  }
`;

const swell = keyframes`
  0% {
    transform: translate3d(0,25px,0)  scaleY(1);
  }
  50% {
    transform: translate3d(0,0px,0)  scaleY(2);
  }
  100% {
    transform: translate3d(0,25px,0)  scaleY(1);
  }
`;

const StyledHomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow: hidden;
  transition: all ease-in-out 1s;
  position: relative;
  background-image: ${(props: ColorProps) =>
    `linear-gradient(-45deg, ${props.color}, ${props.color2}, ${props.color3});`};
  background-size: 200% 200%;
  animation: ${gradient} 10s ease infinite;
  &:before {
    content: "";
    transition: opacity 0.25s ease-out;
    background-image: ${(props: ColorProps) =>
      `linear-gradient(-45deg, ${props.color}, ${props.color2}, ${props.color3});`};
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: ${(props: ColorProps) => (props.active ? "1" : "0")};
    z-index: 0;
  }
`;

const Wave = styled.div`
  background: url(${waveImg}) repeat-x;
  opacity: 0.35;
  position: fixed;
  bottom: 0;
  width: 1000%;
  height: 198px;
  animation: ${wave} 120s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  overflow: hidden;
`;

const Wave2 = styled.div`
  background: url(${waveImg}) repeat-x;
  width: 500%;
  height: 198px;
  transform: translate3d(0, 0, 0);
  bottom: 0;
  position: fixed;
  animation: ${wave} 120s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
    ${swell} 10s ease -1.25s infinite;
  opacity: 0.25;
  overflow: hidden;
`;

interface ColorProps {
  color: string;
  color2: string;
  color3: string;
  active: boolean;
}

const HomePage = () => {
  const activeColor = useSelector(selectGlobalColor);
  const activeColor2 = useSelector(selectGlobalColor2);
  const activeColor3 = useSelector(selectGlobalColor3);

  return (
    <StyledHomePage
      active={activeColor !== "#000000"}
      color={activeColor}
      color2={activeColor2}
      color3={activeColor3}
    >
      <Wave />
      <Wave2 />
      <Nav />
      <Animation />
      <Experience />
      <Project />
    </StyledHomePage>
  );
};

export default HomePage;
