import styled, { keyframes } from "styled-components";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPfp2Top,
  selectPfp2Left,
  setDeliveredTop,
  setDeliveredLeft,
  setPfp2Top,
  setPfp2Left,
  selectInterestsTop,
  selectInterestsLeft,
  selectPfp3Top,
  selectPfp3Left,
} from "../../state/uiSlice";
import aiko from "../../assets/img/aiko.jpg";
import aikovirtual from "../../assets/img/aikovirtual.jpg";

interface AnimationProps {
  top: number;
  left: number;
  originTop: number;
  originLeft: number;
}

interface PfpAnimationProps {
  pfpTop: number;
  pfpLeft: number;
  originPfpTopProp: number;
  originPfpLeftProp: number;
}

const serverAnimation1 = keyframes`
   0% {height: 150px; transition: cubic-bezier(0.51, -0.24, 0.37, 1.58); transform: translate(0px, 0);}
   10% {height: 50px; transition: cubic-bezier(0.51, -0.24, 0.37, 1.58); transform: translate(0px, 0);}
   70% {height: 50px; transition: all ease; transform: translate(0px, 0);}
   80% {height: 50px; transition: all ease; transform: translate(1px, 0); }
   100% {height: 50px; transition: all ease; transform: translate(-1000px, 0); }
`;

const runAnimation1 = keyframes`
   0% {opacity: 1; transition: all ease;}
   90% {opacity: 1; transition: all ease; transform: rotateX(0deg);}
   100% {opacity: 0; background-color: #202225; border: 2px solid #a8aaab; transition: all ease; }
`;

const widthAnimation1 = keyframes`
   0% {width: 0; transition: all ease;}
   90% {width: 100%; transition: all ease;}
   100% {width: 100%;  transition: all ease;}
`;

const moveAnimation1 = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => keyframes`
   0% {left:${x1}px; top: ${y1}px; font-weight: 400; content: "Aiko Virtual"; color: #ffffff; font-size: 10rem; transition: all ease;}
   80% {left:${x1}px; top: ${y1}px; font-weight: 400; content: "Aiko Virtual"; color: #ffffff; font-size: 10rem; transition: all ease;}
   100% {left:${x2}px; top: ${y2}px; font-weight: 400; content: "Interests in"; color: #ffffff; font-size: 10rem; transition: all ease;}
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

const deliveredAnimation1 = keyframes`
   0% {content: "🤝Team"; transition: all ease; transform: rotateX(0deg)}
   25% {content: "✨Community"; transition: all ease; transition: all ease; transform: rotateX(360deg)}
   50% {content: "💕Culture"; opacity: 1; transition: all ease; transform: rotateX(0deg);}
   75% {content: "🚀Product"; opacity: 1; transition: all ease; transform: rotateX(360deg);}
   100% {content: "🌠Vision"; transition: all ease;}
`;

const rolesAnimation1 = keyframes`
   0% {content: "Community Manager"; transition: all ease; transform: rotateX(0deg)}
   50% {content: "Community Manager"; transition: all ease; transform: rotateX(0deg)}
   60% {content: "Developer"; transition: all ease; transform: rotateX(360deg);}
   100% {content: "Developer"; transition: all ease; transform: rotateX(360deg);}
