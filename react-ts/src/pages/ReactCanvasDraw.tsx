import * as Styled from "../style/ReactCanvas.style";
import {useState, useRef} from "react";
import CanvasDraw from "react-canvas-draw";

interface State {
    color: string;
    width: number;
    height: number;
    brushRadius: number;
    lazyRadius: number;
}

function ReactCanvasDraw() {
    const canvas = useRef<CanvasDraw | null>(null);
    const loadableCanvas = useRef<CanvasDraw | null>(null);
    const [state, setState] = useState<State>({
        color: "#6f6cdf",
        width: 600,
        height: 600,
        brushRadius: 3,
        lazyRadius: 1,
    });
    const [canvasDataURL, setCanvasDataURL] = useState<string | null>(null);
    const [canvasDataEdit, setCanvasDataEdit] = useState<string | undefined>('');

    const handleLoadPreviousDrawing = () => {
        const savedDrawing = localStorage.getItem("savedDrawing");
        if (loadableCanvas.current && savedDrawing) {
            loadableCanvas.current.loadSaveData(savedDrawing);
        }
    };

    const handleGetDataURL = () => {
        const dataForEdit = canvas.current?.getSaveData();
        const dataForURL = canvas.current?.getDataURL();
        if (dataForURL) {
            setCanvasDataEdit(dataForEdit);
            setCanvasDataURL(dataForURL);
            // console.log(canvas.current?.getDataURL())
        }
    };

    return (
        <Styled.CanvasMainContainer>
            <section>
                <CanvasDraw
                    ref={(canvasDraw) => (canvas.current = canvasDraw)}
                    brushColor={state.color}
                    brushRadius={state.brushRadius}
                    lazyRadius={state.lazyRadius}
                    canvasWidth={state.width}
                    canvasHeight={state.height}
                    hideGrid
                    enablePanAndZoom                // CTRL+ 마우스 조절
                    // clampLinesToDocument         // 영역 안
                    // hideInterface
                />
                <div>
                    <Styled.Buttons>
                        <button onClick={() => {canvas.current && localStorage.setItem("savedDrawing", canvas.current?.getSaveData())}}>저장</button>
                        <button onClick={() => canvas.current?.clear()}>초기화</button>
                        <button onClick={() => canvas.current?.undo()}>뒤로가기</button>
                        <button onClick={handleGetDataURL}>데이터 URL 생성</button>
                        <button onClick={() => setState(prev => ({...prev, color: 'rgba(0, 0, 0, 0)'}))}>지우개</button>
                    </Styled.Buttons>
                    <Styled.Status>
                        <div>
                            <label>Color:</label>
                            <input type="color" value={state.color} onChange={(e) => setState((prev) => ({...prev, color: e.target.value}))}/>
                        </div>
                        <div>
                            <label>Width:</label>
                            <input type="number" value={state.width} onChange={(e) => setState((prev) => ({ ...prev, width: parseInt(e.target.value, 10)}))}/>
                        </div>
                        <div>
                            <label>Height:</label>
                            <input type="number" value={state.height} onChange={(e) => setState((prev) => ({...prev, height: parseInt(e.target.value, 10)}))}/>
                        </div>
                        <div>
                            <label>Brush-Radius:</label>
                            <input type="number" value={state.brushRadius} onChange={(e) => setState((prev) => ({...prev, brushRadius: parseInt(e.target.value, 10)}))}/>
                        </div>
                        <div>
                            <label>Lazy-Radius:</label>
                            <input type="number" value={state.lazyRadius} onChange={(e) => setState((prev) => ({...prev, lazyRadius: parseInt(e.target.value, 10)}))}/>
                        </div>
                    </Styled.Status>
                </div>
            </section>
            <section>
                <CanvasDraw
                    ref={(canvasDraw) => (loadableCanvas.current = canvasDraw)}
                    saveData={localStorage.getItem("savedDrawing")!}
                    canvasWidth={state.width}
                    canvasHeight={state.height}
                    disabled
                    hideGrid
                    hideInterface
                />
                <Styled.Buttons>
                    <button onClick={handleLoadPreviousDrawing}> 이전 그림 불러오기</button>
                </Styled.Buttons>
            </section>
            <section id='data'>
                <span>저장한 데이터</span>
                <img src={canvasDataURL ?? ''}/>
            </section>
            <section id='data'>
                <span>저장한 데이터를 다시 Canvas에 입력</span>
                {
                    canvasDataURL &&
                    <CanvasDraw
                        imgSrc={canvasDataURL}
                        enablePanAndZoom
                        hideGrid
                        hideInterface
                    />
                }
                {/*{*/}
                {/*    canvasDataEdit &&*/}
                {/*    <CanvasDraw*/}
                {/*        saveData={canvasDataEdit}*/}
                {/*        enablePanAndZoom*/}
                {/*        hideGrid*/}
                {/*        hideInterface*/}
                {/*    />*/}
                {/*}*/}
            </section>
        </Styled.CanvasMainContainer>
    );
}

export default ReactCanvasDraw;