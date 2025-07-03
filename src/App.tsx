import { useEffect, useState } from "react";
import "./styles/App.css";
import NavBar from "./components/navBar/navBar";
import MainContent from "./components/mainContent/mainContent";
import Footer from "./components/footer/footer";

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkTheme]);

  return (
    <div className="app-container">
      <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <MainContent />
      <Footer/>
    </div>
  );
}

export default App;
