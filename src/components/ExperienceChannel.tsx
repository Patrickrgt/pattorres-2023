import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import hashtag from "../assets/img/hashtag.svg";

import {
  setPositionActiveId,
  selectPositionActiveId,
  setChannelActive,
} from "../state/uiSlice";

export interface PositionType {
  li: number;
  title: string;
  date: string;
  color: string;
  pfp: string;
  descriptionText: string;
}

const Container = styled.div`
  display: flex;
`;

const ExperienceCol = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  min-width: 280px;
`;

const ExperienceText = styled.div`
  color: #ffffff;
  font-size: 2.25rem;
  font-weight: 800;
`;

const HashTagImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

const PositionTab = styled.div`
  text-transform: lowercase;
  font-size: 2rem;
  font-weight: 800;
  margin-left: 0.5rem;
  color: ${(props: ChannelProps) => (props.active ? "#ffffff" : "#757575")};
  &:hover {
    color: #ffffff;
  }
`;

const ExperiencePosition = styled.div`
  text-transform: lowercase;
  color: #757575;
  font-size: 1.75rem;
  font-weight: 800;
`;

const ChannelTab = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props: ChannelProps) => (props.active ? "#42464d" : "")};
  color: ${(props: ChannelProps) => (props.active ? "white" : "")};
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #42464d;
  }
  &:hover ${PositionTab} {
    color: white;
    cursor: pointer;
  }
`;

const PositionChannel = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem 1.25rem;
  margin: 0 1rem;
  cursor: pointer;
`;

const PositionOuterCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const PositionCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const PositionRow = styled.div`
  display: flex;
`;

const PositionPfp = styled.div``;

const PositionTitle = styled.div`
  font-size: 1.75rem;
`;

const PositionDates = styled.div``;

const PositionDesc = styled.div``;

interface ChannelProps {
  active: boolean;
}

interface Props {
  position: PositionType;
  active: boolean;
}

const ExperienceChannel = ({ active, position }: Props) => {
  const dispatch = useDispatch();
  const activeLi = useSelector(selectPositionActiveId);

  return (
    <Container>
      <ExperienceCol>
        <ChannelTab
          onClick={async () => {
            dispatch(await setChannelActive(true));
            dispatch(await setPositionActiveId(position.li));
          }}
          active={activeLi == position.li}
        >
          <PositionChannel>
            <HashTagImg src={hashtag} />
            <PositionTab active={activeLi == position.li}>
              {position.title}
            </PositionTab>
            <ExperiencePosition></ExperiencePosition>
          </PositionChannel>
        </ChannelTab>
      </ExperienceCol>
    </Container>
  );
};

export default ExperienceChannel;
