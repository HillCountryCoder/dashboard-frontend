import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignUp } from "./components/SignUp/signUp";

function App() {
  return (
    <div className="h-full flex">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
