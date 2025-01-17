import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import discord from "../assets/img/discord.jpg";

import {
  setExperienceActiveId,
  selectExperienceActiveId,
  setPositionActiveId,
} from "../state/uiSlice";

import ExperienceServer, { ExperienceType } from "./ExperienceServer";

import shvrkboylogo from "../assets/img/shvrkboylogo.png";
import shvrklogo from "../assets/img/shvrklogo.png";
import shvrklogo2 from "../assets/img/shvrklogo2.png";
import aikologo from "../assets/img/aiko-logo.png";
import p2plogo from "../assets/img/p2plogo.png";

import meepocoin from "../assets/img/meepocoin.png";
import stampstar from "../assets/img/stampstar.png";

import yachiyopfp from "../assets/img/yachiyopfp.png";

export const experience: ExperienceType[] = [
  {
    id: 0,
    company: "Ecommerce Developer",
    image: shvrklogo,
    color: "#98e3ff",
    position: ["Developer"],
    description: [
      {
        li: 0,
        title: "Fullstack Developer",
        date: "02/2023 - Present",
        color: "#98e3ff",
        pfp: shvrklogo2,
        descriptionText:
          `⦁ Developed custom e-commerce platforms for high-profile artists and brands on Shopify's Hydrogen stack, achieving over $250,000 in gross revenue for Hex Termina in 2024. Implemented innovative product authentication features and immersive design elements that set new standards for e-commerce aesthetics. \n \n⦁ Collaborated with renowned artists and brands, leveraging significant social media followings (e.g., 500,000 Instagram followers, 1M YouTube views) to drive targeted marketing campaigns. Achieved a 40% increase in newsletter subscriptions, improved audience engagement, and 18% conversion rates during exclusive pre-launch events. \n \n⦁ Successfully launched and managed multiple e-commerce stores, generating over $200,000 in gross sales across projects. Delivered multi-branded platforms like Dangycam, which sold out in 4 minutes during its initial launch. \n \n⦁ Pioneered the implementation of headless e-commerce solutions and AI-driven tools to enhance user experience and streamline workflows. Achieved over $80,000 in sales in less than a year, driving high conversion rates for artists like Montreality and Vinne Art. \n \n⦁ Delivered creative digital marketing strategies and exclusive event activations such as "Hex List" SMS marketing. Enabled real-time alerts for pop-up locations and timed giveaways, boosting user engagement and brand loyalty.
`,
      },
    ],
    active: false,
  },
  {
    id: 1,
    company: "Aiko Virtual",
    image: aikologo,
    color: "#98e3ff",
    position: ["Developer", "Community Manager"],
    description: [
      {
        li: 1,
        title: "Software Developer",
        date: "08/2022 - Present",
        color: "#98e3ff",
        pfp: meepocoin,
        descriptionText:
          "⦁ Implemented an interactive Discord bot that was used to incentivize user participation and engagement through the use of rewards. \n \n⦁ Developed a web app using React, Styled-Components, and useDApp frameworks that allowed users to view and redeem NFT stamps for prizes in a rewards program. \n \n⦁ Created a set of personality quizzes using JavaScript, which were used to match users with shared interests and facilitate connection-building within the community.",
      },
      {
        li: 2,
        title: "Community Manager",
        date: "04/2022 - Present",
        color: "#ffaa00",
        pfp: stampstar,
        descriptionText:
          "⦁ Grew the community by over 900% through the use of Discord and Twitter Spaces.\n \n⦁ Collaborated with artists and developers to execute successful community-building and brand awareness-boosting events, with over 200 participants.\n \n⦁ Managed a team of over 10 moderators to build and maintain a positive relationship between Aiko and its community.\n \n⦁ Promoted to core team member due to exceptional performance and positive impact on the community.",
      },
    ],
    active: false,
  },
  {
    id: 2,
    company: "SHVRK LLC",
    image: shvrkboylogo,
    color: "#357CBB",
    position: ["Developer", "Community Manager"],
    description: [
      {
        li: 3,
        title: "Freelance Reseller",
        date: "08/2018 - 03/2022",
        color: "#357CBB",
        pfp: yachiyopfp,
        descriptionText:
          "⦁ Maintaining an LLC and operating a six-figure revenue business of buying and selling merchandise.",
      },
    ],
    active: false,
  },
  {
    id: 3,
    company: "Passion2Progress",
    image: p2plogo,
    color: "#1e7e17",
    position: ["Developer", "Community Manager"],
    description: [
      {
        li: 4,
        title: "Lead Designer",
        date: "09/2017 - 10/2018",
        color: "#1e7e17",
        pfp: p2plogo,
        descriptionText:
          "⦁ Designed and developed websites for non-profit organizations sponsored by NYIT using HTML and CSS. Collaborated with non-profit organizers to gather feedback and incorporate suggestions into the designs.",
      },
    ],
    active: false,
  },
];

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
`;

const BackgroundContainer = styled.div`
  background-color: #ffffff;
  padding: 8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  background-image: url(${discord});
