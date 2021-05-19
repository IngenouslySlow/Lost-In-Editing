//Importing components
import AboutUs from "./Pages/AboutUs";
import Nav from "./Components/Nav";
import OurWork from "./Pages/OurWork";
import ContactUs from "./Pages/ContactUs";
import MovieDetails from "./Pages/MovieDetails";
//Import global style
import GlobalStyle from "./Components/GlobalStyle";

//Router thing
import { Switch, Route, useLocation } from "react-router-dom";

//Framer motion thing
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetails />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
