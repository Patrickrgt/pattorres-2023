import styled, { css, keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ReactNode, useEffect, useState, useRef } from "react";
import {
  selectTop,
  selectLeft,
  selectPfpTop,
  selectPfpLeft,
  setTop,
  setLeft,
  setPfpTop,
  setPfpLeft,
} from "../../state/uiSlice";
import doodle from "../../assets/img/doodle.jpg";
import linkedin from "../../assets/img/linkedin-bg.jpg";
import nyit from "../../assets/img/nyit-icon.jpg";

interface AnimationProps {
  top: number;
  left: number;
  originTop: number;
  originLeft: number;
}

interface PfpAnimationProps {
  pfpTop: number;
  pfpLeft: number;
  originPfpTop: number;
  originPfpLeft: number;
}

const runAnimation1 = keyframes`
   0% {opacity: 1; transition: all ease;}
   6% {opacity: 1; background-color: #6d6d6d; transition: all ease;}
   90% {opacity: 1; background-color: #000000 transition: all ease;}
   100% {opacity: 0; background-color: #000000;   border: 2px solid #a8aaab; transition: all ease;
}
`;

const slideAnimation1 = keyframes`
   0% { opacity: 1;}
   80% {transform: translate(0, 0); opacity: 1;}
   100% {transform: translate(0, -250px); opacity: 0;}
`;

const slideAnimation2 = keyframes`
   0% { opacity: 1;}
   82% {transform: translate(0, 0); opacity: 1;}
   100% {transform: translate(-250px, 0); opacity: 0;}
`;

const slideAnimation3 = keyframes`
   0% { opacity: 1;}
   84% {transform: translate(0, 0); opacity: 1;}
   100% {transform: translate(-250px, 0); opacity: 0;}
`;

const slideAnimation4 = keyframes`
   0% { opacity: 1;}
   86% {transform: translate(0, 0); opacity: 1;}
   100% {transform: translate(250px, 0); opacity: 0;}
`;

const backgroundAnimation1 = keyframes`
  0% {opacity: 1; background-color: #1d2226;}
   60% {opacity: 1; background-color: #1d2226;}
   80% {opacity: 1;  background-color: #000000;}
   100% {opacity: 1;  background-color: #000000;}
`;

const moveAnimation1 = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  fontSize1: number,
  fontSize2: number
) => keyframes`
   0% {left:${x1}px; top: ${y1}px; font-size: ${fontSize1}rem; font-weight: bold; border-radius: 48px; content: "Connect"; color: #1d2226; transition: all ease;
}
80% {left:${x1}px; top: ${y1}px; font-size: ${fontSize1}rem; font-weight: bold; border-radius: 48px; content: "Connect"; color: #1d2226; transition: all ease;}

   100% {left:${x2}px; top: ${y2}px; font-size: ${fontSize2}rem; border-radius: content: "Hi, I'm Patrick" 96px; padding: 1rem 2rem; font-weight: 400; color: white;  transition: all ease;}
`;

const moveAnimation2 = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  pfpSize1: number,
  pfpSize2: number
) => keyframes`
   0% {left:${x1}px; top: ${y1}px; transition: all ease; }
   80% {left:${x1}px; top: ${y1}px; transition: all ease; }
   100% {left:${x2}px; top: ${y2}px; transition: all ease;}
`;

const AnimationContainer = styled.div`
  position: absolute;
  border: 2px solid #000000;
  background-image: url(${linkedin});
  background-repeat: no-repeat;
  background-color: #6d6d6d;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 2.5rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  flex-direction: row-reverse;
  opacity: 0;
  animation: ${runAnimation1} var(--animation-length) ease-in-out 1;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkedInPanel = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 0 0 2.5rem 2.5rem;
  animation: ${backgroundAnimation1} 6.5s ease-in-out 1;
  opacity: 0;
`;

const ProfilePic = styled.div`
  margin-top: -80%;
  margin-left: 5%;
  background-color: #ffffff;
  width: 360px;
  height: 360px;
  border-radius: 100%;
  border: 5px solid #1d2226;
  opacity: 0;
  width: var(--pfp-medium);
  height: var(--pfp-medium);
  @media (min-width: 1366px) {
    width: var(--pfp-medium);
    height: var(--pfp-medium);
    background-size: var(--pfp-medium);
    margin-top: -63.33%;
  }
  @media (min-width: 1920px) {
    width: var(--pfp-large);
    height: var(--pfp-large);
    background-size: var(--pfp-large);
    margin-top: -67.77%;
  }
`;

const ProfilePicOverlay = styled.div<PfpAnimationProps>`
  width: var(--pfp-large);
  height: var(--pfp-large);
  background-size: var(--pfp-medium);
  background-image: url(${doodle});
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #ffffff;
  border: 5px solid #1d2226;
  border-radius: 100%;
  position: absolute;
  top: ${(props) => `${props.pfpTop}px`};
  left: ${(props) => `${props.pfpLeft}px`};
  animation: ${(props) =>
      moveAnimation2(
        props.originPfpLeft,
        props.originPfpTop,
        props.pfpLeft,
        props.pfpTop,
        350,
        350
      )}
    5.5s cubic-bezier(0.51, -0.24, 0.37, 1.58) 1;
  @media (min-width: 1366px) {
    width: var(--pfp-medium);
    height: var(--pfp-medium);
    background-size: var(--pfp-medium);
  }
  @media (min-width: 1920px) {
    width: var(--pfp-large);
    height: var(--pfp-large);
    background-size: var(--pfp-large);
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 4rem;
`;

