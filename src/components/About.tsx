import styled from "styled-components";
import { useState } from "react";
import aboutmefull from "../assets/img/aboutmefull.jpg";
import aboutme2full from "../assets/img/aboutme2full.png";
import con1 from "../assets/img/con1.jpg";
import con2 from "../assets/img/con2.jpg";
import con3 from "../assets/img/con3.jpg";
import con4 from "../assets/img/con4.jpg";
import con5 from "../assets/img/con5.jpg";

const images = [con1, con2, con3, con4, con5];

const AboutRelativeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;

  @media (max-width: 768px) {
    padding: 7.5rem 0;
  }
`;

const AboutContainer = styled.div`
  border-radius: 2.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid grey;
  z-index: 2;
  width: 80%;
  padding: 4rem 0;
  background-color: #000000;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const JumboRow = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  position: relative;
  height: 80%;
  width: 80%;
  @media (max-width: 768px) {
    margin: 0 0 3rem 0;
  }
`;

const AboutImg = styled.img`
  opacity: ${(props: AboutProps) => (props.active ? "0" : "1")};
  position: relative;
  transition: all ease 0.25s;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid white;
`;

const HoverImg = styled.img`
  opacity: ${(props: AboutProps) => (props.active ? "1" : "0")};
  border-radius: 5px;
  border: 1px solid white;
  transition: all ease 0.25s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0 0 0 1.15rem;
  }
`;

const Header = styled.h1`
  color: #ffffff;
  font-size: 3rem;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.h2`
  color: #ffffff;
  font-size: 1.75rem;
  text-align: left;
  font-weight: 400;
  margin-right: 1rem;
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GalleryHeader = styled.h1`
  margin-bottom: 1rem;
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
    background-color: #525252;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const GalleryColumn = styled.div`
  z-index: 1;
  width: 80%;
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ConventionContainer = styled.div`
  padding: 2.25rem;
  border: ${(props: AboutProps) =>
    props.active ? "2px solid white" : "2px solid transparent"};
  transition: border ease-in-out 0.25s;
  cursor: none;
`;

const Convention = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 5px;
`;

const Footer = styled.div`
  margin: 4rem 0 2rem 0;
  padding-top: 1rem;
  font-size: 1.5rem;
  color: #646464;
  border-top: 1px solid white;
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

interface AboutProps {
  active: boolean;
}

const About = () => {
  const [active, setActive] = useState(false);
  const [imageNum, setImageNum] = useState(0);

  return (
    <>
      <AboutRelativeContainer>
        <AboutContainer>
          <JumboRow>
            <ImgContainer>
              <HoverImg active={active} src={aboutme2full} />

              <AboutImg
                active={active}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                src={aboutmefull}
              />
            </ImgContainer>
          </JumboRow>
          <JumboRow>
            <TextColumn>
              <Header>
                Hey there! 👋
                <br />
                I'm Pat, a Full-Stack Developer based in NYC. 🗽
              </Header>
              <Description>
                I have recently graduated with Bachelor of Science in Computer
                Science, with a focus on Big Data Management and Analytics, from
                the New York Institute of Technology. Currently, I am pursuing
                my Masters of Science in Computer Science.
                <br />
                <br />
                My passion lies in building products through collaboration with
                diverse teams and communities. I have a strong commitment to
                helping bring visions to reality through partnerships with
                artists, developers, and leaders.
                <br />
                <br />
                I have had the privilege of working with renowned artists Vinne
                and Kyo to create the Aiko Virtual NFT collection. Additionally,
                I have also gained experience in entrepreneurship through
                running an LLC focused on the sales of limited edition sneakers
                and apparel. During my time as a Community Manager at Aiko
                Virtual, I learned the importance of staying connected and
                building relationships with other creatives in the NFT space.
                <br />
                <br />I possess a broad range of skills in frontend, backend,
                and database technologies, with a focus on full-stack
                development. I am always seeking new challenges and
                opportunities to expand my knowledge and expertise.
                <br />
                <br />
                Aside from programing and web development, I have a passion for:
                <br />
                Digital Art 🎨
                <br />
                Music Production 🎵
                <br />
                Graphic Design 🎨
              </Description>
            </TextColumn>
          </JumboRow>
        </AboutContainer>
      </AboutRelativeContainer>
      <Container>
        <GalleryColumn>
          <GalleryHeader>Convention Gallery</GalleryHeader>

          <GalleryContainer>
            {images.map((image, i) => (
              <ConventionContainer key={i} active={imageNum === i}>
                <Convention
                  onMouseEnter={() => setImageNum(i)}
                  onMouseLeave={() => setImageNum(-1)}
                  src={image}
                />
              </ConventionContainer>
            ))}
          </GalleryContainer>
        </GalleryColumn>
      </Container>
      <Footer>
        Made with love, React, Styled-Components, and Typescript by Patrick
        Torres
      </Footer>
    </>
  );
};

export default About;
