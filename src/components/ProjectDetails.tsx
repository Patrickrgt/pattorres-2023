import styled, { css, keyframes } from "styled-components";
import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import aikoImg from "../assets/img/aiko.png";
import aikoImg2 from "../assets/img/aiko2.png";

import salvexImg from "../assets/img/salvex.png";
import salvexImg2 from "../assets/img/salvex2.png";

import wellnessImg from "../assets/img/wellness.png";
import wellnessImg2 from "../assets/img/wellness2.png";

import pso2Img from "../assets/img/pso2.png";

import shvrkboyImg from "../assets/img/shvrkboy.png";
import shvrkboyImg2 from "../assets/img/shvrkboy2.png";

import psycheImg from "../assets/img/psyche.png";

import web from "../assets/img/web.svg";
import github from "../assets/img/github.svg";
import alpha from "../assets/img/alpha.png";

const aiko = {
  name: "AIKO VIRTUAL",
  color: "#A2C5F5",
  image: aikoImg2,
  position: "Software Engineer",
  git: "https://github.com/Patrickrgt/shvrkboy",
  web: "http://shvrkboy.com/",
  video: "https://www.youtube.com/embed/ULNwFGzzqN8",
  description:
    "Aiko Virtual is a project that presents a collection of 8,888 non-fungible tokens, embodying the 'Cyber Cute' aesthetic - a fusion of futuristic technology and anime influences, resulting in a distinct and widely appealing appearance. Our objective is to establish a premium concept that bridges the gap between art, fashion, the digital realm, and the physical realm, as well as between Eastern and Western cultures. The Aikos represent an unprecedented concept, brimming with backstory and customization options. For further information, please visit our website at https://aikovirtual.com.",
  tabs: ["Role", "Team", "Skills"],
  role: ["💻Software Engineer", "🗣️Community Manager"],
  team: [
    "🎨Vinne",
    "🎨Kyo",
    "🎨Garrid",
    "🎨Crystal",
    "🗣️Matarelli",
    "‍💻Shvrkboy",
    "‍💻Kiwi",
    "‍💻Chase",
  ],
  skills: [
    "⚛️React",
    "✏️Typecript",
    "💅Styled-Components",
    "👥Discord.js",
    "👜useDApp",
    "👛Ethers",
    "📝SQLite",
  ],
  problem: null,
  solution: null,
  purpose:
    "I had the opportunity to receive guidance and acquire knowledge from seasoned veterans in the cryptocurrency industry, Kiwi and Chase, on the development of decentralized applications utilizing web3 technology. I also developed bots for the Community platform Discord, aimed at delivering immersive and engaging user experiences across the web and social media platforms. \n \n Implemented an interactive Discord bot that was used to incentivize user participation and engagement through the use of rewards. \n \n Developed a web app using React, Styled-Components, and useDApp frameworks that allowed users to view and redeem NFT stamps for prizes in a rewards program. \n \n Created a set of personality quizzes using JavaScript, which were used to match users with shared interests and facilitate connection-building within the community.",
  footerImage: aikoImg,
};

const salvex = {
  name: "salvex",
  color: "#B4B0FF",
  image: salvexImg,
  position: "UX / UI / Full-Stack",
  git: "https://github.com/Patrickrgt/SALVEX",
  web: "https://www.asksalvex.com/",
  video: "https://youtube.com/embed/dZeNel6Wexw",
  description:
    "Health focused project that applied leadership abilities under group setting, understanding of algorithm design and application integration of a populated database of 3000+ entries.",
  tabs: ["Role", "Team", "Skills"],
  role: ["💻Full Stack Developer", "🖥️UX / UI Development"],
  team: ["😊Isabella M.", "😊Patrick T.", "😊Maria-Victoria V", "😊Matthew W"],
  skills: ["⚛️React", "🚆Express", "🕷️Puppeteer", "🏢Firebase", "☁️Firestore"],
  problem:
    "Inability to find timely and adequate healthcare because of inconsistent self-diagnosis tools and feedback without a clear track to find healthcare providers who can assist.",
  solution:
    "Salvex is a self-diagnosis tool which maps user committed symptoms to matched diseases based on a calculated probability and returns the resultant disease and its definition to the user. The symptoms offered for user commitment and the diseases returned are ranked by the order of the calculated probability to help guide user input and to satisfy the requirement of consistent results. Creating using React, Cloud Firestore, Firebase Cloud Functions and Puppeteer. Most challenging part was the algorithm design to determine probability of a diesease based off user symtpoms. We calculate the matched disease based on a reoccuring sum of the symptom occurrence in respect to the disease by dividing by the overall disease occurance. At the end of the calculation we multiply by one hundred to get a percentage. This percentage is documented for each of the matching diseases based on the user symptom list.",
  purpose: null,
  footerImage: salvexImg2,
};

