import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignUp } from "./components/SignUp/signUp";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <div className="h-full flex">
      <ThemeProvider>
        <ModeToggle className="absolute top-2 right-10 "/>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
