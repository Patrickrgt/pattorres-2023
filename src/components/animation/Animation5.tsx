import styled, { css, keyframes } from "styled-components";
import { ReactNode, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectInterestsTop,
  selectInterestsLeft,
  selectPfp3Top,
  selectPfp3Left,
  setInterestsTop,
  setInterestsLeft,
  setPfp3Top,
  setPfp3Left,
} from "../../state/uiSlice";
import github from "../../assets/img/github.svg";
import linkedin from "../../assets/img/linkedin.svg";
import profile from "../../assets/img/profile.jpg";

const links = [
  { name: "github", img: github, link: "https://github.com/Patrickrgt" },
  {
    name: "linkedin",
    img: linkedin,
    link: "https://www.linkedin.com/in/patrick-torr/",
  },
];

const runAnimation = keyframes`
   0% {opacity: 0; transition: all ease;}
   100% {opacity: 1; transition: all ease;}
`;

const AnimationContainer = styled.div`
  position: absolute;
  background-color: #000000;
  width: 100%;
  height: 100%;
  border-radius: 2.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid grey;
  overflow: hidden;
  opacity: 0;
  animation: ${runAnimation} var(--animation-length) ease-in-out forwards;
  animation-delay: var(--animation-3-delay-length);
  @media (max-width: 768px) {
    animation-delay: 0s;
    flex-direction: column;
  }
`;

const JumboRow = styled.div`
  width: fit-content;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
`;

const ProfilePic = styled.img`
  background-color: #ffffff;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const NameCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
  @media (max-width: 768px) {
    align-items: center;
    margin-right: 0%;
  }
`;

const Name = styled.h1`
  color: #ffffff;
  font-size: 8rem;
  text-align: right;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Description = styled.h2`
  color: #ffffff;
  font-size: 4rem;
  text-align: right;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const LinksRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Link = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-right: 1rem;
`;

const Animation5 = () => {
  return (
    <AnimationContainer>
      <JumboRow>
        <ProfilePic src={profile}></ProfilePic>
      </JumboRow>
      <JumboRow>
        <NameCol>
          <Name>Patrick Torres</Name>
          <Description>
            I enjoy art, web3, collect NFTs, admire fashion design and
            occasionally attend anime conventions.
          </Description>
          <LinksRow>
            {links.map((link) => (
              <Link src={link.img} />
            ))}
          </LinksRow>
        </NameCol>
      </JumboRow>
    </AnimationContainer>
  );
};

export default Animation5;
