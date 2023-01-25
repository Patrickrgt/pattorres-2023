import styled, { css, keyframes } from "styled-components";
import { ReactNode, useEffect, useState, useRef } from "react";

export interface NftType {
  image?: string;
  id: number;
}

const rotateAnimation1 = keyframes`
 100% {
  transform:rotate(1turn) translate(250px) rotate(-1turn);
  }
`;

const DiscordCircle = styled.img<NFTProps>`
  flex: 1;
  text-align: center;
  transform: rotate(0) translate(250px) rotate(0);
  background-color: #f10909;
  width: var(--pfp-small);
  height: var(--pfp-small);
  border-radius: 50%;
  position: absolute;
  animation: ${rotateAnimation1} 6s linear infinite;
  animation-delay: ${(props) =>
    `calc(${props.nftId}s + var(--animation-3-delay-length))`};
`;

interface NFTProps {
  nftId: number;
}

interface Props {
  nft: NftType;
}

const Animation4NFTs = ({ nft }: Props) => {
  return <DiscordCircle nftId={nft.id} src={nft.image} />;
};

export default Animation4NFTs;
