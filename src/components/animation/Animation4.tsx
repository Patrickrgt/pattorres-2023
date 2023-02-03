import styled, { keyframes } from "styled-components";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Animation4NFTs, { NftType } from "./Animation4NFTs";
import {
  setInterestsTop,
  setInterestsLeft,
  setPfp3Top,
  setPfp3Left,
} from "../../state/uiSlice";
import aiko from "../../assets/img/aiko.jpg";
import profile from "../../assets/img/profile.jpg";
import allstarz from "../../assets/img/allstarz.png";
import azuki from "../../assets/img/azuki.png";
import doodle from "../../assets/img/doodle.jpg";
import kaiju from "../../assets/img/kaiju.png";
import tubby from "../../assets/img/tubby.png";
import uwucrew from "../../assets/img/uwucrew.png";

const nfts: NftType[] = [
  {
    image: allstarz,
    id: 1,
  },
  {
    image: azuki,
    id: 2,
  },
  {
    image: doodle,
    id: 3,
  },
  {
    image: kaiju,
    id: 4,
  },
  {
    image: tubby,
    id: 5,
  },
  {
    image: uwucrew,
    id: 6,
  },
];

const runAnimation1 = keyframes`
   0% {opacity: 1; transition: all ease;}
   90% {opacity: 1; transition: all ease;}
   100% {opacity: 0;  border: 2px solid #a8aaab; transition: all ease;
}
`;

const slideAnimation1 = keyframes`
   0% {transform: translate(0px, 0); opacity: 1;}
   90% {transform: translate(0, 0); opacity: 1;}
   100% {transform: translate(-1000px, 0); opacity: 0;}
`;

const slideAnimation2 = keyframes`
   0% {transform: translate(-100px, 0); opacity: 0;}
   10% {transform: translate(0px, 0); opacity: 1;}
   80% {transform: translate(0, 0); opacity: 1;}
   100% {transform: translate(1000px, 0); opacity: 0;}
`;

const slideAnimation3 = keyframes`
   0% {transform: translate(0, -100px); opacity: 0;}
   20% {transform: translate(0, 0px); opacity: 1;}
   80% {transform: translate(0, 0px); opacity: 1;}
   100% {transform: translate(0, -1000px); opacity: 0;}
`;

const growAnimation1 = keyframes`
   0% {transform: scale(0); opacity: 1;}
   10% {transform: scale(1); opacity: 1;}
   90% {transform: scale(1); opacity: 1;}
   100% {transform:  scale(0); opacity: 0;}
`;

const interestsAnimation1 = keyframes`
   0% {content: "#WebDevelopment"; opacity: 1; transition: all ease; transform: rotateX(0deg)}
   20% {content: "#Blockchain"; opacity: 1; transition: all ease; transition: all ease; transform: rotateX(360deg)}
   40% {content: "#Web3"; opacity: 1; transition: all ease; transform: rotateX(0deg);}
   60% {content: "#AI"; opacity: 1; transition: all ease; transform: rotateX(360deg);}
   80% {content: "#DataAnalytics"; opacity: 1; transition: all ease; transform: rotateX(0deg);}
   100% {content: "#SoftwareEngineering"; opacity: 1; transition: all ease; transform: rotateX(360deg);
}
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
  animation: ${runAnimation1} var(--animation-length) ease-in-out;
  opacity: 0;
  animation-delay: var(--animation-3-delay-length);
  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkedInPanel = styled.div`
  width: fit-content;
  background-color: #000000;
  display: flex;
  justify-content: center;
  height: 100%;
  padding-left: 2%;
`;

const DiscordPanel = styled.div`
  display: flex;
  height: 100%;
`;

const CommentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const ProfilePic = styled.div`
  background-image: url(${aiko});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: var(--pfp-large);
  background-color: #ffffff;
  width: var(--pfp-large);
  height: var(--pfp-large);
  border-radius: 50%;
  border: 10px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ProfileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50%;
`;

const DeliverDynamic = styled.p`
  font-size: var(--font-2xlarge);
  color: #ffffff;
  animation: ${slideAnimation1} 6s cubic-bezier(0.51, -0.24, 0.37, 1.58);
  animation-delay: var(--animation-3-delay-length);
  opacity: 0;
`;

const AikoContainer = styled.div`
  background-color: #202225;
  border-radius: 96px;
  text-align: center;
  padding: 3rem 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  animation: ${growAnimation1} 6s cubic-bezier(0.51, -0.24, 0.37, 1.58);
  animation-delay: var(--animation-3-delay-length);
  opacity: 0;
`;

const TextContainer = styled.div`
  position: relative;
`;

const AikoTitle = styled.h1`
  font-weight: 400;
  color: #2680eb;
  font-size: var(--font-large);
  opacity: 0;
