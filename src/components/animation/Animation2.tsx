import styled, { css, keyframes } from "styled-components";
import { ReactNode, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTop,
  selectLeft,
  selectPfpTop,
  selectPfpLeft,
  setTop,
  setLeft,
  setPfpTop,
  setPfpLeft,
  selectDeliveredTop,
  selectDeliveredLeft,
  selectPfp2Top,
  selectPfp2Left,
  setDeliveredTop,
  setDeliveredLeft,
  setPfp2Top,
  setPfp2Left,
} from "../../state/uiSlice";
import profile from "../../assets/img/profile.jpg";

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

const blinkAnimation1 = keyframes`
   0% { border-color: transparent; opacity: 1}
   50% { border-color: #707bf9; opacity: 1}
`;

const typingAnimation1 = keyframes`
   0% { width: 0; opacity: 1 }
   70% { width: 100%; opacity: 1 }
   100% { width: 100%; opacity: 1 }
`;

const opacityAnimation1 = keyframes`
   0% { opacity: 1 }
   50% { opacity: 1 }
   100% { opacity:0 }
`;

const runAnimation1 = keyframes`
   0% {opacity: 1; transition: all ease;}
   90% {opacity: 1; transition: all ease;}
   100% {opacity: 0; background-color: #000000;   border: 2px solid #a8aaab; transition: all ease;
}
`;

const slideAnimation1 = keyframes`
   0% { opacity: 1;}
   81% {transform: translate(0, 0); opacity: 1;}
   91% {transform: translate(100px, 0); opacity: 0;}
   100% {transform: translate(100px, 0); opacity: 0;}
`;

const slideAnimation2 = keyframes`
   0% {transform: translate(100px, 0); opacity: 0;}
   10% {transform: translate(0px, 0); opacity: 1;}
   80% {transform: translate(0px, 0); opacity: 1;}
   100% {transform: translate(-100px, 0); opacity: 0;}
`;

const moveAnimation1 = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => keyframes`
0% {left:${x1}px; top: ${y1}px; content: "Delivered"; color: #7e7e7e; transition: all ease;}
80% {left:${x1}px; top: ${y1}px; content: "Delivered"; color: #7e7e7e; transition: all ease;}
100% {left:${x2}px; top: ${y2}px; content: "Hi, I'm Patrick" 96px; color: #7e7e7e;  transition: all ease;}
`;

const moveAnimation2 = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => keyframes`
   0% {left:${x1}px; top: ${y1}px; transition: all ease; }
   80% {left:${x1}px; top: ${y1}px; transition: all ease;}
   100% {left:${x2}px; top: ${y2}px; transition: all ease;}
`;

const backgroundAnimation1 = keyframes`
   100% {  background-color: #000000;
}
`;

const AnimationContainer = styled.div`
  position: absolute;
  background-color: #000000;
  width: 100%;
  height: 100%;
  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #707070;
  animation: ${runAnimation1} var(--animation-length) ease-in-out;
  animation-delay: var(--animation-1-delay-length);
  opacity: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkedInPanel = styled.div`
  width: 90%;
  animation: ${backgroundAnimation1}
    calc(var(--animation-1-delay-length) / 1.02) ease-in-out;
  animation-delay: var(--animation-1-delay-length);
`;

const ProfilePicContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 4rem;
  @media (min-width: 1920px) {
    justify-content: center;
    margin-right: 4rem;
  }
`;

const ProfilePic = styled.div`
  margin-bottom: -50px;
  background-color: #ffffff;
  width: var(--pfp-large);
  height: var(--pfp-large);
  border-radius: 100%;
  opacity: 0;
`;

const ProfilePicOverlay = styled.div<PfpAnimationProps>`
  background-image: url(${profile});
  background-color: #ffffff;
  width: var(--pfp-large);
  height: var(--pfp-large);
  border-radius: 100%;
  border: 10px solid #000000;
  position: absolute;
  top: ${(props) => `${props.pfpTop}px`};
  left: ${(props) => `${props.pfpLeft}px`};
  animation: ${(props) =>
      moveAnimation2(
        props.originPfpLeft,
        props.originPfpTop,
        props.pfpLeft,
        props.pfpTop
      )}
    calc(var(--animation-1-delay-length) / 1.3)
    cubic-bezier(0.51, -0.24, 0.37, 1.58);
  animation-delay: var(--animation-1-delay-length);
  z-index: 2;
`;

const TextMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const IMessageContainer = styled.div`
  width: 100%;
  border: 2px solid #a8aaab;
  border-radius: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${slideAnimation2} calc(var(--animation-1-delay-length) / 1.1)
    cubic-bezier(0.51, -0.24, 0.37, 1.58);
  animation-delay: var(--animation-1-delay-length);
  opacity: 0;
  @media (min-width: 1920px) {
    width: 63.33%;
    margin: auto;
  }
`;

const IMessageInner = styled.div`
  position: absolute;
  text-align: start;
`;