const wellness = {
  name: "wellness",
  color: "#FF9C48",
  image: wellnessImg2,
  position: "UX / UI / Full-Stack",
  git: "https://github.com/Patrickrgt/CSCI665-GroupProject-WellnessApp",
  web: null,
  video: "https://www.youtube.com/embed/wZ9qdlRrBF8",
  description:
    "Web application that uses Spoonacular API where users can plan their meals by ingredient, set number of calories for each meal, and get recipe suggestions from their friends to stay motivated.    ",
  tabs: ["Role", "Team", "Skills"],
  role: ["💻Full Stack Developer", "🖥️UX / UI Development"],
  team: ["😊Patrick T."],
  skills: ["🅰️Angular", "🥄SpoonacularAPI"],
  problem:
    "The problem we aim to solve with this project is that planning daily meals can be a time-consuming and tedious task for many individuals. Users often have specific dietary restrictions or preferences, such as calorie intake or specific ingredients, but have difficulty finding recipes that meet those requirements. Furthermore, many people lack motivation to stick to their meal plans. Our proposed solution is a web application that allows users to easily plan their daily meals by setting calorie and ingredient requirements and providing recipe suggestions from other users that they can follow for motivation.",
  solution:
    "The solution proposed by WellnessApp is a web application that helps users find and maintain a healthy diet by providing tools to filter and view recipes based on desired calorie intake and ingredients. The application also includes a social feature that allows users to add friends and share recipe suggestions, providing motivation to try new recipes and eat healthier. The overall purpose of the application is to inspire users to take control of their diet and make healthy choices.",
  purpose: null,
  footerImage: wellnessImg,
};

const pso2db = {
  name: "PSO2 TICKET DATABASE",
  color: "#467DD2",
  image: pso2Img,
  position: "UX / UI / Full-Stack",
  git: "https://github.com/Patrickrgt/pso2db",
  web: null,
  video: "https://www.youtube.com/embed/n7PzEkzTNds",
  description:
    "Consumer driven project with updating database that scrapes new information off several webpages using in-house API.    ",
  tabs: ["Role", "Team", "Skills"],
  role: ["💻Full Stack Developer", "🖥️UX / UI Development"],
  team: ["😊Patrick T."],
  skills: ["⚛️React", "🚆Express", "🕷️Puppeteer", "🏢Firebase", "☁️Firestore"],
  problem:
    "Phantasy Star Online 2 is a game that has thousands of cosmetic items, which can be overwhelming for new players. The player marketplace and Scratch Ticket events make it hard for players to find the perfect item and often regret their purchases. The website for searching for items is not user-friendly and there is no real filter system offered. Our motivation is to improve the user experience by offering a one-page web display integrated with a dynamic database of items to filter through, saving the player time.",
  solution:
    "The solution for Phantasy Star Online 2 is to create an application that utilizes a database to store cosmetic items and allows players to filter through them using keyword or group values. This will improve the player's experience by making it easier for them to find the items they are looking for, and provide them with information about the item's name and set. This application will also allow players to research items within the in-game market more easily.",
  purpose: null,
  footerImage: pso2Img,
};

