import "./App.css";
import Jumbo88 from "./pages/Jumbo88";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Jumbo88 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
