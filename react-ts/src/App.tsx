import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import ClickEvents from "./pages/ClickEvents"
import ReactQuery from "./pages/ReactQuery";
import ReactRND from "./pages/ReactRND";
import ReactDraggable from "./pages/ReactDraggable";
import UrlCheck from "./pages/UrlCheck";
import Popup from "./pages/Popup";
import PopupPage from "./components/Popup/PopupPage";
import ReactCanvasDraw from "./pages/ReactCanvasDraw";
import ReactSketchCanvas from "./pages/ReactSketchCanvas";
import PinchZoom from "./pages/PinchZoom";
import CreatePortal from "./pages/CreatePortal";
import ScrollEffect from "./pages/ScrollEffect";
import ReactDNDGrid from "./pages/ReactDNDGrid";
import DropDND from "./pages/DropDND";
import OXCustom from "./pages/OXCustom";
import SectionDrag from "./pages/SectionDrag";
import MindMap from "./pages/MindMap";
import SortBlock from "./pages/SortBlock";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='ClickEvents' element={<ClickEvents num={10} str={`문자`} />} />
        <Route path='ReactQuery' element={<ReactQuery />} />
        <Route path='ReactRND' element={<ReactRND />} />
        <Route path='ReactDraggable' element={<ReactDraggable />} />
        <Route path='UrlCheck' element={<UrlCheck />} />
        <Route path='Popup' element={<Popup />} />
        <Route path='ReactCanvasDraw' element={<ReactCanvasDraw />} />
        <Route path='ReactSketchCanvas' element={<ReactSketchCanvas />} />
        <Route path='PinchZoom' element={<PinchZoom />} />
        <Route path='CreatePortal' element={<CreatePortal />} />
        <Route path='ScrollEffect' element={<ScrollEffect />} />
        <Route path='ReactDNDGrid' element={<ReactDNDGrid />} />
        <Route path='DropDND' element={<DropDND />} />
        <Route path='OXCustom' element={<OXCustom />} />
        <Route path='SectionDrag' element={<SectionDrag />} />
        <Route path='MindMap' element={<MindMap />} />
        <Route path='SortBlock' element={<SortBlock />} />
      </Route>
      <Route path='PopupPage' element={<PopupPage />} />
    </Routes>
  )
}

export default App
