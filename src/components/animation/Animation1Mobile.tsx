import styled, { css, keyframes } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { ReactNode, useEffect, useState, useRef } from 'react'
import { selectTop, selectLeft, selectPfpTop, selectPfpLeft, setTop, setLeft, setPfpTop, setPfpLeft } from "../../state/uiSlice";
import doodle from "../../assets/img/doodle.jpg";
import linkedin from "../../assets/img/linkedin-bg.jpg";
import nyit from "../../assets/img/nyit-icon.jpg";

interface AnimationProps {
  top: number
  left: number
  originTop: number
  originLeft: number
}

interface PfpAnimationProps {
  pfpTop: number
  pfpLeft: number
  originPfpTop: number
  originPfpLeft: number
}

const runAnimation1 = keyframes`
   0% {opacity: 1; transition: all ease;}
   6% {opacity: 1; background-color: #6d6d6d; transition: all ease;}
   90% {opacity: 1; background-color: #000000 transition: all ease;}
   100% {opacity: 0; background-color: #000000;   border: 2px solid #a8aaab; transition: all ease;
}
`

const slideAnimation1 = keyframes`
   0% { opacity: 1;}
   80% {transform: translate(0, 0); opacity: 1;}
   100% {transform: translate(0, -250px); opacity: 0;}
`

const slideAnimation2 = keyframes`
   0% { opacity: 1;}
   82% {transform: translate(0, 0); opacity: 1;}
   100% {transform: translate(-250px, 0); opacity: 0;}
`

const slideAnimation3 = keyframes`
   0% { opacity: 1;}
   84% {transform: translate(0, 0); opacity: 1;}
   100% {transform: translate(-250px, 0); opacity: 0;}
`

const slideAnimation4 = keyframes`
   0% { opacity: 1;}
   86% {transform: translate(0, 0); opacity: 1;}
   100% {transform: translate(250px, 0); opacity: 0;}
`

const backgroundAnimation1 = keyframes`
  0% {opacity: 1; background-color: #1d2226;}
   60% {opacity: 1; background-color: #1d2226;}
   80% {opacity: 1;  background-color: #000000;}
   100% {opacity: 1;  background-color: #000000;}
`

const moveAnimation1 = ( x1: number,y1: number,x2: number,y2: number, fontSize1: number, fontSize2: number) => keyframes`
   0% {left:${x1}px; top: ${y1}px; font-size: ${fontSize1}rem; font-weight: bold; border-radius: 48px; content: "Connect"; color: #1d2226; transition: all ease;
}
80% {left:${x1}px; top: ${y1}px; font-size: ${fontSize1}rem; font-weight: bold; border-radius: 48px; content: "Connect"; color: #1d2226; transition: all ease;}

   100% {left:${x2}px; top: ${y2}px; font-size: ${fontSize2}rem; border-radius: content: "Hi, I'm Patrick" 96px; padding: 1rem 2rem; font-weight: 400; color: white;  transition: all ease;}
`

const moveAnimation2 = ( x1: number,y1: number, x2: number,y2: number,) => keyframes`
   0% {left:${x1}px; top: ${y1}px; transition: all ease; }
   80% {left:${x1}px; top: ${y1}px; transition: all ease;}
   100% {left:${x2}px; top: ${y2}px; transition: all ease;}
`

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
  animation: ${runAnimation1}  var(--animation-length) ease-in-out infinite;

`

const LinkedInPanel = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 0 0 2.5rem 2.5rem;
  animation: ${backgroundAnimation1} 6.5s ease-in-out infinite;
  opacity: 1;
`

const ProfilePic = styled.div`
  margin-top: -324px;
  margin-left: 5%;
  background-color: #ffffff;
  width: 360px;
  height: 360px;
  border-radius: 100%;
  border: 10px solid #1d2226;
  opacity: 0;
  
  @media (min-width: 1440px) {
    margin-left: 0;
  }
  @media (min-width: 320px) {
    width: 160px;
    height: 160px;
    margin-top: -12rem;
  }
`

const ProfilePicOverlay = styled.div<PfpAnimationProps>`
    background-image: url(${doodle});
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #ffffff;
    width: 360px;
    height: 360px;
    border-radius: 100%;
    border: 10px solid #1d2226;
    position: absolute;
    top: ${(props) => `${props.pfpTop}px`};
    left: ${(props) => `${props.pfpLeft}px`};
    animation: ${(props) =>
        moveAnimation2(
          props.originPfpLeft,
          props.originPfpTop,
          props.pfpLeft,
          props.pfpTop,
        )}
      5.5s cubic-bezier(.51,-0.24,.37,1.58) infinite;
  @media (min-width: 320px) {
    width: 150px;
    height: 150px;
    background-size: 150px;
    border: 5px solid #1d2226;
  }
`

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 4rem;
  @media (min-width: 1024px) {
  }
  @media (min-width: 768px) {

  }
  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
  }
  
