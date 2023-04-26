import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Cart } from "./screens/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrinho" element={<Cart/>} />
    </Routes>
  );
}

export default App;
