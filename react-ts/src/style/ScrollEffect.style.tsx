import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root * {
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }

  body {
    overflow-x: hidden;
  }
`;

export const mainAnimation = keyframes`
  to {
    background-color: rgb(116,123,255)
  }
`;

export const progressAnimation = keyframes`
  to {
    background-color: white;
    width: 100%;
  }
`;

export const cubeAnimation = keyframes`
  to {
    transform: rotateX(360deg) rotateZ(45deg) rotateY(-45deg);
  }
`;

export const CubeWrap = styled.div`
  --size: 30vmin;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  perspective: 100vmin;
`;

export const Cube = styled.div`
  transform-style: preserve-3d;
  transform: rotateX(0deg) rotateZ(45deg) rotateY(-45deg);
  animation: ${cubeAnimation} 1s linear;
`;

export const Side = styled.div`
  position: absolute;
  width: var(--size);
  height: var(--size);
  background-color: #eee;
  backface-visibility: visible;
  top: calc(var(--size) * -0.5);
  left: calc(var(--size) * -0.5);

  &.top {
    background-color: #fff;
    transform: rotateX(90deg) translateZ(calc(var(--size) * 0.5));
  }

  &.bottom {
    background-color: #999;
    transform: rotateX(90deg) translateZ(calc(var(--size) * -0.5));
  }

  &.left {
    background-color: #ccc;
    transform: rotateY(90deg) translateZ(calc(var(--size) * 0.5));
  }

  &.right {
    background-color: #ddd;
    transform: rotateY(90deg) translateZ(calc(var(--size) * -0.5));
  }

  &.front {
    background-color: #aaa;
    transform: translateZ(calc(var(--size) * 0.5));
  }

  &.back {
    background-color: #bbb;
    transform: translateZ(calc(var(--size) * -0.5));
  }
`;

export const ScrollEffectMain = styled.main`
  padding: 0;
  margin: 0;
  min-height: 1000vh;
  animation: ${mainAnimation} 1s linear;
`;

export const Progress = styled.div`
  height: 3px;
  width: 0%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  animation: ${progressAnimation} 1s linear;
`;