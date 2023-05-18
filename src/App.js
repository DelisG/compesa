import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import { GlobalProvider } from "./contexts/GlobalContext";
const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Home/>
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
