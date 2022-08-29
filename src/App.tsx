import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<SideBar />} /> */}
    </Routes>
  );
}

export default App;
