import { useRef, useEffect } from 'react';
import * as Styled from '../style/PinchZoom.style';
import Img from '../assets/티모.png';

interface Touch {
  identifier: number;
  clientX: number;
  clientY: number;
}

interface TouchStart {
  e: TouchEvent;
}

interface TouchMove {
  e: TouchEvent;
  onPinch: ({ zoom, x, y }: { zoom: number; x: number; y: number }) => void;
}

interface TouchEnd {
  e: TouchEvent;
}

interface TransformState {
  x: number;
  y: number;
  scale: number;
}

interface Parameters {
  screen: HTMLElement;
  target: HTMLElement;
  setState: (state: TransformState) => void;
  getState: () => TransformState;
}

function PinchZoom() {
  const screenRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const eventHistory: Touch[] = [];
  let prevDiff = -1;

  useEffect(() => {
    if (screenRef.current && targetRef.current) {
      touchInit(screenRef.current, targetRef.current);
    }
  }, []);

  const touchInit = (screen: HTMLElement, target: HTMLElement) => {
    const state: TransformState = {
      x: 0,
      y: 0,
      scale: 1,
    };

    // 타겟의 상태 값 수정 및 랜더링
    const setState = ({ x, y, scale }: TransformState) => {
      state.x = x;
      state.y = y;
      state.scale = scale;
      target.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`;
    };

    // 상태 값을 가져오는 함수
    const getState = () => state;

    pinchZoom({ screen, target, setState, getState });
  };

  const pinchZoom = ({ screen, target, setState, getState }: Parameters) => {
    target.style.transformOrigin = 'top left'; // 좌상단을 기준으로 scale 계산

    const handlePinch = ({ zoom, x: centerX, y: centerY }: { zoom: number; x: number; y: number }) => {
      if (zoom === 0) return;

      const { x, y, scale } = getState();

      const zoomWeight = 0.02;
      const nextScale = scale + (zoom > 0 ? zoomWeight : -zoomWeight);

      const biasX = ((centerX - x) * nextScale) / scale - (centerX - x);
      const biasY = ((centerY - y) * nextScale) / scale - (centerY - y);
      const nextX = x - biasX;
      const nextY = y - biasY;

      const nextState = {
        x: nextX,
        y: nextY,
        scale: nextScale,
      };

      setState(nextState);
    };

    screen.addEventListener('touchstart', e => touchStartHandler({ e }));
    screen.addEventListener('touchmove', e => touchMoveHandler({ e, onPinch: handlePinch }));
    screen.addEventListener('touchend', e => touchEndHandler({ e }));
    screen.addEventListener('touchcancel', e => touchEndHandler({ e }));
  };

  // 터치 시작
  const touchStartHandler = ({ e }: TouchStart): void => {
    const touches = e.changedTouches;
    if (eventHistory.length + touches.length <= 2) {
      for (let i = 0; i < touches.length; i++) {
        const touch = touches[i];
        eventHistory.push(touch);
      }
    }
  };

  // 터치 끝
  const touchEndHandler = ({ e }: TouchEnd): void => {
    const touches = e.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      const touch = touches[i];
      const index = eventHistory.findIndex(cachedEv => cachedEv.identifier === touch.identifier);
      if (index !== -1) {
        eventHistory[index] = touch;
      }
    }
  };

  const touchMoveHandler = ({ e, onPinch }: TouchMove): void => {
    const touches = e.changedTouches;

    console.log(touches)

    for (let i = 0; i < touches.length; i++) {
      const touch = touches[i];
      const index = eventHistory.findIndex(cachedEvent => cachedEvent.identifier === touch.identifier);
      if (index !== -1) {
        eventHistory[index] = touch;

        // 두 개의 터치가 진행중인 경우 핀치 줌으로 판단한다
        if (eventHistory.length === 2) {
          const xDiff = eventHistory[0].clientX - eventHistory[1].clientX;
          const yDiff = eventHistory[0].clientY - eventHistory[1].clientY;
          const curDiff = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

          // 첫 핀치의 경우 비교군이 없으므로 prevDiff가 -1인 경우 생략한다.
          if (prevDiff > 0) {
            const zoom = curDiff - prevDiff;
            const x = (eventHistory[0].clientX + eventHistory[1].clientX) / 2;
            const y = (eventHistory[0].clientY + eventHistory[1].clientY) / 2;
            const { top, left } = (e.currentTarget as HTMLElement).getBoundingClientRect();
            onPinch({ zoom, x: x - left, y: y - top });
          }

          prevDiff = curDiff;
        }
      }
    }
  }

  return (
    <main>
      <Styled.Screen ref={screenRef}>
        <Styled.Target ref={targetRef}>
          {Array.from({length : 16}, (_,index) => (
            <img src={Img} key={index} alt={`${index+1}`}/>
          ))}
        </Styled.Target>
      </Styled.Screen>
    </main>
  );
}

export default PinchZoom;