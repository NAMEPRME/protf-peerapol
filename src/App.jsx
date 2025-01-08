import './App.module.scss'
import {BrowserRouter} from "react-router-dom";
import BaseLayout from "./components/BaseLayout";

function App() {

  return (
    // React Fragment
    <>
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    </>
  )
}

export default App
