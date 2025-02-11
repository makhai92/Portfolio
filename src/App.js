import { Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