const shvrkboy = {
  name: "SHVRKBOY sneakers",
  color: "#7CA9D3",
  image: shvrkboyImg,
  position: "UX / UI / Full-Stack",
  git: "https://github.com/Patrickrgt/shvrkboy",
  web: "http://shvrkboy.com/",
  video: null,
  description:
    "Business related project with applied understanding of web scraping, API creation and cloud functions.",
  tabs: ["Role", "Team", "Skills"],
  role: ["💻Full Stack Developer", "🖥️UX / UI Development"],
  team: ["😊Patrick T."],
  skills: ["⚛️React", "🕷️Puppeteer", "🐦TwitterAPI"],
  problem: null,
  solution: null,
  purpose:
    "SHVRKBOY Focuses on my journey as a reseller with an ABOUT section that highlights how I started, TESTIMONIALS to prove legitamacy, SALES that fetches revenue from several third-party platforms, and FUTURE that discuesses where I see myself in five years. Both desktop and mobile designs are curated with unique paralax experiences. For best experience please view on desktop. Created using React.js, Express.js, Heroku, Cloud Firestore, Firebase Cloud Functions, and Puppeteer. Hardest challenge was scraping Twitter to create an in-house API to fetch for replies under a tweet. Learned that Puppeteer works for logins as well and can bypass more secured logins that prevent automation with the Puppeteer-extra-stealth library.  ",
  footerImage: shvrkboyImg2,
};

const psycheofpat = {
  name: "Psyche of Pat",
  color: "#FAC80E",
  image: psycheImg,
  position: "UX / UI / Full-Stack",
  git: "https://github.com/Patrickrgt/Psyche-of-Pat",
  web: "https://psycheofpat.com/",
  video: null,
  description:
    "Personal project that reinforced stronger understanding of CSS web layouts.    ",
  tabs: ["Role", "Team", "Skills"],
  role: ["💻Full Stack Developer", "🖥️UX / UI Development"],
  team: ["😊Patrick T."],
  skills: ["⚛️React"],
  problem: null,
  solution: null,
  purpose:
    "PSYCHEOFPAT is a website curated towards my favorite pieces of media. There I include a scrollable navigation of the media with the STORY, my THOUGHTS, and REVIEW of each piece. Developed a stronger understanding of flexbox and transitions using React without excessive need of other libraries. Heightened confident in manipulating the DOM, React states and refractoring.    ",
  footerImage: psycheImg,
};

const ProjectContainer = styled.div`
  margin-top: 125px;
  display: flex;
  width: 80%;
  z-index: 1;
  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

const SolutionOuterContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  width: 80%;
`;

const ProjectRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectCol = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ProjectTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectTitle = styled.div<ColorProps>`
  color: #ffffff;
  font-size: 4.25rem;
  text-transform: uppercase;
  font-weight: 800;
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: fit-content;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.75rem;
    bottom: 0;
    left: 0;
    background-color: ${(props) => `${props.color}`};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const ProjectRole = styled.div`
  color: #757575;
  font-size: 2.75rem;
  transition: color 0.25s ease-out;
  cursor: none;
  &:hover {
    color: #ffffff;
  }
`;

const RoleRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProjectWeb = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 1rem;
  color: #757575;
  font-size: 2.75rem;
  transition: color 0.25s ease-out;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
`;

const ProjectGit = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 1rem;
  color: #757575;
  font-size: 2.75rem;
  transition: color 0.25s ease-out;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
`;

const ProjectDescription = styled.div<ColorProps>`
  border: 1px solid ${(props) => `${props.color}`};
  border-radius: 5px;
  background-color: #212121;
  width: fit-content;
  font-size: 1.75rem;
  padding: 0.5rem 1.5rem 1rem 1.5rem;
  color: #757575;
  transition: color 0.25s ease-out;
  cursor: none;
  min-width: 470px;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const ProjectPartsContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  width: 90%;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const PartsContainer = styled.div`
  width: 90%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Parts = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
`;

const PartsTab = styled.div<ColorProps>`
  font-size: 3rem;
  color: ${(props: ColorProps) => (props.active ? "#ffffff" : "#757575")};
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: fit-content;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.5rem;
    bottom: 0;
    left: 0;
    background-color: ${(props) => `${props.color}`};
    transform-origin: bottom right;
    transition: transform 0.1s ease-out;
  }

  &:hover {
    color: #ffffff;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const RoleDescription = styled.div<ColorProps>`
  border: 1px solid ${(props) => `${props.color}`};
  border-radius: 5px;
  background-color: #212121;
  padding: 0.5rem 1.5rem 1rem 1.5rem;