const IMessage = styled.h1`
  padding-left: 4rem;
  color: white;
  font-size: var(--font-xlarge);
  font-weight: 300;
  color: #a8aaab;
  margin: 1rem 0;
  text-align: center;
  flex: 1;
  text-align: start;
  animation: ${opacityAnimation1} 2s ease;
  animation-delay: var(--animation-1-delay-length);
  opacity: 0;
`;

const IMessageOverlay = styled.h1`
  font-size: var(--font-xlarge);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-left: 4rem;
  color: white;
  font-size: var(--font-xlarge);
  font-weight: 300;
  margin: 3rem 0;
  text-align: center;
  flex: 1;
  text-align: start;
  overflow: hidden;
  border-right: 0.15em solid #707bf9;
  white-space: nowrap;
  letter-spacing: 0px;
  animation: ${typingAnimation1} 4s 1,
    ${blinkAnimation1} 0.75s step-end infinite;
  animation-delay: calc(1s + var(--animation-1-delay-length));
  opacity: 0;
`;

const TextIcon = styled.div`
  background-color: #ffffff;
  width: var(--pfp-small);
  height: var(--pfp-small);
  border-radius: 100%;
  border: 10px solid #000000;
  background-image: url("");
`;

const DeliveredText = styled.p`
  color: white;
  font-size: var(--font-large);
  color: #a8aaab;
  margin-bottom: 4rem;
  opacity: 0;
`;

const DeliveredTextOverlay = styled.p<AnimationProps>`
  :before {
    color: white;
    font-size: var(--font-large);
    color: #a8aaab;
    margin-bottom: 4rem;
    position: absolute;
    content: "Delivered";
    top: ${(props) => `${props.top}px`};
    left: ${(props) => `${props.left}px`};
    animation: ${(props) =>
        moveAnimation1(
          props.originLeft,
          props.originTop,
          props.left,
          props.top
        )}
      calc(var(--animation-1-delay-length) / 1.3)
      cubic-bezier(0.51, -0.24, 0.37, 1.58);
    animation-delay: var(--animation-1-delay-length);
  }
`;

const TextMessage = styled.button`
  background-color: #70b5f9;
  color: white;
  font-size: 8rem;
  font-weight: 400;
  border-radius: 96px;
  width: fit-content;
  padding: 1rem 2rem;
  height: fit-content;
  animation: ${slideAnimation1} calc(var(--animation-1-delay-length) / 1.02)
    ease-in-out;
  animation-delay: var(--animation-1-delay-length);
  opacity: 0;
  z-index: 3;
  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 6rem solid transparent;
    border-top-color: #70b5f9;
    border-bottom: 0;
    border-left: 0;
    z-index: -1;
    margin-bottom: -2rem;
    transform: rotate(30deg);
  }
`;

const Animation2 = () => {
  const dispatch = useDispatch();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pfpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      console.log(buttonRef);
      console.log(buttonRef);
      dispatch(setTop(buttonRef.current.offsetTop));
      dispatch(setLeft(buttonRef.current.offsetLeft));
    }
  }, [buttonRef]);

  useEffect(() => {
    if (pfpRef.current) {
      console.log(pfpRef);
      console.log(pfpRef);
      dispatch(setPfpTop(pfpRef.current.offsetTop));
      dispatch(setPfpLeft(pfpRef.current.offsetLeft));
    }
  }, [pfpRef]);

  const top = useSelector(selectDeliveredTop);
  const left = useSelector(selectDeliveredLeft);
  const [originTop, setOriginTop] = useState(0);
  const [originLeft, setOriginLeft] = useState(0);
  const originRef = useRef<HTMLParagraphElement>(null);

  const pfpTop = useSelector(selectPfp2Top);
  const pfpLeft = useSelector(selectPfp2Left);
  const pfp1Top = useSelector(selectPfpTop);
  const pfp1Left = useSelector(selectPfpLeft);
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
        <ProfilePicContainer>
          <ProfilePic ref={pfpRef} />
          <ProfilePicOverlay
            originPfpTop={pfp1Top}
            originPfpLeft={pfp1Left}
            pfpLeft={pfpLeft}
            pfpTop={pfpTop}
          />
          <TextMessageContainer>
            <TextMessage ref={buttonRef}>Hi, I'm Patrick</TextMessage>
            <DeliveredText ref={originRef}>Delivered</DeliveredText>
            <DeliveredTextOverlay
              originTop={originTop}
              originLeft={originLeft}
              left={left}
              top={top}
            />
          </TextMessageContainer>
        </ProfilePicContainer>
        <IMessageContainer>
          <IMessage>iBuilding</IMessage>
          <IMessageInner>
            <IMessageOverlay>Full-Stack Projects!</IMessageOverlay>
          </IMessageInner>
          <TextIcon></TextIcon>
        </IMessageContainer>
      </LinkedInPanel>
    </AnimationContainer>
  );
};

export default Animation2;