`

const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`



const ProfileSchoolContainer = styled.div`
  display: flex;
  flex-direction: row;
  opacity: 0;
  animation: ${slideAnimation4} 5s ease-in-out infinite;
  @media (min-width: 320px) and (max-width: 768px) {
    margin: 2rem 0;
  }
`

const ProfileSchool = styled.p`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 2rem;
  }
`

const ProfileSchoolInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 1024px) {
    margin-right: 4rem;
  }
  
 
`

const ProfileSchoolImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 2rem;
`

const ProfileName = styled.h1`
  color: white;
  font-size: 5rem;
  animation: ${slideAnimation1} 5s ease-in-out infinite;
  opacity: 0;
  margin-top: 2rem;
  /* @media (min-width: 768px) {
    font-size: 4rem;
  } */
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 3rem;
  }
`

const ProfileDescription = styled.p`
  color: white;
  font-size: 2.5rem;
  animation: ${slideAnimation2} 5s ease-in-out infinite;
  opacity: 0;
  /* @media (min-width: 768px) {
    font-size: 2rem;
  } */
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 2rem;
  }
`

const ProfileLocation = styled.p`
  color: white;
  font-size: 2rem;
  color: #a8aaab;
  margin-bottom: 4rem;
  animation: ${slideAnimation3} 4s ease-in-out infinite;
  opacity: 0;
  /* @media (min-width: 768px) {
    font-size: 1.5rem;
  } */
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`

const ConnectButton = styled.button`
  background-color: #70b5f9;
  color: #1d2226;
  font-size: 5rem;
  font-weight: bold;
  border-radius: 48px;
  padding: 1rem 2rem;
  transition: all ease 1s;
  opacity: 0;
  /* @media (min-width: 768px) {
    font-size: 4rem;
  } */
  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 4rem;
  }
`

const OverlayButton = styled.button<AnimationProps>`
:before  {
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
    top: ${(props) => `${props.top}px`};
    left: ${(props) => `${props.left}px`};
    animation: ${(props) =>
        moveAnimation1(
          props.originLeft,
          props.originTop,
          props.left,
          props.top,
          5, 8,
        )}
      6.5s cubic-bezier(.51,-0.24,.37,1.58) infinite;
    @media (min-width: 320px) and (max-width: 768px) {
      animation: ${(props) =>
        moveAnimation1(
          props.originLeft,
          props.originTop,
          props.left,
          props.top,
          4, 5,
        )}
      6.5s cubic-bezier(.51,-0.24,.37,1.58) infinite;
  }
}

    
`

const Animation1 = () => {
  const top = useSelector(selectTop)
  const left = useSelector(selectLeft)
  const [originTop, setOriginTop] = useState(0)
  const [originLeft, setOriginLeft] = useState(0)
  const originRef = useRef<HTMLButtonElement>(null)
  
  const pfpTop = useSelector(selectPfpTop)
  const pfpLeft = useSelector(selectPfpLeft)
  const [originPfpTop, setOriginPfpTop] = useState(0)
  const [originPfpLeft, setOriginPfpLeft] = useState(0)
  const originPfpRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (originRef.current) {
      setOriginTop(originRef.current.offsetTop)
      setOriginLeft(originRef.current.offsetLeft)
      console.log(originTop, 'ot')
      console.log(originLeft, 'ol')
    }
  }, [originRef])

  useEffect(() => {
    if (originPfpRef.current) {
      setOriginPfpTop(originPfpRef.current.offsetTop)
      setOriginPfpLeft(originPfpRef.current.offsetLeft)
      console.log(originPfpTop, 'ot')
      console.log(originPfpLeft, 'ol')
    }
  }, [originPfpRef])

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
              pfpTop={pfpTop}/>
            <ProfileName>Patrick Torres</ProfileName>
            <ProfileDescription>Full-Stack Developer.</ProfileDescription>
            <ProfileLocation>
              Queens County, New York, United States
            </ProfileLocation>
          
          </ProfileInfoContainer>
          <ProfileSchoolContainer>
            <ProfileSchoolInner>
              <ProfileSchoolImg src={nyit} />
              <ProfileSchool>New York Institute of Technology</ProfileSchool>
            </ProfileSchoolInner>
          </ProfileSchoolContainer>
          <ConnectButton ref={originRef}>
          Connect
            </ConnectButton>
            <OverlayButton   
              originTop={originTop}
              originLeft={originLeft}
              left={left}
              top={top}/>
        </Profile>
      </LinkedInPanel>
    </AnimationContainer>
  )
}

export default Animation1
