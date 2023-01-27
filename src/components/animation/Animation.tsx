import styled from "styled-components";
import Animation1 from "./Animation1";
import Animation2 from "./Animation2";
import Animation3 from "./Animation3";
import Animation4 from "./Animation4";
import Animation5 from "./Animation5";

const AnimationContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimationInner = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 2.5rem;
  background-color: #000000;
  position: relative;
`;

const Animation = () => {
  return (
    <AnimationContainer>
      <AnimationInner>
        <Animation5 />
        <Animation4 />
        <Animation3 />
        <Animation2 />
        <Animation1 />
      </AnimationInner>
    </AnimationContainer>
  );
};

export default Animation;
