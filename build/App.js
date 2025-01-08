import './App.module.scss';
import { BrowserRouter } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
function App() {
  return (
    /*#__PURE__*/
    // React Fragment
    React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(BaseLayout, null)))
  );
}
export default App;