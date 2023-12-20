import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import ClickEvents from "./pages/ClickEvents"
import ReactQuery from "./pages/ReactQuery";
import ReactRND from "./pages/ReactRND";
import ReactDraggable from "./pages/ReactDraggable";
import UrlCheck from "./pages/UrlCheck";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />}/>
        <Route path='ClickEvents' element={<ClickEvents num={10} str={`문자`} />} />
        <Route path='ReactQuery' element={<ReactQuery />} />
        <Route path='ReactRND' element={<ReactRND />} />
        <Route path='ReactDraggable' element={<ReactDraggable />} />
        <Route path='UrlCheck' element={<UrlCheck />} />
        <Route path='UrlCheck_Popup' element={<UrlCheck />} />
      </Route>
    </Routes>
  )
}

export default App