`;

const ExperienceContainer = styled.div`
  position: relative;
  background-color: #212121;
  filter: ${(props: ExperienceProps) =>
    props.active
      ? "drop-shadow(0px 6px 3rem #212121)"
      : "drop-shadow(0px 6px 1rem #212121)"};
  transition: all ease-in-out 0.25s;
  transform: ${(props: ExperienceProps) =>
    props.active ? "translate(0, -4px);" : ""};
`;

const ExperienceTab = styled.div`
  background-color: #19191a;
`;

const ExperienceText = styled.div`
  color: #ffffff;
  font-size: 1.75rem;
  padding: 1rem;
`;

const ExperienceRow = styled.div`
  background-color: #323232;
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    max-height: 356px;
    min-height: 356px;
  }
`;

const ServerCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServerBackground = styled.div`
  background-color: #202225;
  padding: 1.25rem 2.25rem;
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Circle = styled.div`
  transition: all ease-in-out 0.25s;
  background-color: white;
  width: 15px;
  height: ${(props: ExperienceProps) => (props.expand ? "30px" : "15px")};
  border-radius: ${(props: ExperienceProps) => (props.expand ? "25%" : "50%")};
  left: 0;
  display: block;
  margin-left: -28px;
  margin-right: 0px;
  z-index: 0;
  overflow: hidden;
`;

const Server = styled.img`
  cursor: pointer;
  background-color: ${(props: ExperienceProps) => props.color};
  margin-left: 1rem;
  width: 75px;
  height: 75px;
  border-radius: ${(props: ExperienceProps) =>
    props.active ? "25px" : "50px"};
  transition: border-radius ease 0.3s;
  &:hover {
    border-radius: 25px;
  }

  ${Circle}:hover & {
    height: 30px;
    border-radius: 25%;
  }
`;

interface ExperienceProps {
  active?: boolean;
  expand?: boolean;
  color?: string;
}

const Experience = () => {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();
  const activeId = useSelector(selectExperienceActiveId);

  return (
    <>
      <Container>
        <BackgroundContainer
          onMouseLeave={() => {
            setActive(false);
          }}
        >
          <ExperienceContainer
            active={active}
            onMouseEnter={() => {
              setActive(true);
            }}
          >
            <ExperienceTab>
              <ExperienceText>Work Experience</ExperienceText>
              <ExperienceRow>
                <ServerCol>
                  {experience.map((experience, id) => (
                    <ServerBackground
                      onMouseEnter={() => {
                        setActive(true);
                      }}
                    >
                      <Circle expand={activeId === experience.id} />
                      <Server
                        color={experience.color}
                        src={experience.image}
                        onClick={async () => {
                          dispatch(await setExperienceActiveId(experience.id));
                          dispatch(
                            await setPositionActiveId(
                              experience.description[0].li
                            )
                          );
                        }}
                        active={activeId === experience.id}
                      ></Server>
                    </ServerBackground>
                  ))}
                </ServerCol>
                {experience.map((experience, id) => (
                  <ExperienceServer key={id} experience={experience} />
                ))}
              </ExperienceRow>
            </ExperienceTab>
          </ExperienceContainer>
        </BackgroundContainer>
      </Container>
    </>
  );
};

export default Experience;
