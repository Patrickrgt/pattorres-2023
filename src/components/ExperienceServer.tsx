import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import ExperienceChannel, { PositionType } from "./ExperienceChannel";
import ExperiencePosition from "./ExperiencePosition";

import { experience } from "./Experience";

import {
  setExperienceActiveId,
  selectExperienceActiveId,
  setPositionActiveId,
  selectPositionActiveId,
} from "../state/uiSlice";

export interface ExperienceType {
  id: number;
  image: string;
  color: string;
  company: string;
  position: string[];
  description: Description[];
  active: boolean;
}

export interface Description {
  li: number;
  title: string;
  date: string;
  color: string;
  pfp: string;
  descriptionText: string;
}

const ExperienceCol = styled.div`
  display: ${(props: Experience) => (props.active ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
`;

const ServerTitle = styled.div`
  box-shadow: 0px 1px 2px #0000007b;
  padding: 1.25rem 2rem;
`;

const ExperienceText = styled.div`
  color: #ffffff;
  font-size: 2.25rem;
  font-weight: 800;
`;

const CategoryRow = styled.div`
  display: flex;
  margin: 1.25rem 0.25rem;
`;

const DropDown = styled.span`
  box-sizing: border-box;
  height: 0.5vw;
  width: 0.5vw;
  border-style: solid;
  border-color: #757575;
  border-width: 0px 2px 2px 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;
  margin: 0.75rem 0.5rem 0 0.5rem;
`;

const ExperienceTab = styled.div`
  text-transform: uppercase;
  color: #757575;
  font-size: 1.75rem;
  font-weight: 800;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const PositionCol = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Experience {
  active: boolean;
}

interface Props {
  experience: ExperienceType;
  key: number;
}

const ExperienceServer = ({ experience, key }: Props) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const activeId = useSelector(selectExperienceActiveId);
  const activeLi = useSelector(selectPositionActiveId);

  return (
    <>
      <ExperienceCol active={activeId == experience.id}>
        <ServerTitle>
          <ExperienceText>{experience.company}</ExperienceText>
        </ServerTitle>
        <CategoryRow>
          <DropDown />
          <ExperienceTab>Experience</ExperienceTab>
        </CategoryRow>

        <Row>
          <Col>
            {experience.description.map((position: PositionType) => (
              <ExperienceChannel active={false} position={position} />
            ))}
          </Col>
        </Row>
      </ExperienceCol>
      <PositionCol>
        {experience.description.map((position: PositionType) => (
          <ExperiencePosition
            active={activeLi == position.li}
            position={position}
          />
        ))}
      </PositionCol>
    </>
  );
};

export default ExperienceServer;
