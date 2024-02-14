import * as Styled from "../style/ReactCanvas.style";
import { ReactSketchCanvas, CanvasPath } from "react-sketch-canvas";
import { useRef, useState, useEffect } from "react";

interface State {
    color: string;
    width: number;
    height: number;
    brushRadius: number;
    eraserWidth: number;
    canvasColor: string;
}

function SketchCanvas() {
    const canvasRef = useRef<ReactSketchCanvas>(null);
    const [paths, setPaths] = useState<CanvasPath | null>(null);
    const [state, setState] = useState<State>({
        color: "#e15b6f",
        width: 600,
        height: 600,
        brushRadius: 20,
        eraserWidth: 10,
        canvasColor: "#ffffff",
    });

    useEffect(() => {
        const storedPaths = localStorage.getItem("paths");
        if (storedPaths) {
            const parsedPaths = JSON.parse(storedPaths);
            setPaths(parsedPaths);
            parsedPaths && canvasRef.current?.loadPaths(parsedPaths);
        }
    }, []);

    const handleCanvasAction = (action: "undo" | "redo" | "clear" | "reset") => {
        switch (action) {
            case "undo":
                canvasRef.current?.undo();
                break;
            case "redo":
                canvasRef.current?.redo();
                break;
            case "clear":
                canvasRef.current?.clearCanvas();
                break;
            case "reset":
                canvasRef.current?.resetCanvas();
                break;
        }
    };

    const handleExportPaths = async () => {
        try {
            const exportedPaths = await canvasRef.current?.exportPaths();
            if (exportedPaths) {
                localStorage.setItem("paths", JSON.stringify(exportedPaths));
                setPaths(exportedPaths);
            }
        } catch (error) {
            console.error("Error exporting paths:", error);
        }
    };

    const handleInputChange = (key: keyof State, value: string | number) => {
        setState((prev) => ({ ...prev, [key]: value }));
    };

    const handleDownloadImage = async () => {
        try {
            const imageDataURL = await canvasRef.current?.exportImage('png');
            if (imageDataURL) {
                const link = document.createElement('a');
                link.href = imageDataURL;
                link.download = 'sketch_image';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                console.warn('No image data found.');
            }
        } catch (error) {
            console.error('Error exporting image:', error);
        }
    };


    return (
        <Styled.CanvasMainContainer>
            <section>
                <ReactSketchCanvas
                    ref={canvasRef}
                    width={`${state.width}px`}
                    height={`${state.height}px`}
                    strokeWidth={state.brushRadius}
                    eraserWidth={state.eraserWidth}
                    strokeColor={state.color}
                    canvasColor={state.canvasColor}
                />
                <div>
                    <Styled.Buttons>
                        <button onClick={() => handleCanvasAction("undo")}>뒤로가기 (undo)</button>
                        <button onClick={() => handleCanvasAction("redo")}>앞으로가기 (redo)</button>
                        <button onClick={() => handleCanvasAction("clear")}>모두 지우기 (clear all)</button>
                        <button onClick={() => handleCanvasAction("reset")}>초기화 (reset all)</button>
                        <button onClick={() => canvasRef.current?.eraseMode(false)}>펜</button>
                        <button onClick={() => canvasRef.current?.eraseMode(true)}>지우개</button>
                        <button onClick={handleExportPaths}>그림 저장</button>
                        <button onClick={handleDownloadImage}>이미지 다운로드</button>
                        <label>펜 색상</label>
                        <input type="color" value={state.color} onChange={(e) => handleInputChange("color", e.target.value)} />
                        <label>배경색</label>
                        <input type="color" value={state.canvasColor} onChange={(e) => handleInputChange("canvasColor", e.target.value)} />
                        <label>펜 굵기</label>
                        <input type="range" min={1} max={50} value={state.brushRadius} onChange={(e) => handleInputChange("brushRadius", parseInt(e.target.value))} />
                        <label>지우개 굵기</label>
                        <input type="range" min={1} max={50} value={state.eraserWidth} onChange={(e) => handleInputChange("eraserWidth", parseInt(e.target.value))} />
                    </Styled.Buttons>
                </div>
            </section>
            <section id='export_path'>
                <h3>Exported Paths:</h3>
                {paths && (
                    <pre>{JSON.stringify(paths, null, 2)}</pre>
                )}
            </section>
        </Styled.CanvasMainContainer>
    );
}

export default SketchCanvas;