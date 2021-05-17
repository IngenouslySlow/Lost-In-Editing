//Importing components
import AboutUs from "./Pages/AboutUs";
import Nav from "./Components/Nav";
import OurWork from "./Pages/OurWork";
import ContactUs from "./Pages/ContactUs";
//Import global style
import GlobalStyle from "./Components/GlobalStyle";

//Router thing
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
