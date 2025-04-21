import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => (
  <BrowserRouter>
<div className="flex flex-col h-screen">

  <main className="flex-1">
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
</main>

</div></BrowserRouter>
)

export default App
