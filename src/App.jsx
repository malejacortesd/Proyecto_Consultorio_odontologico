import { Route, Routes} from "react-router-dom";
import { routes } from '../src/routes'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { useContextGlobal } from "./Components/utils/global.context";

function App() {

  const {themeState} = useContextGlobal()

  
  return (
    <div className="App" style={{ backgroundColor: themeState.bgColor, color: themeState.color }}>
      <Navbar />
      <Routes>
        <Route path={routes.Home} element={<Home />} />
        <Route path={routes.Detail} element={<Detail />} />
        <Route path={routes.Contact} element={<Contact />} />
        <Route path={routes.Favs} element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