`;

const InterestsOverlay = styled.div`
  :before {
    position: absolute;
    top: 0;
    left: 0;
    font-weight: 400;
    color: #2680eb;
    font-size: var(--font-large);
    content: "#WebDevelopment";
    transition: all ease;
    transform: rotateX(0deg);
    animation: ${interestsAnimation1} 3s cubic-bezier(0.51, -0.24, 0.37, 1.58)
      forwards;
    animation-delay: calc(1.5s + var(--animation-3-delay-length));
    opacity: 1;
  }
`;

const DiscordUserContainer = styled.div`
  display: flex;
`;

const DiscordUserText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  animation: ${slideAnimation2} 6s cubic-bezier(0.51, -0.24, 0.37, 1.58);
  animation-delay: var(--animation-3-delay-length);
  opacity: 0;
`;

const DiscordPic = styled.div`
  background-image: url(${profile});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: var(--pfp-xsmall);
  background-color: #ffffff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  animation: ${growAnimation1} 6s cubic-bezier(0.51, -0.24, 0.37, 1.58);
  animation-delay: var(--animation-3-delay-length);
  opacity: 0;
`;

const DiscordUserRow = styled.div`
  display: flex;
  align-items: baseline;
`;

const DiscordUser = styled.p`
  font-size: var(--font-medium);
  color: #ffffff;
  font-weight: bold;
  margin-right: 1rem;
`;

const DiscordSub = styled.p`
  font-size: var(--font-medium);
  color: #202225;
`;

const DiscordExperience = styled.p`
  font-size: var(--font-medium);
  color: #ffffff;
`;

const LikedRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  animation: ${slideAnimation3} 6s cubic-bezier(0.51, -0.24, 0.37, 1.58);
  animation-delay: var(--animation-3-delay-length);
  opacity: 0;
`;

const TwitterUserCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 9rem;
`;

const HeartImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 0 1rem;
`;

const MagnifyImg = styled.img`
  width: 8rem;
  height: 8rem;
  margin: 0 3rem;
`;

const LikedContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Liked = styled.p`
  font-weight: bold;
  color: #202225;
  font-size: var(--font-large);
`;

const InterestContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Animation4 = () => {
  const dispatch = useDispatch();
  const interestsRef = useRef<HTMLParagraphElement>(null);
  const pfpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (interestsRef.current) {
      dispatch(setInterestsTop(interestsRef.current.offsetTop));
      dispatch(setInterestsLeft(interestsRef.current.offsetLeft));
    }
  }, [interestsRef, dispatch]);

  useEffect(() => {
    if (pfpRef.current) {
      dispatch(setPfp3Top(pfpRef.current.offsetTop));
      dispatch(setPfp3Left(pfpRef.current.offsetLeft));
    }
  }, [pfpRef, dispatch]);

  return (
    <AnimationContainer>
      <LinkedInPanel>
        <Profile>
          <CommentContainer>
            <LikedRow>
              <HeartContainer>
                <HeartImg src="https://www.freeiconspng.com/thumbs/heart-png/heart-png-15.png" />
              </HeartContainer>
              <LikedContainer>
                <Liked>You Liked</Liked>
              </LikedContainer>
            </LikedRow>
            <DiscordUserContainer>
              <TwitterUserCol>
                <DiscordPic />
              </TwitterUserCol>

              <DiscordUserText>
                <DiscordUserRow>
                  <DiscordUser>Patrick Torres</DiscordUser>
                  <DiscordSub>@PatrickTorres</DiscordSub>
                </DiscordUserRow>
                <DiscordExperience>
                  I like to make things, meet new people, build communities,
                  create, collect art, and constantly learn!🧵
                </DiscordExperience>
              </DiscordUserText>
            </DiscordUserContainer>
          </CommentContainer>

          <InterestContainer>
            <DeliverDynamic ref={interestsRef}>Interests in</DeliverDynamic>
            <AikoContainer>
              <MagnifyImg src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/512/external-magnifying-glass-digital-marketing-smashingstocks-glyph-smashing-stocks.png" />
              <TextContainer>
                <AikoTitle>#WebDevelopment</AikoTitle>
                <InterestsOverlay />
              </TextContainer>
            </AikoContainer>
          </InterestContainer>
        </Profile>
      </LinkedInPanel>

      <DiscordPanel>
        <ProfileNameContainer>
          <ProfilePic ref={pfpRef}>
            {nfts.map((nft: NftType) => (
              <Animation4NFTs key={nft.id} nft={nft} />
            ))}
          </ProfilePic>
        </ProfileNameContainer>
      </DiscordPanel>
    </AnimationContainer>
  );
};

export default Animation4;
