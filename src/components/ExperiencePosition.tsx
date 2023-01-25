import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { css, keyframes } from "styled-components";
import hashtag from "../assets/img/hashtag.svg";

import { setChannelActive, selectChannelActive } from "../state/uiSlice";

export interface PositionType {
  li: number;
  title: string;
  date: string;
  color: string;
  pfp: string;
  descriptionText: string;
}

const PositionOuterCol = styled.div`
  transition: left ease 0.25s;
  display: ${(props: ChannelProps) => (props.active ? "flex" : "none")};
  flex-direction: column;
  padding: 2rem 0.75rem 2rem 0;
  background-color: #36393f;

  @media (max-width: 768px) {
    position: absolute;
    left: 100%;
  }
`;

const PfpCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  justify-content: flex-start;
`;

const PositionCol = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  min-width: 360px;
  max-height: 320px;
  min-height: 320px;
  @media (max-width: 768px) {
    max-width: 310px;
    min-width: 310px;
  }
`;

const PositionRow = styled.div`
  display: flex;
`;

const PositionDescRow = styled.div`
  display: flex;
  align-items: baseline;
`;

const PositionPfp = styled.img<ChannelProps>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const PositionTitle = styled.div<ChannelProps>`
  font-size: 1.75rem;
  color: ${(props) => props.color};
  font-weight: 800;
`;

const PositionDates = styled.div`
  color: #adbbbe;
  font-size: 1.25rem;
  margin-left: 1rem;
`;

const PositionDesc = styled.div`
  color: #ffffff;
  word-wrap: break-word;
  white-space: pre-line;
  padding-right: 0.5rem;

  font-size: 1.75rem;
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 25px;
  }
  ::-webkit-scrollbar-track {
    background: #2e3338;
  }
  ::-webkit-scrollbar-thumb {
    background: #202225;
  }
`;

interface ChannelProps {
  active?: boolean;
  color?: string;
}

interface Props {
  position: PositionType;
  active: boolean;
}

const ExperiencePosition = ({ active, position }: Props) => {
  const channelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isChannelActive = useSelector(selectChannelActive);
  const dispatch = useDispatch();

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  let currentChannel = channelRef!.current;
  function handleTouchStart(e: any) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  useEffect(() => {
    if (isChannelActive && currentChannel) {
      currentChannel!.style.transition = `left ease 0.25s`;
      currentChannel!.style.left = "100%";
      const leftTimeout = setTimeout(() => {
        currentChannel!.style.left = "0%";
      }, 50);
      return () => clearTimeout(leftTimeout);
    } else if (currentChannel) {
      currentChannel!.style.transition = `left ease 0.25s`;
      currentChannel!.style.left = "100%";
    }
  }, [isChannelActive]);

  function handleTouchMove(e: any) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd < 300) {
    }

    if (touchStart - touchEnd < -50) {
      currentChannel!.style.transition = `left ease 0.25s`;
      currentChannel!.style.left = `100%`;
      dispatch(setChannelActive(false));
    }
  }

  return (
    <PositionOuterCol
      onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
      onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
      onTouchEnd={() => handleTouchEnd()}
      ref={channelRef}
      active={active}
    >
      <PositionRow>
        <PfpCol>
          <PositionPfp color={position.color} src={position.pfp} />
        </PfpCol>
        <PositionCol>
          <PositionDescRow>
            <PositionTitle color={position.color}>
              {position.title}
            </PositionTitle>
            <PositionDates ref={textRef}>{position.date}</PositionDates>
          </PositionDescRow>

          <PositionDesc ref={textRef}>{position.descriptionText}</PositionDesc>
        </PositionCol>
      </PositionRow>
    </PositionOuterCol>
  );
};

export default ExperiencePosition;
