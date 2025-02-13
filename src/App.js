import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
