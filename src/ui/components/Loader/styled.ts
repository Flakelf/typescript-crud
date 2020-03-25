import styled, { keyframes } from 'styled-components';

const colorByType = {
  0: '#fff transparent #fff transparent;',
  1: 'red transparent green transparent;',
};

const keyFramesSS = keyframes`
    0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

export const HourGlass = styled.div<{ coolColored?: boolean }>`
  display: block;

  ::after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    border: 16px solid #fff;
    animation: ${keyFramesSS} 1.2s infinite;

    border-color: ${(p): string => (!p.coolColored ? colorByType[0] : colorByType[1])};
  }
`;
