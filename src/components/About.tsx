import styled from "styled-components";
import { useState } from "react";
import aboutmefull from "../assets/img/aboutmefull.jpg";
import aboutme2full from "../assets/img/aboutme2full.png";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid grey;
  z-index: 2;
  width: 80%;
  height: 80%;
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
  font-size: 2rem;
  text-align: left;
  font-weight: 400;
  margin-right: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

interface AboutProps {
  active: boolean;
}

const About = () => {
  const [active, setActive] = useState(false);

  return (
    <Container>
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
            Science, with a focus on Big Data Management and Analytics, from the
            New York Institute of Technology. Currently, I am pursuing my
            Masters of Science in Computer Science.
            <br />
            <br />
            My passion lies in building products through collaboration with
            diverse teams and communities. I have a strong commitment to helping
            bring visions to reality through partnerships with artists,
            developers, and leaders.
            <br />
            <br />
            I have had the privilege of working with renowned artists Vinne and
            Kyo to create the Aiko Virtual NFT collection. Additionally, I have
            also gained experience in entrepreneurship through running an LLC
            focused on the sales of limited edition sneakers and apparel. During
            my time as a Community Manager at Aiko Virtual, I learned the
            importance of staying connected and building relationships with
            other creatives in the NFT space.
            <br />
            <br />I possess a broad range of skills in frontend, backend, and
            database technologies, with a focus on full-stack development. I am
            always seeking new challenges and opportunities to expand my
            knowledge and expertise.
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
    </Container>
  );
};

export default About;