`;

const RoleText = styled.p`
  width: fit-content;
  font-size: 1.75rem;
  color: #757575;
  transition: color 0.25s ease-out;
  cursor: none;
  &:hover {
    color: #ffffff;
  }
`;

const Team = styled.div`
  font-size: 2.75rem;
  color: #ffffff;
  margin: 0 2rem;
`;

const Skills = styled.div`
  font-size: 2.75rem;
  color: #ffffff;
`;

const VideoBackground = styled.div<ColorProps>`
  position: relative;
  padding: 4rem;
  border-radius: 5px;
  border: 1px solid ${(props) => `${props.color}`};

  &:before {
    transition: opacity 0.25s ease-in-out;
    content: "";
    background-image: url(${alpha});
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.25;
    z-index: 0;
  }

  &:hover::before {
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

const ProjectVideo = styled.iframe<ColorProps>`
  display: flex;
  position: relative;
  margin: auto;
  width: fit-content;
  height: 375px;
  width: 175px;
  border-radius: 5px;
  border: 1px solid ${(props) => `${props.color}`};
`;

const ProjectImgContainer = styled.div<ColorProps>`
  display: flex;
  height: 100%;
  position: relative;
  border: 1px solid ${(props) => `${props.color}`};
  border-radius: 5px;
  margin: auto;

  &:before {
    content: "";
    transition: opacity 0.25s ease-in-out;
    background-image: url(${alpha});
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.25;
    z-index: 0;
  }

  &:hover::before {
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

const ProjectImg = styled.img`
  position: relative;
  width: 90%;
  margin: auto;
  border: 1px solid ${(props) => `${props.color}`};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProblemTitle = styled.div`
  font-size: 2.75rem;
  color: #757575;
  cursor: none;
  transition: color 0.25s ease-out;
  &:hover {
    color: #ffffff;
  }
`;

const ProjectProblem = styled.div<ColorProps>`
  border: 1px solid ${(props) => `${props.color}`};
  border-radius: 5px;
  background-color: #212121;
  width: 90%;
  font-size: 1.75rem;
  padding: 0.5rem 1.5rem 1rem 1.5rem;
  color: #757575;
  transition: color 0.25s ease-out;
  cursor: none;
  &:hover {
    color: #ffffff;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProblemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  z-index: 1;
`;

const SolutionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  z-index: 1;
`;

const SolutionTitle = styled.div`
  font-size: 2.75rem;
  color: #757575;
  cursor: none;
  transition: color 0.25s ease-out;
  &:hover {
    color: #ffffff;
  }
`;

const ProjectSolution = styled.div<ColorProps>`
  border: 1px solid ${(props) => `${props.color}`};
  border-radius: 5px;
  background-color: #212121;
  font-size: 1.75rem;
  padding: 0.5rem 1.5rem 1rem 1.5rem;
  color: #757575;
  transition: color 0.25s ease-out;
  cursor: none;
  &:hover {
    color: #ffffff;
  }
`;

const Footer = styled.div<ColorProps>`
  margin: 4rem 0 2rem 0;
  padding-top: 1rem;
  font-size: 1.5rem;
  color: #646464;
  border-top: 1px solid ${(props) => `${props.color}`};
  width: 100%;
  text-align: center;
  z-index: 1;
  transition: all ease 0.25s;
  &:hover {
    color: #ffffff;
  }
  @media (max-width: 768px) {
    padding-bottom: 6rem;
  }
`;

interface ColorProps {
  active?: boolean;
  color: string;
}

const ProjectDetails = () => {
  const [activeTab, setTab] = useState(0);

  let { project } = useParams();
  let projectObj: any = {};
  switch (project) {
    case "aiko":
      projectObj = aiko;
      break;
    case "salvex":
      projectObj = salvex;
      break;
    case "wellness":
      projectObj = wellness;
      break;
    case "pso2db":
      projectObj = pso2db;
      break;
    case "shvrkboy":
      projectObj = shvrkboy;
      break;
    case "psycheofpat":
      projectObj = psycheofpat;
      break;
    default:
      projectObj = project;
  }

  return (
    <>
      <ProjectContainer>
        <ProjectRow>
          <ProjectCol>
            <ProjectTitleContainer>
              <ProjectTitle color={projectObj.color}>
                {projectObj.name}
              </ProjectTitle>
              <RoleRow>
                <ProjectRole>{projectObj.position}</ProjectRole>
                {projectObj.web && (
                  <ProjectWeb
                    onClick={() => {
                      window.open(projectObj.web);
                    }}
                    src={web}
                  ></ProjectWeb>
                )}

                {projectObj.git && (
                  <ProjectGit
                    onClick={() => {
                      window.open(projectObj.git);
                    }}
                    src={github}
                  ></ProjectGit>
                )}
              </RoleRow>

              <ProjectDescription color={projectObj.color}>
                {projectObj.description}
              </ProjectDescription>
            </ProjectTitleContainer>

            <ProjectRow>
              <ProjectPartsContainer>
                <ProjectCol>
                  <PartsContainer>
                    <Parts>
                      {projectObj.tabs.map((tab: string, id: number) => (
                        <PartsTab
                          active={activeTab == id}
                          onClick={() => {
                            setTab(id);
                            console.log(activeTab);
                          }}
                          color={projectObj.color}
                        >
                          {tab}
                        </PartsTab>
                      ))}
                    </Parts>
                    {activeTab === 0 && (
                      <RoleDescription color={projectObj.color}>
                        {projectObj.role.map((roleString: string) => (
                          <RoleText>{roleString}</RoleText>
                        ))}
                      </RoleDescription>
                    )}
                    {activeTab === 1 && (
                      <RoleDescription color={projectObj.color}>
                        {projectObj.team.map((roleString: string) => (
                          <RoleText>{roleString}</RoleText>
                        ))}
                      </RoleDescription>
                    )}
                    {activeTab === 2 && (
                      <RoleDescription color={projectObj.color}>
                        {projectObj.skills.map((roleString: string) => (
                          <RoleText>{roleString}</RoleText>
                        ))}
                      </RoleDescription>
                    )}
                  </PartsContainer>
                </ProjectCol>

                <ProjectCol>
                  {projectObj.video && (
                    <VideoBackground color={projectObj.color}>
                      <ProjectVideo
                        color={projectObj.color}
                        src={projectObj.video}
                      />
                    </VideoBackground>
                  )}
                </ProjectCol>
              </ProjectPartsContainer>
            </ProjectRow>
            <ProjectCol>
              {projectObj.solution && (
                <>
                  <ProblemContainer>
                    <ProblemTitle>Problem</ProblemTitle>
                    <ProjectProblem color={projectObj.color}>
                      {projectObj.problem}
                    </ProjectProblem>
                  </ProblemContainer>
                </>
              )}
            </ProjectCol>
          </ProjectCol>
          <ProjectCol>
            <ProjectImgContainer color={projectObj.color}>
              <ProjectImg src={projectObj.image} />
            </ProjectImgContainer>
          </ProjectCol>
        </ProjectRow>
      </ProjectContainer>
      <SolutionOuterContainer>
        <ProjectRow>
          <ProjectCol>
            <SolutionContainer>
              {projectObj.solution && (
                <>
                  <SolutionTitle>Solution</SolutionTitle>
                  <ProjectSolution color={projectObj.color}>
                    {projectObj.solution}
                  </ProjectSolution>
                </>
              )}
              {projectObj.purpose && (
                <>
                  <SolutionTitle>Purpose</SolutionTitle>
                  <ProjectSolution color={projectObj.color}>
                    {projectObj.purpose}
                  </ProjectSolution>
                </>
              )}
            </SolutionContainer>

            <ProjectImgContainer color={projectObj.color}>
              <ProjectImg src={projectObj.footerImage} />
            </ProjectImgContainer>
          </ProjectCol>
        </ProjectRow>
      </SolutionOuterContainer>
      <Footer color={projectObj.color}>
        Made with love, React, Styled-Components, and Typescript by Patrick
        Torres
      </Footer>
    </>
  );
};

export default ProjectDetails;