const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-right: 15%;
`;

const ProfileSchoolContainer = styled.div`
  display: flex;
  flex-direction: row;
  opacity: 0;
  animation: ${slideAnimation4} 5s ease-in-out 1;
`;

const ProfileSchool = styled.p`
  color: white;
  font-size: var(--font-small);
  font-weight: bold;
  @media (min-width: 1366px) {
    font-size: var(--font-medium);
  }
`;

const ProfileSchoolInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const ProfileSchoolImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 2rem;
`;

const ProfileName = styled.h1`
  color: white;
  font-size: var(--font-medium);
  animation: ${slideAnimation1} 5s ease-in-out 1;
  opacity: 0;
  margin-top: 2rem;
  @media (min-width: 1366px) {
    font-size: var(--font-large);
  }
`;

const ProfileDescription = styled.p`
  color: white;
  font-size: var(--font-small);
  animation: ${slideAnimation2} 5s ease-in-out 1;
  opacity: 0;
  @media (min-width: 1366px) {
    font-size: var(--font-medium);
  }
`;

const ProfileLocation = styled.p`
  color: white;
  font-size: var(--font-xsmall);
  color: #a8aaab;
  margin-bottom: 4rem;
  animation: ${slideAnimation3} 4s ease-in-out 1;
  opacity: 0;
  @media (min-width: 1366px) {
    font-size: var(--font-small);
  }
`;

const ConnectButton = styled.button`
  background-color: #70b5f9;
  color: #1d2226;
  font-size: 5rem;
  font-weight: bold;
  border-radius: 48px;
  width: fit-content;
  padding: 1rem 2rem;
  transition: all ease 1s;
  opacity: 0;
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    font-size: var(--font-size-medium);
  }
  @media (min-width: 1366px) {
    font-size: var(--font-size-medium);
  }
`;

const OverlayButton = styled.button<AnimationProps>`
  :before {
    background-color: #70b5f9;
    font-size: 8rem;
    border-radius: 96px;
    padding: 1rem 2rem;
    width: fit-content;
    height: fit-content;
    padding: 1rem 2rem;
    position: absolute;
    content: "Hi, I'm Patrick";
    font-weight: 400;
    color: white;
    margin-bottom: 4rem;
    top: ${(props) => `${props.top}px`};
    left: ${(props) => `${props.left}px`};
    animation: ${(props) =>
        moveAnimation1(
          props.originLeft,
          props.originTop,
          props.left,
          props.top,
          3.5,
          7
        )}
      6.5s cubic-bezier(0.51, -0.24, 0.37, 1.58) 1;
  }
  @media (min-width: 768px) {
    font-size: var(--font-size-medium);
  }
`;

const Animation1 = () => {
  const top = useSelector(selectTop);
  const left = useSelector(selectLeft);
  const [originTop, setOriginTop] = useState(0);
  const [originLeft, setOriginLeft] = useState(0);
  const originRef = useRef<HTMLButtonElement>(null);

  const pfpTop = useSelector(selectPfpTop);
  const pfpLeft = useSelector(selectPfpLeft);
  const [originPfpTop, setOriginPfpTop] = useState(0);
  const [originPfpLeft, setOriginPfpLeft] = useState(0);
  const originPfpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (originRef.current) {
      setOriginTop(originRef.current.offsetTop);
      setOriginLeft(originRef.current.offsetLeft);
      console.log(originTop, "ot");
      console.log(originLeft, "ol");
    }
  }, [originRef]);

  useEffect(() => {
    if (originPfpRef.current) {
      setOriginPfpTop(originPfpRef.current.offsetTop);
      setOriginPfpLeft(originPfpRef.current.offsetLeft);
      console.log(originPfpTop, "ot");
      console.log(originPfpLeft, "ol");
    }
  }, [originPfpRef]);

  return (
    <AnimationContainer>
      <LinkedInPanel>
        <Profile>
          <ProfileInfoContainer>
            <ProfilePic ref={originPfpRef} />
            <ProfilePicOverlay
              originPfpTop={originPfpTop}
              originPfpLeft={originPfpLeft}
              pfpLeft={pfpLeft}
              pfpTop={pfpTop}
            />
            <ProfileName>Patrick Torres</ProfileName>
            <ProfileDescription>Full-Stack Developer.</ProfileDescription>
            <ProfileLocation>
              Queens County, New York, United States
            </ProfileLocation>

            <ConnectButton ref={originRef}>Connect</ConnectButton>
            <OverlayButton
              originTop={originTop}
              originLeft={originLeft}
              left={left}
              top={top}
            ></OverlayButton>
          </ProfileInfoContainer>
          <ProfileSchoolContainer>
            <ProfileSchoolInner>
              <ProfileSchoolImg src={nyit} />
              <ProfileSchool>New York Institute of Technology</ProfileSchool>
            </ProfileSchoolInner>
          </ProfileSchoolContainer>
        </Profile>
      </LinkedInPanel>
    </AnimationContainer>
  );
};

export default Animation1;