`;

const backgroundAnimation1 = keyframes`
   0% {opacity: 0; background-color:#18191c;}
   30% {opacity: 1; background-color:#18191c;}
   80% {background-color: #18191c; }
   100% {background-color: #1d2226;}
`;

const opacityAnimation1 = keyframes`
   0% {opacity: 0; }
   30% {opacity: 1; }
   80% {opacity: 1; }
   100% {}
`;

const slideAnimation1 = keyframes`
   0% { opacity: 1;}
   20% {transform: translate(0px, 0); opacity: 1;}
   90% {transform: translate(0, 0); opacity: 1;}
   100% {transform: translate(1000px, 0); opacity: 0;}
`;

const slideAnimation2 = keyframes`
   0% {transform: translate(0px, 0); opacity: 1;}
   80% {transform: translate(0, 0); opacity: 1;}
   100% {transform: translate(1000px, 0); opacity: 0;}
`;

const slideAnimation3 = keyframes`
   0% {transform: translate(0, 0); opacity: 1;}
   80% {transform: translate(0, 0); opacity: 1;}
   100% {transform: translate(0, -1000px); opacity: 0;}
`;

const AnimationContainer = styled.div`
  position: absolute;
  background-color: #202225;
  width: 100%;
  height: 100%;
  border-radius: 2.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid black;
  overflow: hidden;
  animation: ${runAnimation1} var(--animation-length) ease-in-out 1;
  opacity: 0;
  animation-delay: var(--animation-2-delay-length);
  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkedInPanel = styled.div`
  width: fit-content;
  height: 100%;
  background-color: #202225;
  display: flex;
  border-radius: 2.5rem;
`;

const DiscordPanel = styled.div`
  height: 100%;
  background-color: #1d2226;
  display: flex;
  justify-content: center;
  flex: 1;
  border-radius: 0 2.5rem 2.5rem 0;
`;

const ProfilePicContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: fit-content;
  margin: 5rem 0;
`;

const ProfilePic = styled.div`
  background-color: #ffffff;
  width: var(--pfp-large);
  height: var(--pfp-large);
  background-size: var(--pfp-large);
  border-radius: 100%;
  border: 5px solid #1d2226;
  margin-right: 3rem;
  opacity: 0;
`;

const ProfilePicOverlay = styled.div<PfpAnimationProps>`
  background-image: url(${aikovirtual});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: var(--pfp-large);
  background-color: #ffffff;
  width: var(--pfp-large);
  height: var(--pfp-large);
  border-radius: 100%;
  border: 5px solid #1d2226;
  position: absolute;
  top: ${(props) => `${props.pfpTop}px`};
  left: ${(props) => `${props.pfpLeft}px`};
  animation: ${(props) =>
      moveAnimation2(
        props.originPfpLeftProp,
        props.originPfpTopProp,
        props.pfpLeft,
        props.pfpTop
      )}
    6s cubic-bezier(0.51, -0.24, 0.37, 1.58) 1;
  animation-delay: var(--animation-2-delay-length);
`;

const DiscordCircle = styled.div`
  margin-left: -20px;
  background-color: #ffffff;
  width: 50px;
  height: 50px;
  border-radius: 0 100% 100% 0;
  animation: ${serverAnimation1} 6s ease-in 1;
  transform: translate(-1000px, 0);
  animation-delay: var(--animation-2-delay-length);
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileInfoContainer = styled.div`
  display: flex;
`;

const ProfileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
`;

const DeliverContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${slideAnimation3} 5.5s cubic-bezier(0.51, -0.24, 0.37, 1.58) 1;
  animation-delay: var(--animation-2-delay-length);
  transform: translate(0, -1000px);
`;

const DeliverText = styled.p`
  font-size: var(--font-large);
  color: #7e7e7e;
`;

const DeliverDynamic = styled.div`
  font-size: var(--font-large);
  color: #1d2226;
  margin-bottom: 3rem;
`;

const DeliverOverlay = styled.div`
  :before {
    position: absolute;
    font-size: var(--font-large);
    color: #7e7e7e;
    margin-bottom: 3rem;
    content: "🤝Team";
    transition: all ease;
    transform: rotateX(0deg);
    animation: ${deliveredAnimation1} 3s cubic-bezier(0.51, -0.24, 0.37, 1.58) 1
      forwards;
    animation-delay: calc(1.5s + var(--animation-2-delay-length));
  }
`;

const AikoContainer = styled.div`
  background-color: #1d2226;
  border-radius: 32px;
  text-align: center;
  padding: 2rem 3rem;
  animation: ${backgroundAnimation1} 5s cubic-bezier(0.51, -0.24, 0.37, 1.58) 1;
  animation-delay: var(--animation-2-delay-length);
  :before {
    content: "";
    position: relative;
    bottom: 0;
    top: 45%;
    right: 50%;
    margin-left: -8rem;
    width: 0;
    height: 0;
    border-top: 3rem solid transparent;
    border-bottom: 3rem solid transparent;
    border-right: 3rem solid #18191c;
    animation: ${opacityAnimation1} 5s cubic-bezier(0.51, -0.24, 0.37, 1.58) 1;
    animation-delay: var(--animation-2-delay-length);
    opacity: 0;
  }
`;

const AikoTitle = styled.h1`
  font-weight: 400;
  color: #ffffff;
  font-size: 10rem;
  opacity: 0;
`;

const AikoTitleOverlay = styled.h1<AnimationProps>`
  :before {
    font-weight: 400;
    color: #ffffff;
    position: absolute;
    font-size: 10rem;
    content: "Interests in";
    animation: ${(props) =>
        moveAnimation1(
          props.originLeft,
          props.originTop,
          props.left,
          props.top
        )}
      6s cubic-bezier(0.51, -0.24, 0.37, 1.58) 1;
    top: ${(props) => `${props.top}px`};
    left: ${(props) => `${props.left}px`};
    animation-delay: var(--animation-2-delay-length);
  }
`;

const DiscordUserContainer = styled.div`
  display: flex;
  animation: ${slideAnimation2} 6.5s ease-in-out 1;
  animation-delay: var(--animation-2-delay-length);
  transform: translate(1000px, 0);
`;

const DiscordUserText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

const DiscordPic = styled.div`
  background-image: url(${aiko});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 150px;
  background-color: #ffffff;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin: 0 1rem;
`;

const DiscordUser = styled.p`
  font-size: var(--font-large);
  color: #ffffff;
`;

const DiscordSub = styled.p`
  font-size: var(--font-medium);
  color: #7e7e7e;
`;

const DiscordExperienceOverlay = styled.p`
  :before {
    position: absolute;
    font-size: var(--font-medium);
    color: #ffffff;
    content: "Developer";
    transition: all ease;
    animation: ${rolesAnimation1} 6s cubic-bezier(0.51, -0.24, 0.37, 1.58) 1;
    animation-delay: var(--animation-2-delay-length);
  }
`;

const BreakContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  animation: ${slideAnimation1} 5s cubic-bezier(0.51, -0.24, 0.37, 1.58) 1;
  animation-delay: var(--animation-2-delay-length);
  transform: translate(2000px, 0);
`;

const DiscordBreak = styled.hr`
  border: 1px solid #ed4245;
  margin: 3rem 0;
  width: 100%;
  animation: ${widthAnimation1} 3s cubic-bezier(0.51, -0.24, 0.37, 1.58) 1;
  animation-delay: var(--animation-2-delay-length);
`;

const DiscordSpan = styled.span`
  color: white;
  text-transform: uppercase;
  font-size: var(--font-small);
  font-weight: 800;
  background-color: #ed4245;
  border-radius: 12px;
  padding: 0 1rem;
  position: absolute;
`;

const Animation3 = () => {
  const dispatch = useDispatch();
  const deliveredRef = useRef<HTMLParagraphElement>(null);
  const pfpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (deliveredRef.current) {
      dispatch(setDeliveredTop(deliveredRef.current.offsetTop));
      dispatch(setDeliveredLeft(deliveredRef.current.offsetLeft));
    }
  }, [deliveredRef, dispatch]);

  useEffect(() => {
    if (pfpRef.current) {
      dispatch(setPfp2Top(pfpRef.current.offsetTop));
      dispatch(setPfp2Left(pfpRef.current.offsetLeft));
    }
  }, [pfpRef, dispatch]);

  const top = useSelector(selectInterestsTop);
  const left = useSelector(selectInterestsLeft);
  const [originTop, setOriginTop] = useState(0);
  const [originLeft, setOriginLeft] = useState(0);
  const originRef = useRef<HTMLHeadingElement>(null);

  const pfpTop = useSelector(selectPfp3Top);
  const pfpLeft = useSelector(selectPfp3Left);
  const pfp2Top = useSelector(selectPfp2Top);
  const pfp2Left = useSelector(selectPfp2Left);

  useEffect(() => {
    if (originRef.current) {
      setOriginTop(originRef.current.offsetTop);
      setOriginLeft(originRef.current.offsetLeft);
    }
  }, [originRef]);

  return (
    <AnimationContainer>
      <LinkedInPanel>
        <Profile>
          <ProfileInfoContainer>
            <ProfilePicContainer>
              <DiscordCircle />
              <ProfilePic ref={pfpRef} />
              <ProfilePicOverlay
                originPfpTopProp={pfp2Top}
                originPfpLeftProp={pfp2Left}
                pfpLeft={pfpLeft}
                pfpTop={pfpTop}
              />
            </ProfilePicContainer>
          </ProfileInfoContainer>
        </Profile>
      </LinkedInPanel>

      <DiscordPanel>
        <ProfileNameContainer>
          <DeliverContainer ref={deliveredRef}>
            <DeliverText>Delivered a</DeliverText>
            <DeliverOverlay />
            <DeliverDynamic>x</DeliverDynamic>
          </DeliverContainer>

          <AikoContainer>
            <AikoTitle ref={originRef}>Aiko Virtual</AikoTitle>
            <AikoTitleOverlay
              originTop={originTop}
              originLeft={originLeft}
              left={left}
              top={top}
            />
          </AikoContainer>
          <BreakContainer>
            <DiscordBreak />
            <DiscordSpan>online, I am</DiscordSpan>
          </BreakContainer>

          <DiscordUserContainer>
            <DiscordPic />
            <DiscordUserText>
              <DiscordUser>A:\shvrkboy</DiscordUser>
              <DiscordSub>Building in Web3 as a</DiscordSub>
              <DiscordExperienceOverlay />
            </DiscordUserText>
          </DiscordUserContainer>
        </ProfileNameContainer>
      </DiscordPanel>
    </AnimationContainer>
  );
};

export default Animation3;
