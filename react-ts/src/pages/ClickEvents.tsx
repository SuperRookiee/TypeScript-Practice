import * as Styled from "../style/ClickEvents.style";
import { useState, MouseEvent } from "react";
import ClickArea from "../components/clickEvents/ClickArea";

interface ISampleProps {
  num: number,
  str: string,
}

function ClickEvents(props: ISampleProps) {
  const [isDropMenuOpen, setDropMenuOpen] = useState<boolean>(false);

  const toggleDropMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setDropMenuOpen((prev) => !prev);
  };

  return (
    <Styled.ClickEventsContainer onClick={() => setDropMenuOpen(false)}>
      <section>
        <div id="outside_area">
          <h1>버튼 영역 밖</h1>
        </div>
        <ClickArea {...props} isDropMenuOpen={isDropMenuOpen} toggleDropMenu={toggleDropMenu} />
      </section>
    </Styled.ClickEventsContainer>
  );
};

export default ClickEvents;